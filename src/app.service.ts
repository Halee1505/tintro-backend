import { Injectable, Res, HttpStatus, Body } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Extension, extensionDocument } from './model/extension.schema';
import { Bill, billDocument } from './model/bill.schema';
import { Room, roomDocument } from './model/room.schema';
import { FixRequest, fixRequestDocument } from './model/fixRequest.schema';
import { User, userDocument } from './model/user.schema';
import {
  Notification,
  notificationDocument,
} from './model/notification.schema';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello halee!';
  }
}

export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<userDocument>) {}
  async getUsers(): Promise<User[]> {
    return this.userModel.find().exec();
  }
  async getUserById(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id }).exec();
  }
  async createUser(userInfo: User): Promise<User> {
    const newUser = new this.userModel(userInfo);
    return await newUser.save();
  }
  async updateUser(id: string, userInfo: User): Promise<User> {
    return this.userModel.findOneAndUpdate({ _id: id }, userInfo).exec();
  }

  async deleteUser(id: string): Promise<User> {
    return this.userModel.findOneAndDelete({ _id: id }).exec();
  }

  async login(
    @Res() res,
    @Body()
    phoneNumber: string,
    password: string,
    role: string,
  ): Promise<User> {
    const user = await this.userModel
      .findOne({ mPhoneNumber: phoneNumber })
      .exec();
    if (user) {
      if (user.mPassword === password && user.mRole === role) {
        return res.status(HttpStatus.OK).json({
          message: 'Login successfully',
          data: user,
          statusCode: HttpStatus.OK,
        });
      } else if (user.mPassword !== password) {
        return res.status(HttpStatus.NON_AUTHORITATIVE_INFORMATION).json({
          message: 'Sai mật khẩu',
          statusCode: HttpStatus.NON_AUTHORITATIVE_INFORMATION,
        });
      } else {
        return res.status(HttpStatus.NON_AUTHORITATIVE_INFORMATION).json({
          message: 'Sai vai trò',
          statusCode: HttpStatus.NON_AUTHORITATIVE_INFORMATION,
        });
      }
    } else {
      return res.status(HttpStatus.NOT_FOUND).json({
        message: 'Không tìm thấy người dùng',
        statusCode: HttpStatus.NOT_FOUND,
      });
    }
  }

  async changePassword(
    @Res() res,
    @Body()
    phoneNumber: string,
    password: string,
    newPassword: string,
  ): Promise<User> {
    const user = await this.userModel
      .findOne({ mPhoneNumber: phoneNumber })
      .exec();
    if (user) {
      if (user.mPassword === password) {
        user.mPassword = newPassword;
        return res.status(HttpStatus.OK).json({
          message: 'Change password successfully',
          data: user,
          statusCode: HttpStatus.OK,
        });
      } else {
        return res.status(HttpStatus.NON_AUTHORITATIVE_INFORMATION).json({
          message: 'Sai mật khẩu',
          statusCode: HttpStatus.NON_AUTHORITATIVE_INFORMATION,
        });
      }
    }
  }
}

export class BillService {
  constructor(@InjectModel(Bill.name) private billModel: Model<billDocument>) {}
  async getBills(): Promise<Bill[]> {
    return this.billModel.find().exec();
  }
  async getBillById(id: string): Promise<Bill> {
    return this.billModel.findOne({ _id: id }).exec();
  }
  async getBillByLeaserId(id: string): Promise<Bill[]> {
    return this.billModel.find({ mLeaserId: id }).exec();
  }
  async getBillByRenterId(id: string): Promise<Bill[]> {
    return this.billModel.find({ mRentersId: id }).exec();
  }

  async getBillByRoomId(id: string, type: string): Promise<Bill[]> {
    if (type === 'all') {
      return this.billModel.find({ mRoomId: id }).exec();
    }

    return this.billModel
      .find({
        $and: [{ mRoomId: id }, { mType: type }],
      })
      .exec();
  }

  async createBill(billInfo: Bill): Promise<Bill> {
    const newBill = new this.billModel(billInfo);
    return await newBill.save();
  }
  async updateBill(id: string, billInfo: Bill): Promise<Bill> {
    return this.billModel.findOneAndUpdate({ _id: id }, billInfo).exec();
  }
  async deleteBill(id: string): Promise<Bill> {
    return this.billModel.findOneAndDelete({ _id: id }).exec();
  }
}

export class RoomService {
  constructor(
    @InjectModel(Room.name) private roomModel: Model<roomDocument>,
    @InjectModel(Extension.name)
    private extensionModel: Model<extensionDocument>,
  ) {}
  async getRooms(): Promise<Room[]> {
    return this.roomModel.find().exec();
  }
  async getRoomByIdWithExtension(id: string): Promise<Room> {
    const room = (await this.roomModel
      .findOne({
        _id: id,
      })
      .exec()) as any;
    const extension = await this.extensionModel
      .find({
        mRoomId: id,
      })
      .exec();
    const result = {
      ...room._doc,
      mExtensions: extension,
    };
    return result;
  }

  async getRoomByRenterId(id: string): Promise<Room[]> {
    return this.roomModel.find({ mRenterId: id }).exec();
  }
  async getRentedRoomsCountByLeaserId(id: string): Promise<number> {
    return await this.roomModel
      .countDocuments({ mLeaserId: id, mStatus: 'RENTED' })
      .exec();
  }

  async getRoomByLeaserId(id: string): Promise<Room[]> {
    return this.roomModel.find({ mLeaserId: id }).exec();
  }

  async createRoom(roomInfo: Room): Promise<Room> {
    const newRoom = new this.roomModel(roomInfo);
    return await newRoom.save();
  }
  async updateRoom(id: string, roomInfo: Room): Promise<Room> {
    return this.roomModel.findOneAndUpdate({ _id: id }, roomInfo).exec();
  }
  async deleteRoom(id: string): Promise<Room> {
    return this.roomModel.findOneAndDelete({ _id: id }).exec();
  }
}

export class FixRequestService {
  constructor(
    @InjectModel(FixRequest.name)
    private fixRequestModel: Model<fixRequestDocument>,
  ) {}
  async getFixRequests(): Promise<FixRequest[]> {
    return this.fixRequestModel.find().exec();
  }
  async getFixRequestById(id: string): Promise<FixRequest> {
    return this.fixRequestModel
      .findOne({
        _id: id,
      })
      .exec();
  }
  async createFixRequest(fixRequestInfo: FixRequest): Promise<FixRequest> {
    const newFixRequest = new this.fixRequestModel(fixRequestInfo);
    return await newFixRequest.save();
  }
  async updateFixRequest(
    id: string,
    fixRequestInfo: FixRequest,
  ): Promise<FixRequest> {
    return this.fixRequestModel
      .findOneAndUpdate({ _id: id }, fixRequestInfo, {
        new: true,
      })
      .exec();
  }

  async deleteFixRequest(id: string): Promise<FixRequest> {
    return this.fixRequestModel.findOneAndDelete({ _id: id }).exec();
  }
}

export class ExtensionService {
  constructor(
    @InjectModel(Extension.name)
    private extensionModel: Model<extensionDocument>,
  ) {}
  async getExtensions(): Promise<Extension[]> {
    return this.extensionModel.find().exec();
  }
  async getExtensionById(id: string): Promise<Extension> {
    return this.extensionModel.findOne({ _id: id }).exec();
  }
  async getExtensionsWithRoom(id: string): Promise<Extension> {
    return this.extensionModel
      .findOne({
        mRoomId: id,
      })
      .populate('mRoomId')
      .exec();
  }

  async createExtension(extensionInfo: Extension): Promise<Extension> {
    const newExtension = new this.extensionModel(extensionInfo);
    return await newExtension.save();
  }
  async updateExtension(
    id: string,
    extensionInfo: Extension,
  ): Promise<Extension> {
    return this.extensionModel
      .findOneAndUpdate({ _id: id }, extensionInfo)
      .exec();
  }
  async deleteExtension(id: string): Promise<Extension> {
    return this.extensionModel.findOneAndDelete({ _id: id }).exec();
  }
}
export class NotificationService {
  constructor(
    @InjectModel(Notification.name)
    private notificationModel: Model<notificationDocument>,
  ) {}
  async getNotifications(): Promise<Notification[]> {
    return this.notificationModel.find().exec();
  }
  async getNotificationById(id: string): Promise<Notification> {
    return this.notificationModel.findOne({ _id: id }).exec();
  }
  async getNotificationsByUserId(id: string): Promise<Notification[]> {
    return this.notificationModel
      .find({
        mUserId: id,
      })
      .exec();
  }
  async createNewNotification(noti: Notification): Promise<Notification> {
    const newNotification = new this.notificationModel({
      ...noti,
      mCreated: new Date(),
      mUpdated: new Date(),
    });
    return await newNotification.save();
  }
}

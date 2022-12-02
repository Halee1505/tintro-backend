import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Extension, extensionDocument } from './model/extension.schema';
import { Bill, billDocument } from './model/bill.schema';
import { Room, roomDocument } from './model/room.schema';
import { FixRequest, fixRequestDocument } from './model/fixRequest.schema';
import { User, userDocument } from './model/user.schema';
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
  async getUserById(id: number): Promise<User> {
    return this.userModel.findOne({ mId: id }).exec();
  }
  async createUser(userInfo: User): Promise<User> {
    const newUser = new this.userModel(userInfo);
    return await newUser.save();
  }
  async updateUser(id: number, userInfo: User): Promise<User> {
    return this.userModel.findOneAndUpdate({ mId: id }, userInfo).exec();
  }

  async deleteUser(id: number): Promise<User> {
    return this.userModel.findOneAndDelete({ mId: id }).exec();
  }
}

export class BillService {
  constructor(@InjectModel(Bill.name) private billModel: Model<billDocument>) {}
  async getBills(): Promise<Bill[]> {
    return this.billModel.find().exec();
  }
  async getBillById(id: number): Promise<Bill> {
    return this.billModel.findOne({ mId: id }).exec();
  }
  async createBill(billInfo: Bill): Promise<Bill> {
    const newBill = new this.billModel(billInfo);
    return await newBill.save();
  }
  async updateBill(id: number, billInfo: Bill): Promise<Bill> {
    return this.billModel.findOneAndUpdate({ mId: id }, billInfo).exec();
  }
  async deleteBill(id: number): Promise<Bill> {
    return this.billModel.findOneAndDelete({ mId: id }).exec();
  }
}

export class RoomService {
  constructor(@InjectModel(Room.name) private roomModel: Model<roomDocument>) {}
  async getRooms(): Promise<Room[]> {
    return this.roomModel.find().exec();
  }
  async getRoomById(id: number): Promise<Room> {
    return this.roomModel.findOne({ mId: id }).exec();
  }
  async createRoom(roomInfo: Room): Promise<Room> {
    const newRoom = new this.roomModel(roomInfo);
    return await newRoom.save();
  }
  async updateRoom(id: number, roomInfo: Room): Promise<Room> {
    return this.roomModel.findOneAndUpdate({ mId: id }, roomInfo).exec();
  }
  async deleteRoom(id: number): Promise<Room> {
    return this.roomModel.findOneAndDelete({ mId: id }).exec();
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
  async getFixRequestById(id: number): Promise<FixRequest> {
    return this.fixRequestModel
      .findOne({
        mId: id,
      })
      .exec();
  }
  async createFixRequest(fixRequestInfo: FixRequest): Promise<FixRequest> {
    const newFixRequest = new this.fixRequestModel(fixRequestInfo);
    return await newFixRequest.save();
  }
  async updateFixRequest(
    id: number,
    fixRequestInfo: FixRequest,
  ): Promise<FixRequest> {
    return this.fixRequestModel
      .findOneAndUpdate({ mId: id }, fixRequestInfo, {
        new: true,
      })
      .exec();
  }

  async deleteFixRequest(id: number): Promise<FixRequest> {
    return this.fixRequestModel.findOneAndDelete({ mId: id }).exec();
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
  async getExtensionById(id: number): Promise<Extension> {
    return this.extensionModel.findOne({ mId: id }).exec();
  }
  async createExtension(extensionInfo: Extension): Promise<Extension> {
    const newExtension = new this.extensionModel(extensionInfo);
    return await newExtension.save();
  }
  async updateExtension(
    id: number,
    extensionInfo: Extension,
  ): Promise<Extension> {
    return this.extensionModel
      .findOneAndUpdate({ mId: id }, extensionInfo)
      .exec();
  }
  async deleteExtension(id: number): Promise<Extension> {
    return this.extensionModel.findOneAndDelete({ mId: id }).exec();
  }
}

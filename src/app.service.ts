import { Injectable } from '@nestjs/common';
import { Bill, BillStatus } from './model/Bill';
import { User, UserRole } from './model/User';
import { Extension, Room, RoomStatus } from './model/Room';
import { FixRequest, FixRequestStatus } from './model/FixRequest';
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUsers(): User[] {
    return [
      {
        mId: 1,
        mUserName: 'Nguyen Van A',
        mEmail: '',
        mPassword: '',
        mPhoneNumber: '0123456789',
        mRole: UserRole.RENTER,
        mCreated: new Date(),
        mUpdated: new Date(),
      },
    ];
  }
  getUserById(id: number): User {
    return {
      mId: id,
      mUserName: 'Nguyen Van A',
      mEmail: '',
      mPassword: '',
      mPhoneNumber: '0123456789',
      mRole: UserRole.RENTER,
      mCreated: new Date(),
      mUpdated: new Date(),
    };
  }
  createUser(userInfo: User): string {
    return `Create user ${userInfo.mUserName} successfull`;
  }

  getBills(): Bill[] {
    return [
      {
        mId: 1,
        mRoomId: 1,
        mRenterId: 1,
        mLeaserId: 1,
        mRentDate: new Date(),
        mElectricityFrom: 0,
        mWaterFrom: 0,
        mElectricityTo: 100,
        mWaterTo: 2,
        mTotalElectricity: 100,
        mTotalWater: 2,
        mTotalPrice: 2000000,
        mStatus: BillStatus.NOT_PAID,
      },
    ];
  }
  getBillById(id: number): Bill {
    return {
      mId: id,
      mRoomId: id,
      mRenterId: id,
      mLeaserId: id,
      mRentDate: new Date(),
      mElectricityFrom: 0,
      mWaterFrom: 0,
      mElectricityTo: 100,
      mWaterTo: 2,
      mTotalElectricity: 100,
      mTotalWater: 2,
      mTotalPrice: 2000000,
      mStatus: BillStatus.NOT_PAID,
    };
  }

  getRooms(): Room[] {
    return new Array<number>(10).fill(0).map((_, index) => {
      return {
        mId: index,
        mRenterId: index,
        mLeaserId: index,
        mRoomName: `Phòng trọ ${index}`,
        mImageUrl: [
          'https://ancu.me/images/201904/cac-mau-phong-tro-dep-hien-nay-duoc-khach-hang-ua-chuong/cac-mau-phong-tro-dep-hien-nay-duoc-khach-hang-ua-chuong.jpg',
        ],
        mRentPrice: 2000000,
        mAddress: 'Ha Noi',
        mArea: 20,
        mExtension: [Extension.AIR_CONDITIONER],
        mDescription: 'Phong tro',
        mStatus: RoomStatus.AVAILABLE,
        mElectricityPrice: 2000,
        mWaterPrice: 2000,
        mBillDeadline: new Date(),
        mCreated: new Date(),
      };
    });
  }
  getRoomById(id: number): Room {
    return {
      mId: id,
      mRenterId: id,
      mLeaserId: id,
      mRoomName: `Phòng trọ ${id}`,
      mImageUrl: [
        'https://ancu.me/images/201904/cac-mau-phong-tro-dep-hien-nay-duoc-khach-hang-ua-chuong/cac-mau-phong-tro-dep-hien-nay-duoc-khach-hang-ua-chuong.jpg',
      ],
      mRentPrice: 2000000,
      mAddress: 'Ha Noi',
      mArea: 20,
      mExtension: [Extension.AIR_CONDITIONER],
      mDescription: 'Phong tro',
      mStatus: RoomStatus.AVAILABLE,
      mElectricityPrice: 2000,
      mWaterPrice: 2000,
      mBillDeadline: new Date(),
      mCreated: new Date(),
    };
  }
  getFixRequests(): FixRequest[] {
    return [
      {
        mId: 1,
        mRoomId: 1,
        mTitle: 'Sua chua',
        mDescription: 'Sua chua',
        mStatus: FixRequestStatus.PENDING,
        mCreated: new Date(),
        mUpdated: new Date(),
      },
    ];
  }
  getFixRequestById(id: number): FixRequest {
    return {
      mId: id,
      mRoomId: id,
      mTitle: 'Sua chua',
      mDescription: 'Sua chua',
      mStatus: FixRequestStatus.PENDING,
      mCreated: new Date(),
      mUpdated: new Date(),
    };
  }
}

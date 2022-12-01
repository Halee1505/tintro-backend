/* eslint-disable prettier/prettier */
export interface Room {
  mId: number;
  mRenterId: number;
  mLeaserId: number;
  mRoomName: string;
  mImageUrl: string[];
  mRentPrice: number;
  mAddress: string;
  mArea: number;
  mExtension: Extension[];
  mDescription: string;
  mStatus: RoomStatus;
  mElectricityPrice: number;
  mWaterPrice: number;
  mBillDeadline: Date;
  mCreated: Date;
}

export enum RoomStatus {
  AVAILABLE = 'AVAILABLE',
  RENTED = 'RENTED',
  CANCELLED = 'CANCELLED',
}

export enum Extension {
  AIR_CONDITIONER = 'AIR_CONDITIONER',
  FRIDGE = 'FRIDGE',
  WASHING_MACHINE = 'WASHING_MACHINE',
  KITCHEN = 'KITCHEN',
  FREE_TIME = 'FREE_TIME',
  PARKING = 'PARKING',
  WIFI = 'WIFI',
  GARRET = 'GARRET',
  ELECTRIC = 'ELECTRIC',
  WATER = 'WATER',
}

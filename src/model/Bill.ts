/* eslint-disable prettier/prettier */
export interface Bill {
  mId: number;
  mRoomId: number;
  mRenterId: number;
  mLeaserId: number;
  mRentDate: Date;
  mElectricityFrom: number;
  mWaterFrom: number;
  mElectricityTo: number;
  mWaterTo: number;
  mTotalElectricity: number;
  mTotalWater: number;
  mTotalPrice: number;
  mStatus: BillStatus;
}

export enum BillStatus {
  NOT_PAID = 'NOT_PAID',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
}

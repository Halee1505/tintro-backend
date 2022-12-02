/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type billDocument = Bill & Document;
@Schema()
export class Bill {
  @Prop()
  mRoomId: number;
  @Prop()
  mRenterId: number;
  @Prop()
  mLeaserId: number;
  @Prop()
  mRentDate: Date;
  @Prop()
  mElectricityFrom: number;
  @Prop()
  mWaterFrom: number;
  @Prop()
  mElectricityTo: number;
  @Prop()
  mWaterTo: number;
  @Prop()
  mTotalElectricity: number;
  @Prop()
  mTotalWater: number;
  @Prop()
  mTotalPrice: number;
  @Prop()
  mStatus: BillStatus;
  @Prop()
  mCreated: Date;
  @Prop()
  mUpdated: Date;
}
export const BillSchema = SchemaFactory.createForClass(Bill);
export enum BillStatus {
  NOT_PAID = 'NOT_PAID',
  PAID = 'PAID',
  CANCELLED = 'CANCELLED',
}

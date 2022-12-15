/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type billDocument = Bill & Document;
@Schema()
export class Bill {
  @Prop()
  mRoomId: string;
  @Prop()
  mMonth: number;
  @Prop()
  mYear: number;
  @Prop()
  mType: string;
  @Prop()
  mElectricCount: number;
  @Prop()
  mWaterCount: number;
  @Prop()
  mPrice: number;
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

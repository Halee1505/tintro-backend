/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type roomDocument = Room & Document;
@Schema()
export class Room {
  @Prop()
  mId: number;
  @Prop()
  mRenterId: number;
  @Prop()
  mLeaserId: number;
  @Prop()
  mRoomName: string;
  @Prop()
  mImageUrl: string[];
  @Prop()
  mRentPrice: number;
  @Prop()
  mAddress: string;
  @Prop()
  mArea: number;
  @Prop()
  mDescription: string;
  @Prop()
  mStatus: RoomStatus;
  @Prop()
  mElectricityPrice: number;
  @Prop()
  mWaterPrice: number;
  @Prop()
  mBillDeadline: Date;
  @Prop()
  mCreated: Date;
  @Prop()
  mUpdated: Date;
}

export const RoomSchema = SchemaFactory.createForClass(Room);

export enum RoomStatus {
  AVAILABLE = 'AVAILABLE',
  RENTED = 'RENTED',
  CANCELLED = 'CANCELLED',
}

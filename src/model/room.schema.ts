/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type roomDocument = Room & Document;
@Schema()
export class Room {
  @Prop()
  mRenterId: string;
  @Prop()
  mLeaserId: string;
  @Prop()
  mRoomName: string;
  @Prop()
  mImageUrl: string[];
  @Prop()
  mExtensions: string[];
  @Prop()
  mCurPeople: number;
  @Prop()
  mMaxPeople: number;
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
  mClosingDate: Date;
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

/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type fixRequestDocument = FixRequest & Document;
@Schema()
export class FixRequest {
  @Prop()
  mRoomId: number;
  @Prop()
  mTitle: string;
  @Prop()
  mDescription: string;
  @Prop()
  mStatus: FixRequestStatus;
  @Prop()
  mCreated: Date;
  @Prop()
  mUpdated: Date;
}
export const FixRequestSchema = SchemaFactory.createForClass(FixRequest);
export enum FixRequestStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  REJECTED = 'REJECTED',
  DONE = 'DONE',
}

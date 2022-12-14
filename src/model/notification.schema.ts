/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type notificationDocument = Notification & Document;
@Schema()
export class Notification {
  @Prop()
  mRoomId: string;
  @Prop()
  mUserId: string;
  @Prop()
  mType: string;
  @Prop()
  mCreated: Date;
  @Prop()
  mUpdated: Date;
}
export const NotificationSchema = SchemaFactory.createForClass(Notification);

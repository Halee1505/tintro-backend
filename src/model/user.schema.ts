/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type userDocument = User & Document;
@Schema()
export class User {
  @Prop()
  mUserName: string;
  @Prop()
  mEmail?: string;
  @Prop()
  mPassword: string;
  @Prop()
  mPhoneNumber: string;
  @Prop()
  mRole: UserRole;
  @Prop()
  mCreated: Date;
  mUpdated: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
export enum UserRole {
  RENTER = 'RENTER',
  LEASER = 'LEASER',
  ADMIN = 'ADMIN',
}

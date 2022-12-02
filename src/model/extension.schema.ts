/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type extensionDocument = Extension & Document;
@Schema()
export class Extension {
  @Prop()
  mId: number;
  @Prop()
  mRoomId: number;
  @Prop()
  mExtensionName: string;
  @Prop()
  mExtensionValue: ExtensionValue;
}
export const ExtensionSchema = SchemaFactory.createForClass(Extension);
export enum ExtensionValue {
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

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './model/user.schema';
import { Room, RoomSchema } from './model/room.schema';
import { Bill, BillSchema } from './model/bill.schema';
import { FixRequest, FixRequestSchema } from './model/fixRequest.schema';
import { Extension, ExtensionSchema } from './model/extension.schema';
import { Notification, NotificationSchema } from './model/notification.schema';
import {
  UserService,
  RoomService,
  BillService,
  FixRequestService,
  ExtensionService,
  NotificationService,
} from './app.service';

import {
  UserController,
  RoomController,
  BillController,
  FixRequestController,
  ExtensionController,
  NotificationController,
} from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://tintro:tintro@cluster0.rj3cmwv.mongodb.net/tintro',
    ),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Bill.name, schema: BillSchema },
      { name: Room.name, schema: RoomSchema },
      { name: FixRequest.name, schema: FixRequestSchema },
      { name: Extension.name, schema: ExtensionSchema },
      { name: Notification.name, schema: NotificationSchema },
    ]),
  ],
  controllers: [
    AppController,
    UserController,
    RoomController,
    BillController,
    FixRequestController,
    ExtensionController,
    NotificationController,
  ],

  providers: [
    AppService,
    UserService,
    RoomService,
    BillService,
    FixRequestService,
    ExtensionService,
    NotificationService,
  ],
})
export class AppModule {}

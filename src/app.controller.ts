import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';

import { Bill } from './model/bill.schema';
import { Extension } from './model/extension.schema';
import { FixRequest } from './model/fixRequest.schema';
import { Room } from './model/room.schema';
import { User } from './model/user.schema';
import {
  AppService,
  UserService,
  BillService,
  RoomService,
  FixRequestService,
  ExtensionService,
} from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number): Promise<User> {
    return this.userService.getUserById(id);
  }
  @Post()
  createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }
  @Post('login')
  login(@Res() res, @Body() user: any): Promise<User> {
    return this.userService.login(
      res,
      user.mPhoneNumber,
      user.mPassword,
      user.mRole,
    );
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.updateUser(id, user);
  }
  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<User> {
    return this.userService.deleteUser(id);
  }
}

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Get()
  getBills(): Promise<Bill[]> {
    return this.billService.getBills();
  }

  @Get(':id')
  getBillById(@Param('id') id: number): Promise<Bill> {
    return this.billService.getBillById(id);
  }

  @Post()
  createBill(@Body() bill: Bill): Promise<Bill> {
    return this.billService.createBill(bill);
  }

  @Put(':id')
  updateBill(@Param('id') id: number, @Body() bill: Bill): Promise<Bill> {
    return this.billService.updateBill(id, bill);
  }

  @Delete(':id')
  deleteBill(@Param('id') id: number): Promise<Bill> {
    return this.billService.deleteBill(id);
  }
}

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  getRooms(): Promise<Room[]> {
    return this.roomService.getRooms();
  }

  @Get(':id')
  getRoomById(@Param('id') id: number): Promise<Room> {
    return this.roomService.getRoomById(id);
  }

  @Post()
  createRoom(@Body() room: Room): Promise<Room> {
    return this.roomService.createRoom(room);
  }

  @Put(':id')
  updateRoom(@Param('id') id: number, @Body() room: Room): Promise<Room> {
    return this.roomService.updateRoom(id, room);
  }

  @Delete(':id')
  deleteRoom(@Param('id') id: number): Promise<Room> {
    return this.roomService.deleteRoom(id);
  }
}

@Controller('fixRequest')
export class FixRequestController {
  constructor(private readonly fixRequestService: FixRequestService) {}

  @Get()
  getFixRequests(): Promise<FixRequest[]> {
    return this.fixRequestService.getFixRequests();
  }

  @Get(':id')
  getFixRequestById(@Param('id') id: number): Promise<FixRequest> {
    return this.fixRequestService.getFixRequestById(id);
  }
  @Post()
  createFixRequest(@Body() fixRequestInfo: FixRequest): Promise<FixRequest> {
    return this.fixRequestService.createFixRequest(fixRequestInfo);
  }
  @Put(':id')
  updateFixRequest(
    @Param('id') id: number,
    @Body() fixRequestInfo: FixRequest,
  ): Promise<FixRequest> {
    return this.fixRequestService.updateFixRequest(id, fixRequestInfo);
  }
  @Delete(':id')
  deleteFixRequest(@Param('id') id: number): Promise<FixRequest> {
    return this.fixRequestService.deleteFixRequest(id);
  }
}

@Controller('extension')
export class ExtensionController {
  constructor(private readonly extensionService: ExtensionService) {}

  @Get()
  getExtensions(): Promise<Extension[]> {
    return this.extensionService.getExtensions();
  }

  @Get(':id')
  getExtensionById(@Param('id') id: number): Promise<Extension> {
    return this.extensionService.getExtensionById(id);
  }
  @Post()
  createExtension(@Body() extensionInfo: Extension): Promise<Extension> {
    return this.extensionService.createExtension(extensionInfo);
  }

  @Put(':id')
  updateExtension(
    @Param('id') id: number,
    @Body() extensionInfo: Extension,
  ): Promise<Extension> {
    return this.extensionService.updateExtension(id, extensionInfo);
  }
  @Delete(':id')
  deleteExtension(@Param('id') id: number): Promise<Extension> {
    return this.extensionService.deleteExtension(id);
  }
}

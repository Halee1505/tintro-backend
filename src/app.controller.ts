import { Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Bill } from './model/Bill';
import { User } from './model/User';
import { Room } from './model/Room';
import { FixRequest } from './model/FixRequest';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/user')
  getUsers(): User[] {
    return this.appService.getUsers();
  }

  getUserById(@Param('id') id: number): User {
    return this.appService.getUserById(id);
  }

  @Post('/user')
  createUser(userInfo: User): string {
    return this.appService.createUser(userInfo);
  }

  @Get('/bill')
  getBills(): Bill[] {
    return this.appService.getBills();
  }
  @Get('/bill/:id')
  getBillById(@Param('id') id: number): Bill {
    return this.appService.getBillById(id);
  }

  @Get('/room')
  getRooms(): Room[] {
    return this.appService.getRooms();
  }
  @Get('/room/:id')
  getRoomById(@Param('id') id: number): Room {
    return this.appService.getRoomById(id);
  }

  @Get('/fix-request')
  getFixRequests(): FixRequest[] {
    return this.appService.getFixRequests();
  }
  @Get('/fix-request/:id')
  getFixRequestById(@Param('id') id: number): FixRequest {
    return this.appService.getFixRequestById(id);
  }
}

import { Controller, Get, Post } from '@nestjs/common';
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
  getUser(): User[] {
    return this.appService.getUser();
  }
  @Post('/user')
  createUser(userInfo: User): string {
    return this.appService.createUser(userInfo);
  }

  @Get('/bill')
  getBill(): Bill[] {
    return this.appService.getBill();
  }

  @Get('/room')
  getRoom(): Room[] {
    return this.appService.getRoom();
  }

  @Get('/fix-request')
  getFixRequest(): FixRequest[] {
    return this.appService.getFixRequest();
  }
}

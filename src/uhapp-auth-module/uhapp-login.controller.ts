import { Controller, Get } from '@nestjs/common';

@Controller('login')
export class UhappLoginController {
  @Get()
  getLogin(): string {
    return 'Hi from Login';
  }
}

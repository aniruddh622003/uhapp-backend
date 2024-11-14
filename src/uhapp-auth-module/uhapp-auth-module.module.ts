import { Module } from '@nestjs/common';
import { UhappLoginController } from './uhapp-login.controller';

@Module({
  controllers: [UhappLoginController],
})
export class UhappAuthModuleModule {}

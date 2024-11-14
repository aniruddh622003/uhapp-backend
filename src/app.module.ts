import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UhappAuthModuleModule } from './uhapp-auth-module/uhapp-auth-module.module';
import { RouterModule } from '@nestjs/core';

@Module({
  imports: [
    UhappAuthModuleModule,
    RouterModule.register([
      {
        path: 'auth',
        module: UhappAuthModuleModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

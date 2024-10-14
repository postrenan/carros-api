import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarModule } from './car/car.module';
import { StoreModule } from './store/store.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [CarModule, StoreModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { UserModule } from './user/user.module';
import { CarModule } from './car/car.module';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [ PrismaModule,UserModule, CarModule],
})
export class AppModule {}

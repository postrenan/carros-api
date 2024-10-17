import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async getAllCars() {
    return this.prisma.car.findMany();
  }

  async getCarById(id: string) {
    return this.prisma.car.findUnique({
      where: { id },
    });
  }

  async createCar(carData: any) {
    return this.prisma.car.create({
      data: carData,
    });
  }

  async updateCar(id: string, updateData: any) {
    return this.prisma.car.update({
      where: { id },
      data: updateData,
    });
  }

  async deleteCar(id: string) {
    return this.prisma.car.delete({
      where: { id },
    });
  }
}

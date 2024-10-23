import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CarService {
  constructor(private prisma: PrismaService) {}

  async getAllCars() {
    return this.prisma.car.findMany();
  }

  async getCarById(id: number) {
    return this.prisma.car.findUnique({
      where: { id: Number(id) },
    });
  }

  async createCar(carData: any) {
    return this.prisma.car.create({
      data: carData,
    });
  }

  async updateCar(id: number, updateData: any) {
    return this.prisma.car.update({
      where: {  id: Number(id) },
      data: updateData,
    });
  }

  async deleteCar(id: number) {
    return this.prisma.car.delete({
      where: {  id: Number(id) },
    });
  }
}

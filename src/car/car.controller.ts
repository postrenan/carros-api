import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async getAllCars() {
    return this.carService.getAllCars();
  }

  @Get(':id')
  async getCarById(@Param('id') id: string) {
    return this.carService.getCarById(id);
  }

  @Post()
  async createCar(@Body() carData: any) {
    return this.carService.createCar(carData);
  }

  @Put(':id')
  async updateCar(@Param('id') id: string, @Body() updateData: any) {
    return this.carService.updateCar(id, updateData);
  }

  @Delete(':id')
  async deleteCar(@Param('id') id: string) {
    return this.carService.deleteCar(id);
  }
}

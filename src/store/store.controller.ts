import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  async getAllStores() {
    return this.storeService.getAllStores();
  }

  @Get(':id')
  async getStoreById(@Param('id') id: string) {
    return this.storeService.getStoreById(id);
  }

  @Post()
  async createStore(@Body() storeData: any) {
    return this.storeService.createStore(storeData);
  }
}

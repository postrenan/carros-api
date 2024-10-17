import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class StoreService {
  constructor(private prisma: PrismaService) {}

  async getAllStores() {
    return this.prisma.factory.findMany(); // Assumindo que 'factory' é a tabela de lojas
  }

  async getStoreById(id: string) {
    return this.prisma.factory.findUnique({
      where: { id },
    });
  }

  async createStore(storeData: any) {
    return this.prisma.factory.create({
      data: storeData,
    });
  }
}

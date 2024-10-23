import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany();
  }

  async getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: {  id: Number(id) },
    });
  }

  async createUser(userData: any) {
    return this.prisma.user.create({
      data: userData,
    });
  }
}

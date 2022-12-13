import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller()
export class AppController {
  constructor(private readonly prisma: PrismaService) { }

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você recebeu uma notificação',
      },
    });
  }
}

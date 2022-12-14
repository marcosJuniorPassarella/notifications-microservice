import { Controller, Get } from '@nestjs/common';
import { Post } from '@nestjs/common/decorators';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create() {
    console.log('entrou');
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: 'Você recebeu uma notificação',
        category: 'social',
        recipientId: randomUUID(),
      },
    });
  }
}

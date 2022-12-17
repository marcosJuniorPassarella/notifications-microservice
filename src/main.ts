import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices/interfaces';
import { KafkaConsumerService } from './infra/messaging/kafka/kafka-consumer.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const kafkaConsumerService = app.get(KafkaConsumerService);
  app.useGlobalPipes(new ValidationPipe())
  app.connectMicroservice<MicroserviceOptions>({
    strategy: kafkaConsumerService
  });
  await app.listen(3000);
}
bootstrap();

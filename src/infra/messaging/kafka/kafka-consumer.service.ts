import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['YOUR-BROCKER'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'YOUR-USERNAME',
                    password: 'YOUR-PASSWORD'
                },
                ssl: true,
            }
        });
    }
    async onModuleDestroy() {
        await this.close();
    }
}
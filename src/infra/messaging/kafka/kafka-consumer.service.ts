import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService extends ServerKafka implements OnModuleDestroy {
    constructor() {
        super({
            client: {
                clientId: 'notifications',
                brokers: ['valid-skylark-12205-us1-kafka.upstash.io:9092'],
                sasl: {
                    mechanism: 'scram-sha-256',
                    username: 'dmFsaWQtc2t5bGFyay0xMjIwNSTgNcKONnWh4r7rR5Ur6zYzIotokSc_Kadk-sk',
                    password: 'I3KYlZ69-5vXLET96GmRV5hWvA560gz1gEnEE2JJ6cvawfnWFtnYipGuTCc1D8k5bav-WA=='
                },
                ssl: true,
            }
        });
    }
    async onModuleDestroy() {
        await this.close();
    }
}
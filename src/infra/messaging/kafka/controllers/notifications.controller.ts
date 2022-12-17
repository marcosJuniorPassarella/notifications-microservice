import { Controller } from "@nestjs/common";
import { EventPattern, Payload } from "@nestjs/microservices";
import { SendNotification } from '../../../../app/use-cases/send-notification';

interface SendNotificationPayload {
    content: string;
    category: string;
    recipientId: string;
}

@Controller()
export class NotificationsController {

    constructor(private sendNotification: SendNotification) { }

    // método chamado toda vez que houver uma nova mensagem dentro do tópico criado no upstach
    @EventPattern('YOUR-TOPIC')
    async handleSendNotification(
        @Payload() { content, category, recipientId }: SendNotificationPayload
    ) {
        await this.sendNotification.execute({
            content,
            category,
            recipientId
        });
    };
};
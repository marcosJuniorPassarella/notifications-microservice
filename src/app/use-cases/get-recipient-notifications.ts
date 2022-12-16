import { NotificationsRepository } from '../repositories/notifications-repository';
import { Injectable } from '@nestjs/common';
import { Notification } from '@app/entities/notification';

interface GetRecipientNotificationsRequest {
    recipientId: string;
}

interface GetRecipientNotificationsResponse {
    notifications: Notification[];
}

@Injectable()
export class GetRecipientNotifications {
    constructor(private notificationRepository: NotificationsRepository) { }

    async execute(request: GetRecipientNotificationsRequest): Promise<GetRecipientNotificationsResponse> {
        const { recipientId } = request;
        const notifications = await this.notificationRepository.findManyByRecipientById(recipientId);

        return {
            notifications
        }
    }
}
import { Notification, NotificationProps } from "@app/entities/notification"
import { Content } from "@app/entities/content"

//o partial faz com que todas as propriedades da interface sejam opcionais
type Override = Partial<NotificationProps>

export function makeNotification(override: Override = {}) {
    return new Notification({
        category: 'social',
        content: new Content('Nova solicitação de amizade!'),
        recipientId: 'recipient-1',
        ...override
    })
}
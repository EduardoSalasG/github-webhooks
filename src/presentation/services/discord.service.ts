import { envs } from "../../config/envs";


export class DiscordService {

    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;

    constructor() { }

    async notify(message: string) {
        const body = {
            content: message,
            // embeds: [
            //     {
            //         image: {
            //             url: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMnB2OWd5YTYwYmxtejNianVkNnhhamE2ZzNsd2FvZmh0dzJkaXBkMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/V4NSR1NG2p0KeJJyr5/giphy.gif'
            //         }
            //     }
            // ]

        }

        const resp = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        if (!resp.ok) {
            console.log('Error sending message to Discord')
            return false;
        }

        return true;
    }


}
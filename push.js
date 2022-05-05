var push = require('web-push')

let vapidKeys =
{publicKey: "BJZRIKv-LoL3jyKOTHvQ6sZ_Z7BM5NYEk3LfJiNBlRQb6DMXw7y4bhW6aMrh8DNzScK7WbZl7T5VhFhWHP65vjM",
privateKey: "kJubES_cMMcwvKOCmf6geZic_jK8LNvAnuid5NaoXrQ"
}

push.setVapidDetails('mailto:test@code.co.uk', vapidKeys.publicKey,vapidKeys.privateKey)

let sub = {}; 

push.sendNotification(sub, 'test message');
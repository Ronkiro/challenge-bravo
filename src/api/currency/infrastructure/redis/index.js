let client, redis
if (process.env.NODE_ENV === 'test')
    client = null
else {
    redis = require('redis')

    client = redis.createClient({
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        auth_pass: process.env.REDIS_PASSWD || null
    })

    client.on("error", function (err) {
        console.log("Redis error encountered", err);
        client.quit()
    });
}

module.exports = ({ }) => client
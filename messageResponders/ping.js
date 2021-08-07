const ping = require('ping');
//function is run if ping is sent

// Send "pong" to the same channel
pingRes = async message => {
    const pingRes = await pingGoogle()
    message.channel.send(`pong in ${Math.round(pingRes.time)}ms`);
}

pingGoogle = async () => {
    let res = await ping.promise.probe("google.co.uk", {timeout: 2});
    return res;
}

module.exports = pingRes;
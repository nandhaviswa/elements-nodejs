const os = require('os');
/**
 * 
 * @see 
 * @since Fri December 17, 2021 11:27 PM.
 */
module.exports = (req, res, next) => {
    res.status(200).send({
        hostname: os.hostname(),
        port: req.socket.localPort
    });
};

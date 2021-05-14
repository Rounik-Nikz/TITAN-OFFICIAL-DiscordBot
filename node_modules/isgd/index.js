var https = require('https');

module.exports = {
    shorten: function(url, cb) {
        https.get('https://is.gd/create.php?format=simple&url=' + encodeURIComponent(url), function (res) {
            var body = '';
            res.on('data', function(chunk) { body += chunk; });
            res.on('end', function() { cb(body); });
        });
    },
    custom: function(url, text, cb) {
        https.get('https://is.gd/create.php?format=simple&url=' + encodeURIComponent(url) + '&shorturl=' + encodeURIComponent(text), function (res) {
            var body = '';
            res.on('data', function(chunk) { body += chunk; });
            res.on('end', function() { cb(body); });
        });
    },
    lookup: function(url, cb) {
        https.get('https://is.gd/forward.php?format=simple&shorturl=' + encodeURIComponent(url), function (res) {
            var body = '';
            res.on('data', function(chunk) { body += chunk; });
            res.on('end', function() { cb(body); });
        });
    }
};

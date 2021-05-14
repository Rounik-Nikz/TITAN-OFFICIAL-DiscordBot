[![NPM](https://nodei.co/npm/isgd.png?downloads=true&downloadRank=true&stars=true)](https://npmjs.com/package/isgd/)

# Is.gd [![Build Status](https://travis-ci.org/AlphaT3ch/isgd.svg?branch=master)](https://travis-ci.org/AlphaT3ch/is.gd)
[http://is.gd](http://is.gd) URL Shortener Node.js Module

Example Shorten:

First run ```npm install isgd``` to install the Is.gd package to your system.

```javascript
var isgd = require('isgd');

isgd.shorten('http://google.com', function(res) {
	console.log(res); // Returns a shorter version of http://google.com - http://is.gd/OwycZW
});

isgd.custom('http://google.com', 'MyGoogleShortcut', function(res) {
	console.log(res); // If the custom URL of MyGoogleShortcut is actually available, it should return http://is.gd/MyGoogleShortcut
});

isgd.lookup('http://is.gd/OwycZW', function(res) {
	console.log(res); // Returns a longer version of http://is.gd/OwycZW - http://google.com
});
```

[This Package Is Under The MIT License](https://raw.githubusercontent.com/AlphaT3ch/is.gd/master/LICENSE.txt)

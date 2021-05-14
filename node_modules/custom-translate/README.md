# custom-translate
[![Downloads](https://img.shields.io/npm/dt/custom-translate.svg?maxAge=3600)](https://www.npmjs.com/package/custom-translate)
[![Version](https://img.shields.io/npm/v/custom-translate.svg?maxAge=3600)](https://www.npmjs.com/package/custom-translate)
[![Travis](https://api.travis-ci.org/dragonfire535/custom-translate.svg?branch=master)](https://travis-ci.org/dragonfire535/custom-translate)

custom-translate is a simple module for translating certain words, letters, or
patterns in a string with others. Usage is simple:

## wordTrans
wordTrans takes an object of words and changes them into others. For example:
```js
const translator = require('custom-translate');

const text = 'I have a cow that goes moo.';
const dictionary = {
	cow: 'cat',
	moo: 'meow'
};

translator.wordTrans(text, dictionary);
```
Output will be: `I have a cat that goes meow.`

`wordTrans` automatically ignores casing, all instances of the word, regardless
of case, will be replaced.

Casing of the first letter will be matched, so if `cow` happened to be `Cow` in
the `text` variable, the result would be `I have a Cat that goes meow.`.

## letterTrans
letterTrans takes an object of letters (or symbols) and changes them into
others. For example:
```js
const translator = require('custom-translate');

const text = 'I like cheese.';
const dictionary = {
	c: '!',
	I: 'S'
};

translator.letterTrans(text, dictionary);
```

Output will be: `S like !heese`

Unlike `wordTrans`, `letterTrans` does not ignore casing by default.

You can also specify what to join the string back together with. This defaults
to `''` for `letterTrans` and `' '` for `wordTrans`.

```js
translator.letterTrans(text, dictionary, ' ');
translator.wordTrans(text, dictionary, ', ');
```

## regexTrans
regexTrans takes an object with Regular Expressions (as strings) as the keys and
what they are to be replaced with as the values. They will be replaced in order.
For example:
```js
const translator = require('custom-translate');

const text = 'ABC abc 123';
const dictionary = {
	'ABCD?': 'EFG',
	'123': '456'
};

translator.regexTrans(text, dictionary);
```

Output will be: `EFG EFG 456`

You can also change the flags to use during replacements. This defaults to `gi`.

```js
translator.regexTrans(text, dictionary, 'i');
```

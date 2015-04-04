# log-syntax-error

Generates a block of text highlighting a syntax error, suitable for printing to a console.

## Installation

```bash
npm install log-syntax-error
```

## Usage

```js
var block = logSyntaxError( code, line, column, options );
```

* `code` is some source code
* `line` is the (one-based) line number of the error
* `column` (optional) is the (zero-based) column number of the error
* `options` (optional)
    * `buffer` - the number of lines to include either side of the error. Defaults to `2`.

## License

MIT.
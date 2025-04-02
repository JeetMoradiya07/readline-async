# readline-store

A simple synchronous-style readline interface for Node.js

## Installation

```bash
npm install readline-store
```

## Features

-   Simple promise-based interface
-   Proper cleanup on process exit
-   Error handling
-   No external dependencies

## Usage

### Basic Example

```javascript
import rl from 'readline-store';

async function main() {
    const name = await rl('What is your name? ');
    console.log(`Hello, ${name}!`);
}

main();
```

### Multiple Questions

```javascript
import rl from 'readline-store';

async function survey() {
    const name = await rl('Enter your name: ');
    const age = await rl('Enter your age: ');
    console.log(`Hello ${name}, you are ${age} years old!`);
}

survey();
```

### Error Handling

```javascript
try {
    const input = await rl('Enter something: ');
} catch (err) {
    console.error('Input error:', err);
}
```

## API

### `rl(query: string): Promise<string>`

-   `query`: The prompt string to display
-   Returns: Promise that resolves with user input

## Why?

This package provides a minimal, robust wrapper around Node.js's `readline` module with:

-   Proper resource cleanup
-   Consistent behavior during process interruption
-   Simple promise-based API

## License

MIT

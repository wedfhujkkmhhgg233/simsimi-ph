# sim-ph (SAFE MODE UPDATE)

A Node.js client for interacting with the **SimSimi** chatbot API (for PH region only), featuring built-in fallback mechanisms to ensure reliability when accessing Sim and Teach functionalities.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [API Key](#api-key)
- [Usage](#usage)
- [Features](#features)
- [API Methods](#api-methods)
- [Dependencies](#dependencies)
- [Configuration](#configuration)
- [Examples](#examples)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Introduction

`sim-ph` is a lightweight wrapper around the SimSimi chatbot API tailored for users in the Philippines. It provides methods to send queries to SimSimi and teach the bot new responses. If the primary API endpoint fails, the module automatically falls back to a backup endpoint to improve reliability.

## Installation

```bash
npm install sim-ph
```

## API Key

You must create an account and obtain your API key from:

https://simsimi.ooguy.com

## Usage

```js
const Sim = require('sim-ph');

const sim = new Sim('your-api-key-here');

function warnSafeMode(safe) {
  if (!safe) {
    console.log(
      '⚠️ Safe mode OFF: responses may be less filtered or potentially explicit.'
    );
  }
}

async function askSim(message, safe = true) {
  warnSafeMode(safe);

  try {
    const res = await sim.sim(message, safe);
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
}

async function teachSim(question, answer) {
  try {
    const res = await sim.teach(question, answer);
    console.log(res);
    return res;
  } catch (err) {
    console.error(err);
  }
}

// USAGE EXAMPLES

// default safe = true
askSim('Hello!');

// explicit safe ON
askSim('Hello!', true);

// explicit safe OFF
askSim('Hello!', false);

// teach SimSimi
teachSim('How are you?', 'I am fine, thank you!');
```

## Features

- Communicate with the SimSimi API using sim() method.
- Teach new responses using teach() method.
- Supports Safe Mode (true / false)
- Safe mode defaults to true (filtered responses)
- Built-in fallback to secondary API endpoint if the primary fails.
- Simple and easy-to-use class interface.

## API Methods

### `new Sim(apikey)`
Creates an instance of the SimSimi client.

### `sim(query, safe?)`
Sends a chat message to SimSimi and returns the response.

- `query` (string): The user's input message.
- `safe` (boolean, optional): Controls response filtering.
`true` → safe / filtered responses (default)
`false` → less filtered responses (may include explicit or raw content)

### `teach(ask, ans)`
Teaches SimSimi a new question-answer pair.

- `ask` (string): The question.
- `ans` (string): The answer SimSimi should learn.
 ```js
sim.sim('Hello!')
sim.sim('Hello!', true)
sim.sim('Hello!', false)
 ```

- If safe = true → responses are filtered and generally safe.
- If safe = false → responses may be less filtered and can sometimes be explicit or more raw.
- If not provided → defaults to true.

## Dependencies

- [`axios`](https://www.npmjs.com/package/axios): Promise-based HTTP client for Node.js.

## Configuration

To use this module, you need a valid API key for the SimSimi PH service. Replace `'your-api-key-here'` with your actual key.

## Examples

```js
const sim = new Sim('apikey');

async function interact() {
  try {
    const reply = await sim.sim('Kumusta ka?');
    console.log('SimSimi:', reply);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

interact();
```

## Troubleshooting

- **API Key Errors**: Ensure your API key is correct and active.
- **Both APIs Fail**: If both primary and backup endpoints fail, check your internet connection or wait for service restoration.

## Contributors

- [ jerdev ]

## License

MIT License

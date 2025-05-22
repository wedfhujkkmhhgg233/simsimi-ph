# sim-ph

A Node.js client for interacting with the **SimSimi** chatbot API (for PH region only), featuring built-in fallback mechanisms to ensure reliability when accessing Sim and Teach functionalities.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
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

## Usage

const Sim = require('sim-ph');

const sim = new Sim('your-api-key-here');

// Ask something
sim.sim('Hello!').then(response => {
  console.log(response);
}).catch(console.error);

// Teach SimSimi a new response
sim.teach('How are you?', 'I am fine, thank you!').then(response => {
  console.log(response);
}).catch(console.error);

## Features

Communicate with the SimSimi API using sim() method.

Teach new responses using teach() method.

Built-in fallback to secondary API endpoint if the primary fails.

Simple and easy-to-use class interface.


## API Methods

new Sim(apikey)

Creates an instance of the SimSimi client.

sim(query)

Sends a chat message to SimSimi and returns the response.

query (string): The user's input message.


teach(ask, ans)

Teaches SimSimi a new question-answer pair.

ask (string): The question.

ans (string): The answer SimSimi should learn.


## Dependencies

axios: Promise-based HTTP client for Node.js.


## Configuration

To use this module, you need a valid API key for the SimSimi PH service. Replace 'your-api-key-here' with your actual key.

## Examples

const sim = new Sim('abc123');

async function interact() {
  try {
    const reply = await sim.sim('Kumusta ka?');
    console.log('SimSimi:', reply);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

interact();

## Troubleshooting

API Key Errors: Ensure your API key is correct and active.

Both APIs Fail: If both primary and backup endpoints fail, check your internet connection or wait for service restoration.


## Contributors

[ Jerdev ]


## License

MIT License

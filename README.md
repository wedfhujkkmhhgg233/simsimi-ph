# simsimi-ph

**A lightweight Node.js wrapper for SimSimi conversational and teaching API** using backup fallback support and dynamic API key injection.

---

## Features

- Chat with SimSimi using `/sim` endpoint
- Teach SimSimi new responses using `/teach` endpoint
- Automatic fallback between two servers (`ooguy` → `gleeze`)
- Built-in error handling
- No dependencies other than `axios`

---

## Installation

```bash
npm install simsimi-ph


---

Usage

const { sim, teach } = require('simsimi-ph');

const apikey = 'your_api_key';

// Chat example
sim("hello", apikey).then(console.log).catch(console.error);

// Teach example
teach("hi", "hello!", apikey).then(console.log).catch(console.error);


---

API Reference

sim(query, apikey)

query: The message you want to send to SimSimi

apikey: Your API key for authentication


teach(ask, ans, apikey)

ask: The input phrase you want to teach

ans: The response SimSimi should reply with

apikey: Your API key for authentication



---

Example Response

{
  "status": true,
  "query": "hello",
  "response": "Hi there! How can I help you?"
}


---

Author

Jerdev
GitHub: jerdevph


---

License

MIT — You can use, modify, and redistribute with attribution.

---

Let me know if you want this README auto-pushed to your repo or included in `package.json` as well!


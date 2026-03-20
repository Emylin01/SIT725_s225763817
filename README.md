# Task 2.2P - Express Web Server

## Overview
This is a basic Express web server built using Node.js. The application serves a simple HTML page and includes multiple API endpoints to understand how REST APIs work using GET and POST methods.

## How to run
1. Clone the repo
2. Run `npm install`
3. Start server: `node server.js`
4. Visit `http://localhost:3000`

## APIs

### GET /api/quote
- Returns a random quote
- Example: `http://localhost:3000/api/quote`

### POST /api/quote
- Adds a new quote
- Body JSON: `{ "quote": "Your new quote" }`

### GET /add
- Adds two numbers
- Query params: `a` and `b`
- Example: `http://localhost:3000/add?a=5&b=10`

### GET /square
- Returns the square of a number
- Query param: `num`
- Example: `http://localhost:3000/square?num=4`
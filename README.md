## Quotes API
---
- This is a simple Node.js application that generates random osu! related quotes from a MongoDB database. (INCOMPLETE)

# TODO
---
1. deploy Node.js server to a cloud service to allow for API requests
2. more quotes in the database

# Prerequisites
---
Before you begin, ensure you have met the following requirements:

- Node.js installed on your local machine
- MongoDB installed and running locally or accessible via a cloud service (e.g., MongoDB Atlas)
- Heroku CLI installed if you plan to deploy to an online service such as Heroku (has not yet been fully implemented)

# Installation
---
To install and run this application locally, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/your-username/quotes-api.git
cd quotes-api
npm install
```

2. Set up environment variables:

Create a .env file in the root directory of the project.
Add the following variables to the .env file:

```
MONGO_URI=mongodb://localhost:27017/quotesDB
PORT=3000
```
Note: if you have MongoDB accessible via a cloud service, follow the instructions on how to connect to the database.
Change the line to `MONGO_URI='<your connection link here>'`

3. Start the server:

`npm start`
Access the API at http://localhost:3000/random-quote.

# Usage
---
Endpoints:

- GET /random-quote: Retrieves a random quote from the database.

# Deployment
---
WIP
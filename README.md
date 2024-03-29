# paintColorlessLabel

## Getting Started

### Prerequisites

**Getting Application Key and User Token**
Before you use these system, please go to https://trello.com/app-key and get the application key and user token.

**Getting Board_ID**
![board_id](https://user-images.githubusercontent.com/45678324/59160759-db2f8c80-8b03-11e9-830c-4df00f8de105.png)
Board_ID was underlined

### Inside .env file

* TRELLO_KEY=[string][1] (App_key)
* TRELLO_TOKEN=[string][1] (User_token)
* TRELLO_MBID=[string][1]  (MemberID)
* TRELLO_BOARDID=[string][1]

You also need :
  -*trello*
  -*dotenv*

### Installing

```
npm install
```

* Please specify the color you would like to paint the label in the functionCalling

## Running the tests

For Example:

```bash
node server.js
```

### And coding style tests

```bash
semistandard --fix
```
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)

## Built With

* [NodeJS](https://nodejs.org/en/)

## Authors

* **Hun Vikran** 

[1]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

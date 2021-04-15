## Express Server for Track App

A Server for a path tracking app using the node express framework and MongoDB.

---

## Setup From Scratch

1. Navigate to Directory:

```
$ mkdir file_name
$ cd file_name
$ npm init -y
```

2. Install Dependencies:

```
$npm install bcrypt express jsonwebtoken mongoose nodemon
```

3. To start server:

```
$ node src\index.js
```

OR

```
$ npm run dev
```

_This command will only work if step 5 is complete_

4. Create a directory in main file called 'mongoDBCredentials' and populate your server credentials into a file called credentials.js in the following format:

```javascript
const USERNAME = "username";

const PASSWORD = "password";

module.exports = {
    USERNAME: USERNAME,
    PASSWORD: PASSWORD,
};
```

5. To make your server restart automatically on saved changes add the following line in your package.json file:

```json
  "scripts": {
    "dev": "nodemon src/index.js"
  }
```

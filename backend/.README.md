# Show me the money!

Backend written in NodeJS.

## Installation

```bash
npm install
```

## Installation

```bash
npm install
```

## Environment variables
Create `.env` file and set these variables `PORT` and `MONGO_URI`

`MONGO_URI`= should be the connection string to MongoDB (it will be provided by email)  
```js
PORT=5000
MONGO_URI= ???
```

### To ge the Backend up and running:
```bash
npm start
```


# Snippets to run from Chrome Development Console 
```js
// Get Assets
fetch('http://localhost:5000/api/assets', 
      {
        method:'GET',
        headers: {'Content-Type': 'application/json'},        
      })
.then(res=>res.json())
.then(json => console.log(JSON.stringify(json,null,2)))  
```

```js
// Update Asset Price
let assetId = '6217ac3fd0f8aa7fe20cf049'
let data = {price: 57}
fetch(`http://localhost:5000/api/assets/${assetId}`, 
        {
          method:'PUT',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data)
        })
  .then(res=>res.json())
  .then(json => console.log(json))  
```

```js
// Get Portfolio
fetch(`http://localhost:5000/api/portfolio`, 
      {
        method:'GET',
        headers: {'Content-Type': 'application/json'},        
      })
.then(res=>res.json())
.then(json => console.log(JSON.stringify(json,null,2)))  
```
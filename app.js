const express = require('express');

// initialize express instance
const app = express();

const PORT = process.env.PORT || 5000;
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({ status: "Up and running"});
})

app.listen(PORT, () => {
    console.log("server started and listening!");
})

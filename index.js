const express = require('express');
const app = express();
const port = 8000;
const cors = require('cors')
app.use(cors());
app.use(express.json())


require("./db/connection")


app.use(require("./routes/Query"))

app.listen(port , () => {
    console.log("Backend Started");
})
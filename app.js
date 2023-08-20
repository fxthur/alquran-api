const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(require("./router/router"));

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: `This API is working fine!, running on port ${port}`
    });
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
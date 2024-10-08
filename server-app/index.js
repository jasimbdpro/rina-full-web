const express = require("express")
const app = express();
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.post('/', (req, res) => {
    const { name, email, password } = req.body;
    //Log the received data
    console.log("Received data: ", { name, email, password })
    //Send a response back to client
    res.status(200).json({
        message: 'Your data sent successfully',
        data: { name, email, password }
    })
})
app.get('/', (req, res) => {
    res.send('API deployed successfully v1')
})


app.listen(3000, () => {
    console.log('Server runnign on port 3000')
})
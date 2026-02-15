const express = require('express')

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;


// Root route for testing server
app.get("/", (req, res) => {
    res.send("School Management Server Running...!");
})


app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`)
})
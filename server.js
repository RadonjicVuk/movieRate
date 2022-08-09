const express = require('express')
const app = express()

const options = {
    extensions: ['htm', 'html']
}
app.use(express.static('public', options))

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`))
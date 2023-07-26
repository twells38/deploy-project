const express = require('express')
const app = express()
app.use(express.static(`${__dirname}/public`))//middleware every request will go to static

app.listen(4000, () => {
    console.log(`server is runing on 4000`)
})
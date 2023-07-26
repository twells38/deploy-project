const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(`public`))//middleware every request will go to static
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'../public/index.html'))
// })
app.listen(4000, () => {
    console.log(`server is runing on 4000`)
})
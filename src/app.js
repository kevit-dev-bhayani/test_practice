const express =require('express')

const app = express()

app.get('/abc', (req,res) => {
    res.send({
        name: 'dev'
    })
})

app.listen(3001,() => {
    console.log('prot is running on 3001');
})
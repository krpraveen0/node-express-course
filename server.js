const express = require('express')
const app = express()


const mockUser = [
    {name:'Praveen'},
    {name:'Raju'},
    {name:'Munna'}
]

app.get('/users',function(req,res) {
    res.json(
        {
            success:'true',
            message: 'successfully fetched all the users!',
            users: mockUser
        }
    )
})

app.listen(8000,function() {
    console.log("app is running on port 8000")
})
const express = require('express')
const app = express()


const mockUser = [
    {name:'Praveen'},
    {name:'Raju'},
    {name:'Munna'}
]

//endpoint to get all the users
app.get('/users',function(req,res) {
    res.json(
        {
            success:'true',
            message: 'successfully fetched all the users!',
            users: mockUser
        }
    )
})

//endpoint to get one user
app.get('/user/:id',function (req,res) {
    console.log(req.params.id)
    res.json({
        success:'true',
        message:'successfully fetched one user data',
        user: req.params.id
    });
    
})

app.listen(8000,function() {
    console.log("app is running on port 8000")
})
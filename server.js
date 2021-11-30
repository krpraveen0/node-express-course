const express = require('express')
const app = express()
app.use(express.json())

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

// colons are used as variables that be viewed in the params
app.get('/user/:id',function (req,res) {
    console.log(req.params.id)
    res.json({
        success:'true',
        message:'successfully fetched one user data',
        user: req.params.id
    });
    
})

//post request 
app.post('/login',function(req,res) {
    // Typically passwords are encrypted using something like bcrypt before sending to database
    const username = 'Munna';
    const password = 'password';

    const mockUser = 'Munna';
    const mockPassword = 'password';

    if(username === mockUser && password===mockPassword){
        // In practice, use JSON web token sign method here to make an encrypted token
        res.json({
            success: true,
            message: 'login successful',
            token: 'token goes here'
        })
    }else{
        res.json({
            success:false,
            message:'incorrect username or password'
        })
    }

    
})

app.listen(8000,function() {
    console.log("app is running on port 8000")
})
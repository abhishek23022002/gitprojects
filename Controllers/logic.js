// Controllers/route.actions.js
const databases = require('../DataBase/database')
const mongodb = require('mongodb')
exports.fetchingdata = (req, res) => {
  
   return console.log("sdfsdf")
};

exports.postingdata = async (req,res)=>{

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // Character set
    let result = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length); // Get a random index
        result += characters[randomIndex]; // Append the character at the random index to the result
    }

    return result; // Return the generated random string
}

const randomString = generateRandomString();
   
    /* let database = databases() */
    const database = databases
    console.log("DataBase".database);
    
    const collections  =  database.collection('UserConvo')
        let obj = {
        "Convo_id":`${randomString}`,
        "role":`User`,
        "message":`${req.body.usermessage}`,
        "role":`Bot`,
        "message":`${req.body.botmessage}`
    }
    await collections.insertOne(obj) 
    res.send({
        "abhi":"aravinfh"
    })

}


/* exports.postingdata = (req, res) => {
    res.send("Posting data...");
    res.send(req.body)
}; */

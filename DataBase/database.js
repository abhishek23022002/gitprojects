const { MongoClient, ServerApiVersion } = require("mongodb");

const express = require('express')
const app = express()
app.use(express.urlencoded({extended:true}))

// Replace the placeholder with your Atlas connection string


// Create a MongoClient with a MongoClientOptions object to set the Stable API version



app.post('/modelcheck',(req,res)=>{
    console.log("This is a response from postmna",req.body.usermessage)
    console.log("This is a response from postmna",req.body.botmessage
   )

    const uri = "mongodb://localhost:27017"
    const client = new MongoClient(uri,  {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    }
);
    async function run() {
        try {
          // Connect the client to the server (optional starting in v4.7)
          await client.connect();
      
          // Send a ping to confirm a successful connection
          const database = await client.db("Bot")
          const collections = await database.collection("Conversations")
          let obj = {
            "conversations": [
                {
                    "role": "User",
                    "message": req.body.usermessage
                },
                {
                    "role": "Bot",
                    "message": req.body.botmessage
                }
            ]
        }
          await collections.insertOne(obj)
          
          
          console.log("Pinged your deployment. You successfully connected to MongoDB!",database.s.namespace.db);
          /* console.log("NNNNamespace",database.s.namespace.db ) */
          const allDocuments = await collections.find({}).toArray();
          return res.json(allDocuments) 
        } finally {
          // Ensures that the client will close when you finish/error
          await client.close();
        }
      }
      run()
    
      })


      app.listen(3000,(req,res)=>{
        console.log("Listening ")
      })
      









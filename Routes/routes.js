const express = require('express')
const router = express.Router()
const controller = require('../Controllers/logic')
 
router.get('/',controller.fetchingdata) 
router.post('/',controller.postingdata)
module.exports = router


/* router.post('/',(req,res)=>{
    res.send(req.body)
}) */
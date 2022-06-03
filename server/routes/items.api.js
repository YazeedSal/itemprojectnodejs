const express = require('express')
const router = express.Router()
const Item = require("../models/item.model")



router.post("/additem", async function (req,res){
    const item = new Item(req.body);
    const response = await item.save();
    res.send(response);
})


router.get("/getitems", async function (req,res) {
    const items = await Item.find({})
    res.send(items)
})


module.exports = router;
const express = require("express");

const router = express.Router();

const Message = require("../models/Message");

router.get("/get-messages", (req, res) => {
    Message.find((err, data) => {
        if(err){
            return err;
        }else{
            res.json(data);
        }
    })
  });

  router.post("/send-message", (req, res) => {
  })

module.exports = router;
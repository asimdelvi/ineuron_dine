const express = require("express");
const router = express.Router();
const Table = require("../models/tableModel");
const qrCode = require("qrcode");
const { v4: uuidv4 } = require("uuid");

router.get("/table", (req, res) => {
  res.render("admin/table");
});

router.post("/table", (req, res) => {
  tableLength = parseInt(req.body.table);
  let tables = [];
  for (let i = 0; i < tableLength; i++) {
    qrCode
      .toDataURL(toString(uuidv4))
      .then((url) => {
        tables.push({ tableQRCode: url });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  // await Table.create(tables)
  console.log(tables);
  res.send("successful");
});

module.exports = router;

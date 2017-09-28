const express = require('express');
const router = express.Router();
const path = require('path');
const multer  = require('multer');
const upload = multer({ dest: './uploads/' });

router.get("/", function (request, response) {
  response.sendFile(path.join(__dirname, '../views/index.html'));
});

router.post("/getsize", upload.single('upl'), function (request, response) {
  response.end(JSON.stringify({"size": request.file.size}));
});

module.exports = router;
const express = require('express');
const app = express();
const ejs = require("ejs");
const mongoose = require('mongoose');
const multer = require('multer');

const { 
    GridFsStorage 
} = require('multer-gridfs-storage');
var crypto = require('crypto');
var path = require('path');

require('dotenv')
.config();

const mongouri = 'MONGODBURL;
try {
    mongoose.connect(mongouri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
} catch (error) {
    handleError(error);
}
process.on('unhandleRejection', error =>{
    console.log('unhandledRejection', error.message);
});

// creating bucket
let bucket; 
mongoose.connection.on('connected', () => {
    var db = mongoose.connections[0].db;
    bucket = new mongoose.mongo.GridFSBucket(db, {
        bucketName: 'newBucket'
    });
    console.log(bucket);
});

//to parse json content
app.use(express.json());
//to parse body from url
app.use(express.urlencoded({
    extended: false,
}));

//for folders
app.use(express.static("public"));

app.set('view engine', 'ejs');

// connecting gridfsstorage with mongodb
const storage = new GridFsStorage({
    url: mongouri,
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            const filename = file.originalname;
            const fileInfo = {
                filename: filename,
                bucketName: 'newBucket'
            };
            resolve(fileInfo);
        });
    }
});

const upload = multer({
    storage
});

//for downloading files
app.get("/fileinfo/:filename", (req, res) => {
    const file = bucket
      .find({
        filename: req.params.filename
      })
      .toArray((err, files) => {
        if (!files || files.length === 0) {
          return res.status(404)
            .json({
              err: "no files exist"
            });
        }
        bucket.openDownloadStreamByName(req.params.filename)
          .pipe(res);
      });
  });


  app.get("/mongo-video", (req, res) => {
    const file = bucket
      .find({
        filename: 'samplevideo.mov',
      })
      .toArray((err, files) => {
        if (!files || files.length === 0) {
          return res.status(404)
            .json({
              err: "no files exist"
            });
        }
        bucket.openDownloadStreamByName('samplevideo.mov')
          .pipe(res);
      });
  });

  //request for html page
app.get('/', function(req, res){
    res.render('video');
});

app.get('/playlist', function(req, res){
  res.render('playlist');
});

app.get('/gallery', function(req, res){
  res.render('gallery');
});



// logging successful upload
app.post("/upload", upload.single("file"), (req, res) => {
    res.status(200)
      .send("File uploaded successfully");
  });

  const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Application live on localhost:{process.env.PORT}`);
});

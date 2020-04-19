const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname,"..", "..","assets","image"));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '.' + file.mimetype.split('/')[1])
    }
});

console.log('------------------------')
const upload = multer({
    storage: storage,
    limits: { fieldSize: 20 * 1024 * 102},

    fileFilter: function (req, file, cb) {
        let ext = (path.extname(file.originalname)).toLowerCase();
        if (ext !== '.png' && ext !== '.jpg' && ext !== '.gif' && ext !== '.jpeg') {
            return cb(new Error('Only images are allowed'))
        }
        cb(null, true)
    }
});

function isImage(err, req, res, next) {
    if (err || (!req.file)) {
        console.log(err)
        res.status(400).json({status : false, data : "File is undefined" });
    } else {
        next();
    }
};

module.exports = {
    upload,
    isImage
}; 
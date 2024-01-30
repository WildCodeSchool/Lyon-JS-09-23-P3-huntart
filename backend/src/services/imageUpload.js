// Multer
const multer = require("multer");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "../frontend/public/assets/oeuvres");
  },
  filename(req, file, cb) {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedExtensions = ["jpg", "jpeg", "png"];
  const fileExtension = file.originalname.split(".").pop().toLowerCase();

  if (allowedExtensions.includes(fileExtension)) {
    return cb(null, true);
  }

  return cb(
    new Error("Invalid file type. Only JPG, JPEG, and PNG are allowed.")
  );
};

const uploadImage = multer({ storage, fileFilter }).single("photo");

module.exports = uploadImage;

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const session = require("express-session");
const methodOverride = require("method-override");
const flash = require("connect-flash");

// Added for photos / perspectives
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const fs = require('fs');
require('dotenv/config');

const homeRouter = require("./routes/home");
const postsRouter = require("./routes/posts");
const sessionsRouter = require("./routes/sessions");
const usersRouter = require("./routes/users");
const perspectivesRouter = require("./routes/perspectives");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(methodOverride("_method"));

app.use(
  session({
    key: "user_sid",
    secret: "super_secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 600000,
    },
  })
);

app.use(flash());


// clear the cookies after user logs out
app.use((req, res, next) => {
  if (req.cookies.user_sid && !req.session.user) {
    res.clearCookie("user_sid");
  }
  next();
});

// middleware function to check for logged-in users
const sessionChecker = (req, res, next) => {
  if (!req.session.user && !req.cookies.user_sid) {
    res.redirect("/sessions/new");
  } else {
    next();
  }
};

// route setup
app.use("/", homeRouter);
app.use("/posts", sessionChecker, postsRouter);
app.use("/sessions", sessionsRouter);
app.use("/users", usersRouter);
app.use("/perspectives", perspectivesRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

// images / perspectives

// mongoose.connect(
//   process.env.MONGO_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   err => {
//     console.log('connected')
//   }
// );

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// const multer = require('multer');
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'uploads')
//   },
//   filename: (req, file, cb) => {
//     cb(null, file.fieldname + '-' + Date.now())
//   }
// });
// const upload = multer({ storage: storage });

const Perspective = require('./models/perspectives.js');
const { hasSubscribers } = require("diagnostics_channel");

// app.get('/', (req, res) => {
//   Perspective.find({}, (err, items) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('An error occurred', err);
//     } else {
//       res.render('perspectives/index', {items: items });
//     }
//   });
// });

// app.post('/', upload.single('perspective'), (req, res, next) => {

//   var obj = {
//     name: req.body.name,
//     desc: req.body.desc,
//     img: {
//       data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//       contentType: 'image/png'
//     }
//   }
//   Perspective.create(obj, (err, item) => {
//     if (err) {
//       console.log(err);
//     } else {
//       item.save();
//       res.redirect('/perspectives');
//     }
//   });
// });

// var port = process.env.PORT || '3000'
// app.listen(port, err => {
//   if (err)
//   throw err
//   console.log('Server listening on port', port)
// });


const hbs = require('hbs');

hbs.registerHelper('imgSrcBuilder', function(image) {
  return new hbs.SafeString(
    'data:image/' + image.contentType + ';base64,' + image.data.toString('base64')
  );
});



module.exports = app;

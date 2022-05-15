const path = require("path");
const fs = require('fs');



const Perspective = require("../models/perspectives");

const PerspectivesController = {

  Index: (req, res) => {
    Perspective.find((err, items) => {
      if (err) {
        throw err;
      }

      res.render('perspectives/index', {items: items });
    });
  },

  New: (req, res) => {
    res.render("perspectives/new", {});
  },

  Create: (req, res, next) => {
    var obj = {
      name: req.body.name,
      desc: req.body.desc,
      img: {
        data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
        contentType: 'image/png'
      }
    }
    Perspective.create(obj, (err, item) => {
      if (err) {
        console.log(err);
      } else {
        item.save();
        res.redirect('/perspectives');
      }
    });

    // const perspective = new Perspective(req.body);
    // perspective.save((err) => {
    //   if (err) {
    //     throw err;
    //   }

    //   res.status(201).redirect("/perspectives");
    // })
  }

};

module.exports = PerspectivesController;
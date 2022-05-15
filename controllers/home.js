const HomeController = {
  Index: (req, res) => {
    res.render("home/index", { title: "See Through Your Eyes" });
  },
};

module.exports = HomeController;

const HomeController = {
  Index: (req, res) => {
    res.render("home/index", { title: "Through Your Eyes" });
  },
};

module.exports = HomeController;

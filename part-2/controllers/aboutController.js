const aboutController = (req, res) => {
    res.render('about', { 'title': "about" });
    
};

module.exports = { aboutController };
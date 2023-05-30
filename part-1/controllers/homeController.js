const homeController = (req, res) => {
    //res.send('EJS ')
    const data = { 'name': "sonu", "name2":"Sumit","id":12, 'marks':[40,60,80,70,20] };
   res.render('index',data); 
}

module.exports = { homeController };

/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Wasatch Code' });
};

exports.about = function(req, res) {
  res.render('about', {title: 'Who we are!'});
};

exports.contact = function(req, res) {
  res.render('contact', {title: 'Contact Us!'});
};

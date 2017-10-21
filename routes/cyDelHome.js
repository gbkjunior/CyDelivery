var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('CyDelHome', {
        title: 'CyDelivery'
    });
});

router.get('/dashboard', function(req,res,next)
{
	res.render('homepagenav');
});
module.exports = router;

var express = require('express');
var router = express.Router();
var shopsRouter = express.Router();
var shopsController = require('../utilities/controllers/shopsController.js');

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with I' + "'m Awesome");
});
shopsRouter.get('/shops', function(req, res, next)
{
	var type = req.params.type;
	shopsController.getAllShopsByType(
		type,
		function(result)
	{
		return res.json(result);
	})
});


module.exports = router;
module.exports = shopsRouter;

var express = require('express');
var router = express.Router();
var customerController = require('../utilities/controllers/customerController.js');
var setCustomerRoutes = function(router)
{
	router.post('/cust', function(req,res,next)
	{
	var { formData } = req.body;
    var { name, email, pwd, addr, city, state, pincode } = formData;
	customerController.saveNewCustomer(
		name,
		email,
		pwd,
		addr,
		city,
		state,
		pincode,
		function(result)
		{
			return res.json(result);
		}
		);
	});	
}


module.exports = setCustomerRoutes;
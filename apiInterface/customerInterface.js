import fetch from 'isomorphic-fetch';
let apiUrl = 'http://localhost:3000/api/v1';
var myHeaders = new Headers({
	'Content-Type': 'application/json'
});
var init = {
	method: 'POST',
	headers: myHeaders,
	mode: 'cors',
	cache: 'default'
};

export function saveNewCustomer(formData) {

	console.log('formData');
	console.log(formData);
	init.method = 'POST';
	init.body = JSON.stringify({
					formData
				});
	return fetch(apiUrl+'/newCust', init);
}
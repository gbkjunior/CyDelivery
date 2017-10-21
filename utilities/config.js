

module.exports = {

	mysqlParams 		: {
										  host								: "cydel-instance.ch8oee9sn1gn.us-east-2.rds.amazonaws.com",
											database						: "cydel-db",
											user      					: "cydel",
										  password  					: "mysqlcydel",
										  port  							: "3306",
											data_source_provider: "rds",
											type								: "mysql",
											multipleStatements	: true
										// 	host								: "smartag-qa.cztqxm04xojw.us-east-2.rds.amazonaws.com",
										//  database						: "smartagQA",
										//  user      					: "smartagadmin",
										//  password  					: "smartagcgc",
										//  port  							: "3307",
										//  data_source_provider: "rds",
										//  type								: "mysql",
										//  multipleStatements	: true
									},

	sessionOptions 	: {
						          secret: 'somesecretkeythatweshouldgenerateandstoresomewhere', //TODO make real secret
						          saveUninitialized: true, // save new sessions
										  resave: false, // do not automatically write to the session store
										  cookie : {
										  						httpOnly: true,
										  						maxAge: 2419200000
										  					} // TODO set secure to true when https is used
 										}

};

function User(){
	this.id = null;
	this.firstName  = null;
	this.lastName  = null; 
	this.userName = null;
	this.address = null;
	this.email = null;
	this.password = null;
}

User.prototype.populateUser = function(data){
	this.id = data.id;
	this.firstName  = data.firstName;
	this.lastName  = data.lastName; 
	this.userName = data.userName;
	this.address = data.address;
	this.email = data.email;
	this.password = data.password;
}

User.prototype.generateRandomUser = function(){
	this.id = Math.floor(Math.random() * 10000) + 1;
	this.firstNme = randomeText();
	this.lastName = randomeText();
	this.userName = randomeText();
	this.email = randomeText() + '.' + randomeText() + '@nr.com';	
}


function randomeText() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

exports.User = User;
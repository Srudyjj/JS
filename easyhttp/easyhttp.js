function EasyHTTP() {
	this.http = new XMLHttpRequest();
}

//Get
EasyHTTP.prototype.get = function(url, callback) {
	this.http.open('GET', url, true);
	const self = this;
	this.http.onload = function() {
		if(self.http.status === 200) {
			callback(null, self.http.responseText);
		}
		else {
			callback('Error: ' + self.http.status);
		}
	}
	this.http.send();
}

//Post
EasyHTTP.prototype.post = function (url, data, callback) {
	this.http.open('POST', url, true);
	let self = this;
	this.http.setRequestHeader('Content-type', 'application/json');
	this.http.onload = function() {
		callback(null, self.http.responseText);
	}
	this.http.send(JSON.stringify(data));
}

//PUT
EasyHTTP.prototype.put = function (url, data, callback) {
	this.http.open('PUT', url, true);
	let self = this;
	this.http.setRequestHeader('Content-type', 'application/json');
	this.http.onload = function () {
		callback(null, self.http.responseText);
	}
	this.http.send(JSON.stringify(data));
}

//Delete
EasyHTTP.prototype.gelete = function (url, callback) {
	this.http.open('DELETE', url, true);
	const self = this;
	this.http.onload = function () {
		if (self.http.status === 200) {
			callback(null, "Post Deleted");
		}
		else {
			callback('Error: ' + self.http.status);
		}
	}
	this.http.send();
}

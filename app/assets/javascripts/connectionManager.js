var ConnectionManager = function(appURL){
	this.appURL = appURL;

ConnectionManager.prototype.httpGetRequest = function(url, data, callback){
	$.ajax({
		url: this.appURL + url,
		type: "GET",
		contentType: 'application/json; charset=utf-8',
		dataType: "json",
		data: data,
		success: function(data){
			callback(data)
		}
	});
};

ConnectionManager.prototype.httpPostRequest = function(url, data, callback){
	$.ajax({
		url: this.appURL + url,
		type: "POST",
		contentType: 'application/json; charset=utf-8',
		dataType: "json",
		data: data,
		success: function(data){
			callback(data)
		}
	});
};

ConnectionManager.prototype.httpPutRequest = function(url, data, callback){
	$.ajax({
		url: this.appURL + url,
		type: "PUT",
		contentType: 'application/json; charset=utf-8',
		dataType: "json",
		data: data,
		success: function(data){
			callback(data)
		}
	});
};

ConnectionManager.prototype.httpDeleteRequest = function(url, data, callback){
	$.ajax({
		url: this.appURL + url,
		type: "DELETE",
		contentType: 'application/json; charset=utf-8',
		dataType: "json",
		data: data,
		success: function(data){
			callback(data)
		}
	});
};
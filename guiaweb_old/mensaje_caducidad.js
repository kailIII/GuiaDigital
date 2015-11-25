(function(){
	var messageHelper = {
		init : function () {
			this.body = document.body;
			this.first_child = this.body.firstChild;
			this.http_request = false;
			this.messageUrl = window.location.origin + '/guiaweb_old/mensaje_caducidad.html';
			this.ajaxRequest();
			return this;
		},
		ajaxRequest : function(){
			var self = this;

	        if (window.XMLHttpRequest) { // Mozilla, Safari,...
	            this.http_request = new XMLHttpRequest();
	            if (this.http_request.overrideMimeType) {
	                this.http_request.overrideMimeType('text/xml');
	                // Ver nota sobre esta linea al final
	            }
	        } else if (window.ActiveXObject) { // IE
	            try {
	                this.http_request = new ActiveXObject("Msxml2.XMLHTTP");
	            } catch (e) {
	                try {
	                    this.http_request = new ActiveXObject("Microsoft.XMLHTTP");
	                } catch (e) {}
	            }
	        }

	        if (!this.http_request) {
	            alert('Falla :( No es posible crear una instancia XMLHTTP');
	            return false;
	        }
	        this.http_request.onreadystatechange = function (e) {
	        	self.ajaxResponse();
	        };
	        this.http_request.open('GET', this.messageUrl, true);
	        this.http_request.send(null);
		},
		ajaxResponse : function () {
			if(this.http_request.readyState == 4){
				var container = document.createElement('div');
				console.log(this.body);
				console.log(this.first_child);
				console.log(this.http_request.responseText);

				container.innerHTML = this.http_request.responseText;
				this.body.insertBefore(container, this.first_child);
			}
		}
	};

	window.messageHelper = messageHelper.init();
})();
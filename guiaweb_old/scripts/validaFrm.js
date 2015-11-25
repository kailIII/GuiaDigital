
function hideObj(){
	var objId = hideObj.arguments[0];
	var thisObj = document.getElementById(objId);
	thisObj.style.visibility = "hidden";
}

function showObj(){
	var objId = showObj.arguments[0];
	var thisObj = document.getElementById(objId);
	thisObj.style.visibility = "visible";
}

function isArray(obj){
	if( typeof(obj) != "object") return( false );
	var s = new String;
	s.value = obj.constructor.toString();
	if( s.value.indexOf("Array") == -1 )
		return false;
	else
		return true;
}


function msgValFrm(){
	var swtFnt = msgValFrm.arguments[0];
	if(swtFnt=="off"){
		// mensaje error
		hideObj('msgErr');
		
		// formulario
		showObj('remDat');
		showObj('frmCon');
		
		return;
	} else {
		if(isArray(swtFnt)) {
			var thisObj = document.getElementById('msgErr');
			var j = 0;
			var strMsgErr = "<h2>Error en Env&iacute;o de Mensaje</h2>\n";
			strMsgErr += "<p>El mensaje que usted est&aacute; enviando tiene algunos errores o faltan datos obligatorios:</p>\n";
			strMsgErr += "<ul>\n";

			for(j=0;j<swtFnt.length;j++){
				strMsgErr += "	<li>Falta dato obligatorio "+ swtFnt[j] +"</li>\n";
				
			}
			//strMsgErr += "	<li>El tipo de dato [nombre-campo] es incorrecto, por favor verif&iacute;quelo</li>\n";
			strMsgErr += "</ul>\n";

			thisObj.innerHTML = strMsgErr;
		
			// mensaje error
			showObj('msgErr');

			// formulario
			hideObj('remDat');
			hideObj('frmCon');
		}

	}
	window.setTimeout("msgValFrm('off')",2000);
}


function msgValFrmRecomienda(){
	var swtFnt = msgValFrmRecomienda.arguments[0];
	if(swtFnt=="off"){
		// mensaje error
		hideObj('msgErr');
		
		// formulario
		showObj('remDat');
		showObj('dstDat');
		
		return;
	} else {
		if(isArray(swtFnt)) {
			var thisObj = document.getElementById('msgErr');
			var j = 0;
			var strMsgErr = "<h2>Error en Env&iacute;o de Recomendaci&oacute;n</h2>\n";
			strMsgErr += "<p>La recomendaci&oacute;n que usted est&aacute; enviando tiene algunos errores o faltan datos obligatorios:</p>\n";
			strMsgErr += "<ul>\n";

			for(j=0;j<swtFnt.length;j++){
				strMsgErr += "	<li>Falta dato obligatorio "+ swtFnt[j] +"</li>\n";
				
			}
			//strMsgErr += "	<li>El tipo de dato [nombre-campo] es incorrecto, por favor verif&iacute;quelo</li>\n";
			strMsgErr += "</ul>\n";

			thisObj.innerHTML = strMsgErr;
		
			// mensaje error
			showObj('msgErr');

			// formulario
			hideObj('remDat');
			hideObj('dstDat');
		}

	}
	window.setTimeout("msgValFrmRecomienda('off')",2000);
}

function validaFrm(){
	var ok = 0;
	var arrNamAlt = new Array;
	frmObj = document.frmContact;
	if(frmObj.cntName.value==""){
		arrNamAlt[ok] = "Nombre Completo";
		ok++;
	}
	if(frmObj.cntMail.value==""){
		arrNamAlt[ok] = "Correo Electr&oacute;nico";
		ok++;
	}
	if(frmObj.cntSubject.value==""){
		arrNamAlt[ok] = "Tema o Asunto";
		ok++;
	}
	if(frmObj.cntMessage.value==""){
		arrNamAlt[ok] = "Mensaje";
	}

	if(ok>0){
		msgValFrm(arrNamAlt);
		return;
	} else {
		frmObj.action = "scripts/enviaMail.html";
		frmObj.submit();
		return;
	}
}

function validaFrmRecomienda(){
	var ok = 0;
	var arrNamAlt = new Array;
	frmObj = document.frmTellAFriend;
	if(frmObj.fromName.value==""){
		arrNamAlt[ok] = "Nombre Completo Remitente";
		ok++;
	}
	if(frmObj.fromMail.value==""){
		arrNamAlt[ok] = "Correo Electr&oacute;nico Remitente";
		ok++;
	}
	if(frmObj.toName.value==""){
		arrNamAlt[ok] = "Nombre Completo Destinatario";
		ok++;
	}
	if(frmObj.toMail.value==""){
		arrNamAlt[ok] = "Correo Electr&oacute;nico Destinatario";
		ok++;
	}

	if(ok>0){
		msgValFrmRecomienda(arrNamAlt);
		return;
	} else {
		frmObj.action = "scripts/enviaMailRecomienda.html";
		frmObj.submit();
		return;
	}
}
/**************************************************************/ 
/* Proyecto Gu&iacute;a Web                                          */
/* JavaScript para Control de Elementos de Interfaz Gr&aacute;fica   */
/* versi&oacute;n 1.0 - 2004-01-23                                   */
/* Nelson Rodr&iacute;guez-Pe&ntilde;a A.                                   */
/* nelson@webstudio.cl                                        */
/**************************************************************/ 

/**
 * Todos los scripts ©Nelson Rodr&iacute;guez-Pe&ntilde;a <nelson@webstudio.cl> 
 * excepto los indicados expresamente como autor&iacute;a de terceros.
 */


/**
 * Soluci&oacute;n parcial al problema de falta de soporte de ABBR en IE
 * http://www.sovavsiti.cz/css/abbr.html
 * Ajustes menores: NR-P
 */
isIE = (document.all) ? true:false;
window.onload = function(){styleAbbr()};
function styleAbbr() {
	var oldBodyText, newBodyText, reg;
	if (isIE) {
		oldBodyText = document.body.innerHTML;
		reg = /<abbr([^>]*)>([^<]*)<\/abbr>/gi;
		newBodyText = oldBodyText.replace(reg, '<abbr $1><span class=\"abbr\" $1>$2</span></abbr>');
		document.body.innerHTML = newBodyText;
	}
}


function enterMenuItem(obRef) {
	if (obRef) {
		if (obRef.nodeName == 'LI') {
			obRef.className = 'current';
		}
	}
}

function leaveMenuItem(obRef) {
	if (obRef) {
		if (obRef.nodeName == 'LI') {
			obRef.className = '';
		}
	}
}


function swapClass(oId, newClass) {
	var obj = document.getElementById(oId);
	if (obj) {
		obj.className = newClass;
	}
}


function focusFormElement(oId) {
	var obj = document.getElementById(oId);
	if (obj) {
		obj.focus();
	}
}




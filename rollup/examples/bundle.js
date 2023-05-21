var version = (function (external_js) {
	'use strict';

	var version = "0.1.0";

	var main = () => {
	    console.log("I'm Hua Yang.");

	    external_js.externalDependen();

	    console.log(version);
	};

	return main;

})(ej);

"use strict";
document.addEventListener("DOMContentLoaded", ()=>{
	document.querySelector("#input").addEventListener("input", ()=>{
	let _password = document.querySelector("#input").value;

	//error handling
try {
  if(_password.length===0) {
	throw "Enter Password"
};
  if(_password.length>0 && _password.length<3){ 
	throw "Weak password!"
};
  if(_password.length>3 && _password.length<5) {
	throw "Medium password!"
};
if(_password.length>5 && _password.length<8){
	throw "Strong password!"
}
}

catch (e) {
	document.querySelector("#err").innerHTML=e;
}
});

});







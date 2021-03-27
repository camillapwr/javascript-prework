function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}
function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('results').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
    document.getElementById ('results').innerHTML = '';
}
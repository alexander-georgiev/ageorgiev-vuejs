function alex_alert(title, text, type, button) {
	var overlay = document.createElement('div');
	overlay.className = 'overlay';
	var alert = document.createElement('div');
	alert.className = 'alert',
	alert.innerHTML = '<div class="notification is-'+type+'"><button class="delete" id="close-alert"></button>'+
	'<i class="fas fa-check-circle fa-2x"></i><h6 class="title">'+title+'</h6><p>'+text+'</p></div>';

	document.body.appendChild(overlay);
	document.body.appendChild(alert);

	var close_button = document.getElementById('close-alert');
	close_button.addEventListener('click', function() {
		alert.parentNode.removeChild(alert);
		overlay.parentNode.removeChild(overlay);
	}, false);
	
}
export default alex_alert
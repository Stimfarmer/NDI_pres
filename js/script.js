function timer()
{
	var timer = document.getElementById("timer");
	
	var current_date = new Date();
	
	var release_date = new Date("Dec 8 08:00:00 2017");

	var total_left = (release_date - current_date) / 1000;

	
	var prefixe = "Sortie du site dans ";

	if (total_left < 0)
	{

	    prefixe = "Site disponible depuis ";

	    total_left = Math.abs(total_secondes);

	}
	if (total_left > 0)
	{
		var days = Math.floor(total_left / (60 * 60 * 24));

		var hours = Math.floor((total_left - (days * 60 * 60 * 24)) / (60 * 60));

		var minutes = Math.floor((total_left - ((days * 60 * 60 * 24 + hours * 60 * 60))) / 60);

		var secs = Math.floor(total_left - ((days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60)));
	}

	else {

	    timer.innerHTML = 'Site disponible.';

	}

	timer.innerHTML = prefixe + days + ' jours ' + hours + ' heures ' + minutes + ' minutes et ' + secs + ' secondes.';


    var actualisation = setTimeout("timer();", 1000);

}

timer();
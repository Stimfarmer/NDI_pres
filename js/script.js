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

$(document).ready(function(){

    loadGallery(true, 'a.thumbnail');

    //This function disables buttons when needed
    function disableButtons(counter_max, counter_current){
        $('#show-previous-image, #show-next-image').show();
        if(counter_max == counter_current){
            $('#show-next-image').hide();
        } else if (counter_current == 1){
            $('#show-previous-image').hide();
        }
    }

    /**
     *
     * @param setIDs        Sets IDs when DOM is loaded. If using a PHP counter, set to false.
     * @param setClickAttr  Sets the attribute for the click handler.
     */

    function loadGallery(setIDs, setClickAttr){
        var current_image,
            selector,
            counter = 0;

        $('#show-next-image, #show-previous-image').click(function(){
            if($(this).attr('id') == 'show-previous-image'){
                current_image--;
            } else {
                current_image++;
            }

            selector = $('[data-image-id="' + current_image + '"]');
            updateGallery(selector);
        });

        function updateGallery(selector) {
            var $sel = selector;
            current_image = $sel.data('image-id');
            $('#image-gallery-caption').text($sel.data('caption'));
            $('#image-gallery-title').text($sel.data('title'));
            $('#image-gallery-image').attr('src', $sel.data('image'));
            disableButtons(counter, $sel.data('image-id'));
        }

        if(setIDs == true){
            $('[data-image-id]').each(function(){
                counter++;
                $(this).attr('data-image-id',counter);
            });
        }
        $(setClickAttr).on('click',function(){
            updateGallery($(this));
        });
    }

    $(".navbar a, footer a[href='#']").on('click', function(event) {
            if (this.hash !== "") {
              event.preventDefault();

              var hash = this.hash;

              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 900, function(){
           
                window.location.hash = hash;
              });
            }
          });
          
          $(window).scroll(function() {
            $(".slideanim").each(function(){
              var pos = $(this).offset().top;

              var winTop = $(window).scrollTop();
                if (pos < winTop + 600) {
                  $(this).addClass("slide");
                }
            });
          });

     $('#home').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });
});

$('.accordion-mt').on('show.bs.collapse', function (e) {
	  var elementClass = e.target.id;
	  $('.'+elementClass).parent('h2').find('img.icon').attr('src','/documents/d/iam-portal/icon-minus');
	
			  $('.'+elementClass).closest('.card-header').addClass('collaps-header');
        $('.'+elementClass).closest('.card-item').addClass('active-card');
});

$('.accordion-mt').on('hide.bs.collapse', function (e) {
	  var elementClass = e.target.id;
	  $('.'+elementClass).parent('h2').find('img.icon').attr('src','/documents/d/iam-portal/icon-plus');
	   $('.'+elementClass).closest('.card-item').removeClass('active-card');
		 			  $('.'+elementClass).closest('.card-header').removeClass('collaps-header');
});

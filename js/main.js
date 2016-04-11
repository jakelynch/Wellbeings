$(document).ready(function() {
	if (localStorage.getItem("session") != null) {
	    showpage(#home);
	}
	else {
		showpage(#login);
	}

	$(".connections").hide();	

	// $("#feed").click(function () {
	// 	var id = $(this).innerhtml;
	// 	showpage("#" + id);
	// });
}


function showpage(id){
    $(".page").hide();
    $(id).show();

    if (id == '#aroundyou') {
    	$('#connections').hide();
    }

    if (id == '.connections') {
    	$('#aroundyou').hide();
    }
}

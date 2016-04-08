$(document).ready(function() {
	if (localStorage.getItem("session") != null) {
	    showpage(#home);
	}
	else {
		showpage(#login);
	}
}

function showpage(id){
    $(".page").hide();
    $(id).show();
}

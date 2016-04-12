var html;

$(document).ready(function() {
		if (localStorage.getItem('htmlsave')){
		var htmlstore = localStorage.getItem('htmlsave')
		$('#reply').html(htmlstore);

	}
    if (localStorage.getItem('postsave')){
        var postsave = localStorage.getItem('postsave')
        $('#aroundyou').html(postsave);
        
    }
// 	if (localStorage.getItem("session") != null) {
// 	    showpage("#home");
// 	}						
// 	else {
// 		showpage("#login");
// 	}

// 	$("#connections").hide();	

// 	// $("#feed").click(function () {
// 	// 	var id = $(this).innerhtml;
// 	// 	showpage("#" + id);
// 	// });
// })
})

$(document).delegate('#my-dialog-button', 'click', function () {

    //change to the dialog, forcing the hash to remain the same and the page to be viewed as a dialog
    $.mobile.changePage($('#my-dialog'), {
        changeHash : false,
        role       : 'dialog'
    });
});

function showpage(id){
    $(".page").hide();
    $(id).show();

    if (id == '#aroundyou') {
    	$('#connections').hide();
    }

    if (id == '.connections') {
    	$('#aroundyou').hide();
    }

    if (id == "#search")
    {
        search_page();
    }
}

function search_page(keyWord)
{

}
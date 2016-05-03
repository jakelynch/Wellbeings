
var html;


$(document).ready(function() {
    // localStorage.clear();

    var id=0;
	if (localStorage.getItem('htmlsave')){
		var htmlstore = localStorage.getItem('htmlsave')
		$('#reply1').html(htmlstore);
	}
    if (localStorage.getItem('idlistsave')){
        var idlist = localStorage.getItem("idlistsave")
        
        idlist= idlist.substring(2,idlist.length-2).split('","');

        console.log(idlist);
        for (i = 0; i < idlist.length; i++){
            idtag = "#" +idlist[i]
            $(idtag + " .connect-btn").removeClass('noConnect').addClass('yesConnect');
        }
    }
    else{
        var idlist = [];
    }
    if (localStorage.getItem('postsave')){
        var postsave = localStorage.getItem('postsave')

        $('#aroundyou').prepend("<div class='reply' id ='129129391'>"+ postsave+"</div>");
        $('#userposts').prepend("<div class='reply' id ='129129391'>"+ postsave+"</div>");}

    $(".reply").click(function(){
    // alert(this.id);
    myid = this.id;
    })  
 
    $('.connect-btn').on('click', function(){
                                var btn=$(this);
                                console.log(btn.parent().parent().attr('id'));
                                if(btn.hasClass('noConnect')){
                                        btn.removeClass('noConnect').addClass('yesConnect');
                                        console.log("noConnect");
                                        console.log(idlist)
                                        idlist.push(btn.parent().parent().attr('id'));
                                        localStorage.setItem('idlistsave', JSON.stringify(idlist));

                                }

                                else{
                                        btn.removeClass('yesConnect').addClass('noConnect');
                                        console.log("yesConnect");
                                        var index = idlist.indexOf(btn.parent().parent().attr('id'));
                                        console.log(index);
                                        if (index> -1){
                                            idlist.splice(index, 1)
                                        }
                                        localStorage.setItem('idlistsave', JSON.stringify(idlist));

                                }
                                console.log("this is" + idlist);
                        });
});       


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


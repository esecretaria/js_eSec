function hideColumnSms(colToHide){
var hideColPunchAndHeader = colToHide;
var x = hideColPunchAndHeader + 1;
var hideColNotPhone = $(".punchtable > tbody > tr > td:nth-child("+x+")");

 hideColNotPhone.hide();
}

/********** if not working -- try this:
<script>
$(document).ready(function(){
     $(".punchtable > tbody > tr:nth-child(4)").addClass("hideOnSms"); //default
     //+1, so example there are 5 col headers, need to hide the 5th, nth child should be 6
     //$(".punchtable > tbody > tr > td:nth-child(6)").addClass("hideOnSms");
     $(".punchtable > tbody > tr > td:nth-child(6)").css("display","none");
});
</script>
***********/

//---------------------------------------

function replaceHeaderTextBrowserView(placeOfHeader,[textToDisplay]){
var headerTextToChange = placeOfHeader;
var displayText = textToDisplay;
var smsBrowserView = $(".punchtable > tbody > tr:first-child").find("td:eq("+headerTextToChange+")");
var replacedText = smsBrowserView.html(displayText);

return replacedText;
}

/********** if not working -- try this:
$('.punchtable > tbody > tr:first-child').find("td:eq(2)").html("TEST");
***********/

//---------------------------------------



function mobileModePunches(mobilePlace,mobileTextToDisplay){
     var mobileTextToChange = mobilePlace + 1;
     var mobileDisplayText = "<span class='forMobilePunch'>"+mobileTextToDisplay+"</span>";
     var mobilePunchView = $("td:nth-child("+mobileTextToChange+") > .hidden").replaceWith(mobileDisplayText);
		
		return mobilePunchView;
}
/********** if not working -- try this:
$("td:nth-child(3) > .hidden").replaceWith("AASDAS");
***********/

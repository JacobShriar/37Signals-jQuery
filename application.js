$(document).ready(function() {
    
	$('#basecamp').hover(function() {
        $('#basecamp-hover').toggle();
        $('#main-text').toggle();
       
    });

    $('#highrise').hover(function() {
        $('#highrise-hover').toggle();
        $('#main-text').toggle();
        
     });

    $('#campfire').hover(function() {
       	$('#campfire-hover').toggle();
       	$('#main-text').toggle();
       
     });

		var d=new Date();
var weekday=new Array();
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";

var day = weekday[d.getUTCDay()];

});

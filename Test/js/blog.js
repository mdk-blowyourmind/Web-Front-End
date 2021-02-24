$(document).ready(function(){
    
    (function($) {
        "use strict"; 
    
    /*------------------------------    
    Calendar
    ------------------------------*/
    $("#calendar").zabuto_calendar({
        cell_border: true,
        today: true,
        show_days: true,
        weekstartson: 0,
        nav_icon: {
            prev: '<i class="fa fa-chevron-circle-left"></i>',
            next: '<i class="fa fa-chevron-circle-right"></i>'
        }
    })
        
    })(jQuery)
});
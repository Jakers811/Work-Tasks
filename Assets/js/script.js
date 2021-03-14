var clock = function () {
    $("#currentDay").text("Today is " + moment().format('MMMM Do YYYY, h:mm:ss a'));
};

$(document).ready(function() {
    $('.saveBtn').on('click', function(){
        var value = $(this).siblings('.task').val()
        var time = $(this).parent().attr('id');
        localStorage.setItem(time, value);
    });
    clock();
    setInterval(clock, 1000);
    // style rows to show what time it is
    function currentTime() {

        var currentHour = moment().hours()
        console.log(currentHour);

        $('.time-block').each( function(){
           var blockHour = parseInt($(this).attr('id').split('hour-')[1 - 18])
           console.log(blockHour);

        if (blockHour < currentHour) {
            $(this).children('textarea').addClass('past');
        }

        else if (blockHour === currentHour) {
            $(this).children('textarea').removeClass('past');
            $(this).children('textarea').addClass('present');
        }

        else {
            $(this).children('textarea').removeClass('past');
            $(this).children('textarea').removeClass('present');
            $(this).children('textarea').addClass('future');
        }

        });
    };
    currentTime();
    setInterval(currentTime,1000);
});

$('.time-block').each( function (){
    var id = $(this).attr('id')
    $(this).children('textarea').val(localStorage.getItem(id))
});



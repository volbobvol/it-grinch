function onDaySelected() {
    var day = location.hash.slice(1) * 1;
    if(day > 0 && day <= 14) {
        $('.show-for-day').show();
        $('#selected-day').text(day);
    }
    else {
        $('.show-for-day').hide();
    }

}

function calculateResult() {
    $('body').addClass('loading');
    $('.result-top').hide();

    setTimeout(function() {
        $('body').removeClass('loading');
        $('.result-top').show();
        $('#result').text(Math.floor(Math.random() * 100));
    }, 2000);
}

$( document ).ready(function() {
    onDaySelected();
});
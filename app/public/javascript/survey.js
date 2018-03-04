$(document).ready(function () {
    console.log('document ready.')

    $('#submit').on('click', function (event) {
        console.log('clicked')
        event.preventDefault();
        var surveyValues = {

            q1: $('#q1').val(),
            q2: $('#q2').val(),
            q3: $('#q3').val(),
            q4: $('#q4').val(),
            q5: $('#q5').val(),
            q6: $('#q6').val(),
            q7: $('#q7').val(),
            q8: $('#q8').val(),
            q9: $('#q9').val(),
            q10: $('#q10').val(),
        }
    $.post('/api/friends', surveyValues, function(data){
    if (data) {
        console.log('success')
    }
    else {
        console.log('fail');
    }
})
    })
    // module.exports = surveyValues;
});
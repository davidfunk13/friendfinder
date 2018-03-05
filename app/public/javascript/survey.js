$(document).ready(function () {
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
        let valCheck = Object.values(surveyValues);
        if (valCheck.includes('')) {
            console.log('blank answer');
            alert('please answer all questions and try again');
            return;
        }
        if (!valCheck.includes('')) {
            $.post('/api/friends', surveyValues, function (data) {
                if (data) {
                    $('#photo').attr('src', data.photo)
                    $('#name').html(data.name)
                    console.log(data)
                    console.log('success')
                }
                else {
                    console.log('fail');
                }
            })
        }
    })
});
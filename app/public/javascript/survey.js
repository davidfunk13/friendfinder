$(document).ready(function (){
console.log('document ready.')

//button values
var q1 = $('#q1')

$(document).on('click', '#submit' ,function (){

console.log(`button is working Q1 val ${q1}`)
})


});
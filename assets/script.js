var correct = 0;
var incorrect = 0;
var unanswered = 10;

function correctAnswer(input){
    $(input).css("disabled", "disabled");
    unanswered--;
    correct++;

}

function badAnswer(input){
    $(input).css("disabled", "disabled");
    unanswered--;
    incorrect++;
}
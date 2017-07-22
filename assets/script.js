var correct = 0;
var incorrect = 0;
var unanswered = 10;
var remaining = 60.0;
var grade = 0;
function correctAnswer(input){
    $(input).prop("disabled", true);
    unanswered--;
    correct++;

    if(unanswered===0){
        showGrade();
    }
}

function badAnswer(input){
    $(input).prop("disabled", true);
    unanswered--;
    incorrect++;

    if(unanswered===0){
        showGrade();
    }
}

function timer(){
    setInterval( timerGears
    , 100)
}

function timerGears(){
    console.log(remaining);
        remaining = remaining-0.1;

        $("#timerBox").html("<h2>" + remaining + "sec</h2>" );

        if(remaining<=0){
            showGrade();
        }
}

function reset(){
    location.reload(true);
}

function showGrade (){

    $(".btn-warning").css("disabled", "disabled");
    grade = 100*(correct*2+unanswered)/20;

    $(".questionArea").html(
        "<div class='jumbotron text-center gradeBox'>" +
        "<h2>You got " + correct + " out of 10 correct," + incorrect + " incorrect and left " + unanswered + " questions unanswered</h2>" +
        "<h2>This leaves you with a score of " + grade +"%</h2>" +
        "<button class='btn btn-success' onclick='reset()'>Play Again?</button>"
    );

}

$(document).ready(timer());
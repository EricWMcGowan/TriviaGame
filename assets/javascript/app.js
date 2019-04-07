// function check() {
//     var question1 = document.triviaQuestions.question1.value;
//     var question2 = document.triviaQuestions.question2.value;
//     var question3 = document.triviaQuestions.question3.value;
//     var question4 = document.triviaQuestions.question4.value;
//     var question5 = document.triviaQuestions.question5.value;
//     var correct = 0;

//         if (question1 === "true"){
//             correct++;
//         }

//         if (question2 === "true"){
//             correct++;
//         }

//         if (question3 === "true"){
//             correct++;
//         }

//         if (question4 === "true"){
//             correct++;
//         }

//         if (question5 === "true"){
//             correct++;
//         }

// document.getElementById("numberCorrect").innerHTML="You got " + correct + " correct.";
// }
// Generate the quiz
function generateQuiz(questions, quizContainer, resultsContainer, submit) {
    //Sets up the function to show the questions to the user


    var myQuestions = [{
        question: "Humans have only explored about 5% of the ocean floor.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "a"
    },
    {
        question: "Earth's oceans are 3.8 billion years old.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "a"
    },
    {
        question: "Humans know more about Outerspace than we do our own oceans.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "a"
    },
    {
        question: "More than 70% of the Earth's surface is covered by it's oceans.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "a"
    },
    {
        question: "The majority of life on Earth is aquatic.",
        answers: {
            a: "True",
            b: "False",
        },
        correctAnswer: "a"
    }
    ];
    function showQuestions(questions, quizContainer) {

        var output = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {
            answers = [];

            for (letter in questions[i].answers) {

                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

    showQuestions(questions, quizContainer);


}


// Show results once the submit button is clicked
function showResults(questions, quizContainer, resultsContainer) {
    var answerContainers = quizContainer.querySelectorAll('.answers');

    var userAnswer = '';
    var numberCorrect = 0;

    for (var i = 0; i < questions.length; i++) {

        // find selected answer
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        // if answer is correct
        if (userAnswer === questions[i].correctAnswer) {
            // add to the number of correct answers
            numCorrect++;

            // color the answers green
            answerContainers[i].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else {
            // color the answers red
            answerContainers[i].style.color = 'red';
        }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}



// Calls the functions to show the questions

// Shows the results upon clicking the submit button
submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);

}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);




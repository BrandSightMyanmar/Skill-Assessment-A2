const subTitle = document.getElementById("sub-title");
const subTitle2 = document.getElementById("sub-title-2");

const progressPercentShow = document.getElementById("progress-percent-show");
const progressBarWidth = document.getElementById("progress-bar-width");

const steps = document.getElementsByClassName("step");

let pageID = 1;

let progressPercent = 0;

const questionsAndIDs = [
    ["New Job Post", ""],
    ["Screening Questions", ""],
    ["Point of contact details", "Who would be connecting with candidates and hire them for this job?"],
    ["Employment Contract", "Legally binding agreement for the job that is being offered to the worker."]
]

reload();

function reload() {
    subTitle.innerText = questionsAndIDs[pageID - 1][0];
    subTitle2.innerText = questionsAndIDs[pageID - 1][1];
    progressPercent = (pageID - 1) * 25;
    progressPercentShow.innerText = progressPercent + "%";
    progressBarWidth.style.width = progressPercent + "%";
    for (let i = 0; i < pageID - 1; i++) {
        steps[i].setAttribute("checked", "true");
    }
}

function next() {
    pageID++;
    reload();
}

function prev() {
    pageID--;
    reload();
}

// progress bar


$(document).ready(function () {

    $(".sliderBtn").parent().css({
        'display': 'inline',
        'color': 'black !important',
        'background-color': 'blue'
    });

    var options = {
        width: 1050,
        height: "max-content",
        display: 'inline',
        next_prev: true, //will show next and prev links
        next_class: 'btn btn-primary btn-xs d-inline',//class for next link
        prev_class: 'btn btn-primary btn-xs sliderBtn d-inline',//class for prev link
        error_class: 'alert alert-danger',//class for validation errors
        texts: {
            next: 'next',//verbiage for next link
            prev: 'back'//verbiage for prev link
        },
        speed: 600,//slider speed

    };

    $('#slider').jFormslider(options);
})

let questionIDS;

function rearrange() {
    questionIDS = document.getElementsByClassName("question-ID");
    for(let i = 0; i < questionIDS.length; i++) {
        questionIDS[i].innerText = i + 1;
    }
}

let questionID = 3;

function newYesOrNoQuestion(questionID) {
    return `<div class="question shadow mt-3" questionID=${questionID}>
                            <div class="question-header border-secondary border-bottom d-flex align-items-center justify-content-between">
                                <section class="d-flex p-2">
                                    <div class="question-id">
                                        QUESTION <span id="question-id"  class="question-ID">${questionID}</span> -
                                    </div>
                                    <div id="question-type">
                                        YES/NO
                                    </div>
                                </section>
                                <section class="mb-2">
                                    <div class="m-auto ms-5">Points</div>
                                    <div class="d-flex">
                                        <input class="numberstyle" disabled type="text" min="1" step="1" value="1" max="10">
                                        <img class="ms-2 deleteQuestion" src="./../assests/icons/CounterMinus.svg">
                                    </div>
                                </section>
                            </div>

                            <div class="question-body mt-2 mb-4">
                                <input type="text" class="form-control" style="font-size: 15px;" placeholder="Enter your question here" err-id="error-question${questionID}" required data-msg="Question must be filled">
                                <div id="error-question${questionID}" class="text-danger"></div>
                                <p class="input-guide">SELECT THE CORRECT ANSWER</p>

                                <section class="options">
                                            <div class="answerWithOptions d-flex">
                                                <input type="text" disabled value="YES" class="form-control">
                                                <select class="form-select mx-3" name="answer" style="width: 155px;" required data-msg="Correctness state must be chosen." err-id="error-question${questionID}a-choose">
                                                    <option selected disabled>Choose</option>
                                                    <option value="correct" class="text-success">Correct ✓</option>
                                                    <option value="incorrect" class="text-danger">Incorrect ✕</option>
                                                </select>
                                                <img src="./../assests/icons/CounterMinus.svg">
                                            </div>
                                            <div id="error-question${questionID}a-choose" class="text-danger"></div>
                                            <div class="answerWithOptions mt-2 d-flex">
                                                <input type="text" disabled value="NO" class="form-control">
                                                <select class="form-select mx-3" name="answer" style="width: 155px;" required data-msg="Correctness state must be chosen." err-id="error-question${questionID}b-choose">
                                                    <option selected disabled>Choose</option>
                                                    <option value="correct" class="text-success">Correct ✓</option>
                                                    <option value="incorrect" class="text-danger">Incorrect ✕</option>
                                                </select>
                                                <img src="./../assests/icons/CounterMinus.svg">
                                            </div>
                                            <div id="error-question${questionID}b-choose" class="text-danger"></div>
                                        </section>
                            </div>
                        </div>`
}

function newMultipleChoiceQuestion(quesionID) {
    return `<div class="question shadow mt-3" questionID=${questionID}>
                            <div class="question-header border-secondary border-bottom d-flex align-items-center justify-content-between">
                                <section class="d-flex p-2">
                                    <div class="question-id">
                                        QUESTION <span id="question-id" class="question-ID">${questionID}</span> -
                                    </div>
                                    <div id="question-type">
                                        MULTIPLE CHOICE
                                    </div>
                                </section>
                                <section class="mb-2">
                                    <div class="m-auto ms-5">Points</div>
                                    <div class="d-flex">
                                        <input class="numberstyle" disabled type="text" min="1" step="1" value="1" max="10">
                                        <img class="ms-2 deleteQuestion" src="./../assests/icons/CounterMinus.svg">
                                    </div>
                                </section>
                            </div>

                            <div class="question-body mt-2 mb-4">
                                <input type="text" class="form-control" style="font-size: 15px;" placeholder="Enter your question here" err-id="error-question${questionID}" required data-msg="Question must be filled">
                                <div id="error-question${questionID}" class="text-danger"></div>
                                <p class="input-guide">SELECT THE CORRECT ANSWER</p>

                                <section class="options">
                                            <div class="answerWithOptions mt-2 d-flex">
                                                <input type="text" class="form-control">
                                                <select class="form-select mx-3" name="answer" style="width: 155px;" required data-msg="Correctness state must be chosen." err-id="error-question${questionID}a-choose">
                                                    <option selected disabled>Choose</option>
                                                    <option value="correct" class="text-success">Correct ✓</option>
                                                    <option value="incorrect" class="text-danger">Incorrect ✕</option>
                                                </select>
                                                <img src="./../assests/icons/CounterMinus.svg"  class="optionRemove">
                                            </div>
                                            <div id="error-question${questionID}a-choose" class="text-danger"></div>
                                            <div class="answerWithOptions mt-2 d-flex">
                                                <input type="text" class="form-control">
                                                <select class="form-select mx-3" name="answer" style="width: 155px;" required data-msg="Correctness state must be chosen." err-id="error-question${questionID}b-choose">
                                                    <option selected disabled>Choose</option>
                                                    <option value="correct" class="text-success">Correct ✓</option>
                                                    <option value="incorrect" class="text-danger">Incorrect ✕</option>
                                                </select>
                                                <img src="./../assests/icons/CounterPlus.svg"  class="optionAdd">
                                            </div>
                                            <div id="error-question${questionID}b-choose" class="text-danger"></div>
                                        </section>
                            </div>
                        </div>`
}

function newMultipleSelectionQuestion(quesionID) {
    return `<div class="question shadow mt-3" questionID=${questionID}>
                            <div class="question-header border-secondary border-bottom d-flex align-items-center justify-content-between">
                                <section class="d-flex p-2">
                                    <div class="question-id">
                                        QUESTION <span id="question-id" class="question-ID">${questionID}</span> -
                                    </div>
                                    <div id="question-type">
                                        MULTIPLE SELECTION
                                    </div>
                                </section>
                                <section class="mb-2">
                                    <div class="m-auto ms-5">Points</div>
                                    <div class="d-flex">
                                        <input class="numberstyle" disabled type="text" min="1" step="1" value="1" max="10">
                                        <img class="ms-2 deleteQuestion" src="./../assests/icons/CounterMinus.svg">
                                    </div>
                                </section>
                            </div>

                            <div class="question-body mt-2 mb-4">
                                <input type="text" class="form-control" style="font-size: 15px;" placeholder="Enter your question here" err-id="error-question${questionID}" required data-msg="Question must be filled">
                                <div id="error-question${questionID}" class="text-danger"></div>
                                <p class="input-guide">SELECT THE CORRECT ANSWER</p>

                                <section class="options">
                                            <div class="answerWithOptions mt-2 d-flex">
                                                <input type="text" class="form-control">
                                                <select class="form-select mx-3" name="answer" style="width: 155px;" required data-msg="Correctness state must be chosen." err-id="error-question${questionID}a-choose">
                                                    <option selected disabled>Choose</option>
                                                    <option value="correct" class="text-success">Correct ✓</option>
                                                    <option value="incorrect" class="text-danger">Incorrect ✕</option>
                                                </select>
                                                <img src="./../assests/icons/CounterMinus.svg"  class="optionRemove">
                                            </div>
                                            <div id="error-question${questionID}a-choose" class="text-danger"></div>
                                            <div class="answerWithOptions mt-2 d-flex">
                                                <input type="text" class="form-control">
                                                <select class="form-select mx-3" name="answer" style="width: 155px;" required data-msg="Correctness state must be chosen." err-id="error-question${questionID}b-choose">
                                                    <option selected disabled>Choose</option>
                                                    <option value="correct" class="text-success">Correct ✓</option>
                                                    <option value="incorrect" class="text-danger">Incorrect ✕</option>
                                                </select>
                                                <img src="./../assests/icons/CounterPlus.svg"  class="optionAdd">
                                            </div>
                                            <div id="error-question${questionID}b-choose" class="text-danger"></div>
                                        </section>
                            </div>
                        </div>`
}

const questions = document.getElementById("questions");
let newQues;
let questionsArray = [1,2];
let index;
function deleteQuestion(id) {
    index = questionsArray.indexOf(parseInt(id));
if (index > -1) { // only splice array when item is found
    questionsArray.splice(index, 1); // 2nd parameter means remove one item only
}
    $("#questionNumber").val(questionsArray.length);
}

function addQuestion(questionType) {
    newQues = document.createElement("div");
    switch (questionType) {
        case 1:
            newQues.innerHTML = newYesOrNoQuestion(questionID);
            break;
        case 2:
            newQues.innerHTML = newMultipleChoiceQuestion(questionID);
            break;
        case 3:
            newQues.innerHTML = newMultipleSelectionQuestion(questionID);
            break;
        default:
            break;
    }
    questions.appendChild(newQues);
    questionsArray.push(questionID);
    deleteQuestion(-1);
    questionID++;
    rearrange();
    $('.numberstyle').numberstyle();
}

// experience
const requiredExperienceYears = $("#requiredExperienceYears").parent().addClass("d-none");
const numberOfYears = $("#numberOfYears");
const experienced = document.getElementById("experienced");
const fresher = document.getElementById("fresher");
const contract = $("#contract");

// function handleExperience(condition) {
//     if(condition == "add") {
//         requiredExperienceYears.addClass("d-none")
//     } else {
//         requiredExperienceYears.removeClass("d-none")
//     }
// }

$(function () {
    $('input[name=contractPresent]').bind('change', function (v) {

        if ($("#yesContractPresent").is(':checked')) {
            contract.removeClass("d-none");
        } else {
            contract.addClass("d-none")
        }
    });
    $('input[name=experienceRequired]').bind('change', function (v) {

        if ($("#experienced").is(':checked')) {
            requiredExperienceYears.removeClass("d-none");
            numberOfYears.removeClass("d-none");
        } else {
            requiredExperienceYears.addClass("d-none");
            numberOfYears.addClass("d-none");
        }
    });



});

tinymce.init({
    selector: 'textarea#contractTerms',
    plugins: 'link lists media quickbars table media',
    toolbar: 'styles | bold italic link bullist numlist | outdent indent | quickimage blockquote | table media | undo redo',
    menubar: '',
    init_instance_callback: function (editor) {
        editor.on('input', function (input) {
            document.getElementById("showContractTerms").innerHTML = tinymce.get('contractTerms').getContent();
        });

    },
    setup:function(ed) {
        ed.on('change', function(e) {
            document.getElementById("showContractTerms").innerHTML = tinymce.get('contractTerms').getContent();
        });
    }
});

tinymce.init({
    selector: 'textarea#footer',
    plugins: 'link lists media quickbars table media',
    toolbar: 'styles | bold italic link bullist numlist | outdent indent | quickimage blockquote | table media | undo redo',
    menubar: '',
    init_instance_callback: function (editor) {
        editor.on('input', function (input) {
            document.getElementById("showFooter").innerHTML = tinymce.get('footer').getContent();
        });
    },
    setup:function(ed) {
        ed.on('change', function(e) {
            document.getElementById("showFooter").innerHTML = tinymce.get('footer').getContent();
        });
    }
});

// Same Address

function sameAddress() {
    if ($("#sameAddressForInterview:checked")) {
        $("#job-city-2").val($("#job-city").find(":selected").text().toLowerCase());
        $("#job-area-2").val($("#job-area").find(":selected").text().toLowerCase());
    } else {
        $("#job-city-2").val("");
        $("#job-area-2").val("");
    }
}

// Salary

$("input[salary]").on("input", function () {
    $("#minSalary").val($("#minSalary").val().replace(",", "").replace(/[^0-9]/g, "").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
    $("#maxSalary").val($("#maxSalary").val().replace(",", "").replace(/[^0-9]/g, "").replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
})
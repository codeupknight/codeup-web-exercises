'use strict';

var classNameInput = $("#subject");
var classGradeInput = $("#grade");

var student = {
    awesomeGrade: 80,
    studentName: null,
    subjects: [],
    calculateAverage: function () {
        var average = 0;
        var averageOutput = document.getElementById("student-average");
        this.subjects.forEach(function (subject) {
            average += subject.grade;
        });
        averageOutput.innerText = (average / this.subjects.length);
        return average / this.subjects.length
    },
    addSubject: function (nameVar, gradeVar) {
        var subject = {
            subjectName: nameVar,
            grade: Number(gradeVar)
        };
        this.subjects.push(subject);
    },
    isAwesome: function () {
        return this.calculateAverage() > this.awesomeGrade;
    }
}

//***This section should be good
//name-save function with variables included
function nameSavedListener() {
    var addButton = $("#add-grade");
    var averageButton = $("#calculate-average");
    averageButton.removeAttr("disabled");
    addButton.removeAttr("disabled");
    var nameInputValue = $("#nameInput");
    var nameOutput = $("#student-name");
    nameOutput.text = nameInputValue.val();
    student.studentName = nameInputValue.val();
}
//***

//***This section should be good
//class entry listener function and its variables
function subjectBtnListener() {
    if (classNameInput.val() !== "" && classGradeInput.val() !== "") {
//activate object function
    student.addSubject(classNameInput.val(), classGradeInput.val());
//add to table
    var tableOutput = $("#grades");
    var classOutput = ("<tr><td>" + classNameInput.val() + "</td><td>" + classGradeInput.val() + "</td></tr>");
    tableOutput.html(classOutput + tableOutput.html());
    }
    classNameInput.val("");
    classGradeInput.val("");
}
//***

//looks good
//finishes the stuffs
function calculateAverageListener() {
    subjectBtnListener();
    student.calculateAverage();
    if (student.isAwesome()) {
        $('#student-awesome').removeAttr('class');
        $('#student-practice').attr('class', 'hidden');
    } else {
    $('#student-practice').removeAttr('class');
    $('#student-awesome').attr('class', 'hidden');
    }
    classNameInput.val("");
    classGradeInput.val("");
}


//***This section should be good
//all button listeners
$('#save-name').click(nameSavedListener);

$('#add-grade').click(subjectBtnListener);

$('calculate-average').click(calculateAverageListener);
//***  
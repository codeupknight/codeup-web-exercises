'use strict';

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
        var addButton = document.getElementById("add-grade");
        var averageButton = document.getElementById("calculate-average");
        averageButton.removeAttribute("disabled");
        addButton.removeAttribute("disabled");
        var nameInputValue = document.getElementById("nameInput").value;
        var nameOutput = document.getElementById("student-name");
        nameOutput.innerText = nameInputValue;
        student.studentName = nameInputValue;
    }
//***

//***This section should be good
//class entry listener function and its variables
    function subjectBtnListener() {
        var classNameInput = document.getElementById("subject");
        var classGradeInput = document.getElementById("grade");
    //activate object function
        student.addSubject(classNameInput.value, classGradeInput.value);
    //add to table
        var tableOutput = document.getElementById("grades");
        var classOutput = ("<tr><td>" + classNameInput.value + "</td><td>" + classGradeInput.value + "</td></tr>");
        tableOutput.innerHTML = (classOutput + tableOutput.innerHTML);
    }
//***

//
    function calculateAverageListener() {
        subjectBtnListener();
        student.calculateAverage();
        if (student.isAwesome()) {
            document.getElementById('student-awesome').removeAttribute('class');
            document.getElementById('student-practice').setAttribute('class', 'hidden');
        } else {
        document.getElementById('student-practice').removeAttribute('class');
        document.getElementById('student-awesome').setAttribute('class', 'hidden');
        }
    }
//***This section should be good
//all button listeners
    var nameBtn = document.getElementById('save-name');
    nameBtn.addEventListener('click', nameSavedListener, false);

    var subjectBtn = document.getElementById('add-grade');
    subjectBtn.addEventListener('click', subjectBtnListener, false);

    var gradeBtn = document.getElementById('calculate-average');
    gradeBtn.addEventListener('click', calculateAverageListener, false);
//***   

//Instructions:
// After the student inputs the subject,
// the grade, and clicks Add and continue, 
// the subject name and the grade should be added to the table as a new row
// and to the student object using the method addSubject.
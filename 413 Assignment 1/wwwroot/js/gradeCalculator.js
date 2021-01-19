function calcGrade() {
    var assignments;
    var groupProjects;
    var quizzes;
    var exams;
    var intex;
    var grade;
    var letterGrade;
    var displayGrade;

    assignments = document.getElementById("assignments").value;
    groupProjects = document.getElementById("groupProjects").value;
    quizzes = document.getElementById("quizzes").value;
    exams = document.getElementById("exams").value;
    intex = document.getElementById("intex").value;

    grade = ((assignments * .50) + (groupProjects * .10) + (quizzes * .10) + (exams * .20) + (intex * .10));
    if (grade >= 94)
    letterGrade = "A";
    else if (grade >= 90)
        letterGrade = "A-";
    else if (grade >= 87)
        letterGrade = "B+";
    else if (grade >= 84)
        letterGrade = "B";
    else if (grade >= 80)
        letterGrade = "B-";
    else if (grade >= 77)
        letterGrade = "C+";
    else if (grade >= 74)
        letterGrade = "C";
    else if (grade >= 70)
        letterGrade = "C-";
    else if (grade >= 67)
        letterGrade = "D+";
    else if (grade >= 64)
        letterGrade = "D";
    else if (grade >= 60)
        letterGrade = "D-";
    else
        letterGrade = "F";

    displayGrade = grade + "% " + letterGrade;
    document.getElementById("displayGrade").innerHTML = displayGrade;
}
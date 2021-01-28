$("#submitButton").click(function () {
    //alert("beginning alert");
    //define variables
    var assignments;
    var groupProjects;
    var quizzes;
    var exams;
    var intex;
    var grade;
    var letterGrade;
    var displayGrade;
    //get variable values from html form
    assignments = $("#assignments").val();
    groupProjects = $("#groupProjects").val();
    quizzes = $("#quizzes").val();
    exams = $("#exams").val();
    intex = $("#intex").val();
    //calculate numerical grade value
    grade = ((assignments * .50) + (groupProjects * .10) + (quizzes * .10) + (exams * .20) + (intex * .10));
    //if statements to select letter grade
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
    //grade output
    displayGrade = grade + "% " + letterGrade;
    //alert("test alert");
    alert(displayGrade);
    //send variable value to html to be displayed
    //$("#displayGrade").innerHTML = displayGrade;
    
});


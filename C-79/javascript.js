student_names = [];

function submit() {
    var name1 = document.getElementById("name_1").value;
    var name2 = document.getElementById("name_2").value;
    var name3 = document.getElementById("name_3").value;
    var name4 = document.getElementById("name_4").value;

    student_names.push(name1);
    student_names.push(name2);
    student_names.push(name3);
    student_names.push(name4);

    document.getElementById("display_name").innerHTML = student_names;
    document.getElementById("button_submit").style.display = "none";
    document.getElementById("button_sort").style.display = "inline-block";
}

function sorting() {
    student_names.sort();
    document.getElementById("display_name").innerHTML = student_names;
    document.getElementById("button_submit").style.display = "inline-block";
    document.getElementById("button_sort").style.display = "none";
}
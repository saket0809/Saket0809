

function calculate() { 

    let input = document.getElementById("marks").value; 

    let arr = input.split(","); // convert to array 

    let sum = 0; 

    for (let i = 0; i < arr.length; i++) { 

        sum += parseFloat(arr[i]); 

    } 

    let avg = sum / arr.length; 

    let grade; 

 

    if (avg < 60) grade = "F"; 

    else if (avg < 70) grade = "D"; 

    else if (avg < 80) grade = "C"; 

    else if (avg < 90) grade = "B"; 

    else grade = "A"; 

 

    let input = document.getElementById("marks").value; 

    let arr = input.split(","); // convert to array 

    let sum = 0; 

    for (let i = 0; i < arr.length; i++) { 

        sum += parseFloat(arr[i]); 

    } 

    let avg = sum / arr.length; 

    let grade; 

 

    if (avg < 60) grade = "F"; 

    else if (avg < 70) grade = "D"; 

    else if (avg < 80) grade = "C"; 

    else if (avg < 90) grade = "B"; 

    else grade = "A"; 

 

    document.getElementById("result").innerHTML = 

        "Average: " + avg.toFixed(2) + "<br>Grade: " + grade; 

} 


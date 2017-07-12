/**
 * Created by peter joseph on 7/11/2017.
 */
/************calculate function to calculate employee salary*********/

function calculate(){
    var sal = parseInt(document.getElementById("sal").value);
    var wh = parseInt(document.getElementById("hours").value);

    /*************conditionchecking**************/

    if(sal==""|| wh==""){

        alert("Input should not be empty");
    }

    else if(sal >=15000 && wh >=10){

        var empHike = sal+(sal * 0.10);

        document.getElementById('empSal').innerHTML="Employee salary is :" + " " + "Rs" + " " + empHike;

    }

    else{

        var empHike = sal+(sal * 0.05);

        document.getElementById('empSal').innerHTML="Employee salary is :" + " " + "Rs" + " " + empHike;
    }
}

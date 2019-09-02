// function mypowerbtn(){            
//     x=document.getElementById('1').disabled
//     function myon(){document.getElementById('1').disabled=true}
//     function myoff(){document.getElementById('1').disabled=false}
//     switch (x) {
//         case false: myon();
//         break 
//         case true: myoff();}


// }


function append(x) {
    var val = document.getElementById("screen").innerHTML
    switch (val) {
        case "0": document.getElementById("screen").innerHTML = x;
            break
        default:
            val += x
            document.getElementById("screen").innerHTML = val
    }

}



function theoclear(x) {
    document.getElementById("screen").innerHTML = document.getElementById("screen").innerHTML = x
}

function unappend() {
    var allAppended = document.getElementById("screen").innerHTML

    switch (allAppended.length) {
        case 1: document.getElementById("screen").innerHTML = 0;
            break
        default: var x = allAppended.length - 1
            var y = allAppended.slice(0, x)
            document.getElementById("screen").innerHTML = y

    }

}


function mypowerbtn() {
    y = document.getElementById('powerToggle').innerHTML
    function btnon() { document.getElementById('powerToggle').innerHTML = "ON" }
    function btnoff() { document.getElementById('powerToggle').innerHTML = "OFF" }

    switch (y) {
        case "OFF": btnon(), document.getElementById('screenbody').style.background = "#212322";
            break
        case "ON": btnoff(), document.getElementById('screenbody').style.background = "white";
    }

    var elements = document.getElementsByClassName("btnx");

    for (var i = 0; i < elements.length; i++) {
        x = elements[i].disabled
        function myon() { elements[i].disabled = true }
        function myoff() { elements[i].disabled = false }
        switch (x) {
            case false: myon(); theoclear("");
                break
            case true: myoff(); theoclear(0)
        }


    }
}

function myCalDefault() {
    btnoff()
    myoff()

}

function theoresult(){
var myresult=document.getElementById("screen").innerHTML


document.getElementById("screen").innerHTML = eval(myresult)
}


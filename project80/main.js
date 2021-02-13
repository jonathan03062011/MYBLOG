var  paragraph_1 = [];
var  paragraph_2 = [];

function getParagraph1() {
    for(var i = 1; i <= 6; i++)
    {
        if((document.getElementById("box"+i).value)!="")
        {
            paragraph_1.push(document.getElementById("box" + i).value);
            paragraph_1.join(". ");
            document.getElementById("showparagraph1").innerHTML = paragraph_1.join(". ");
        }
    }
    
}

function getParagraph2() {
    for(var k = 1; k <= 6; k++)
    {
        if((document.getElementById("para2_box"+k).value)!="")
        {
            paragraph_2.push(document.getElementById("para2_box" + k).value);
            paragraph_2.join(". ");
            document.getElementById("showparagraph2").innerHTML = paragraph_2.join(". ");
            
        }
    }
}
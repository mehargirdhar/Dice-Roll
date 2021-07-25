var name1 = prompt("Enter name of Player 1");
var name2 = prompt("Enter name of Player 2");

document.querySelector(".p1").textContent= name1;
document.querySelector(".p2").textContent= name2;


function dice_no(){
    var n1 = Math.random();
    n1=n1*6;
    n1= Math.floor(n1)+1;

    var n2 = Math.random();
    n2=n2*6;
    n2= Math.floor(n2)+1;

    document.querySelector(".img1").setAttribute("src", "dice-"+n1+".png");
    document.querySelector(".img2").setAttribute("src", "dice-"+n2+"b.png");

    if(n1>n2){
        document.querySelector(".res1").innerHTML = '<p class="rp1">Wins</p>';
        document.querySelector(".res2").innerHTML = '<p class="rp2">Lost</p>';
        document.querySelector(".first_player").style.backgroundColor="rgb(255, 147, 147)";
        document.querySelector(".second_player").style.backgroundColor="rgb(236, 234, 234)";
    }
    else if(n2>n1){
        document.querySelector(".res1").innerHTML = '<p class="rp1">Lost</p>';
        document.querySelector(".res2").innerHTML = '<p class="rp2">Wins</p>';
        document.querySelector(".first_player").style.backgroundColor="rgb(236, 234, 234)";
        document.querySelector(".second_player").style.backgroundColor="rgb(174, 174, 253)";
    }
    else{
        document.querySelector(".res1").innerHTML = '<p class="rp1">Draw</p>';
        document.querySelector(".res2").innerHTML = '<p class="rp2">Draw</p>';
        document.querySelector(".first_player").style.backgroundColor="rgb(236, 234, 234)";
        document.querySelector(".second_player").style.backgroundColor="rgb(236, 234, 234)";
    }
}

// made by cutiedark and Z-banona
console.log("connected");
var stGrid = 81;
var clicks=[];
var icounter , allClicks=0;
var dificulty_alowed = true;
for(var ii=0;ii<stGrid;ii++){
clicks.push(0);
// $( ".main_container" ).append( "<div  class='grid-item slika1'>1</div>" );
}


var slike=[NaN,NaN,NaN];
function Random_slike(){
for(var i=0;i<3;i++){
slike[i]=(Math.floor(Math.random() * 10)+1);
console.log(slike[i]);
for(var ii=0;ii<i;ii++){
if(slike[ii]===slike[i]){
console.log(slike+" ista sta");
i--;
break;
//slike[i]=(Math.floor(Math.random() * 10)+1);
}
}

console.log("Photo interval Set");
}
console.log(slike);
return slike;
}


function random_grid(){
  for(var ii=1;ii<=10;ii++){
    $(".grid-item").removeClass("slika"+ii);
  }
  for(var i=0;i<stGrid;i++){
  var Random_index = Math.floor(Math.random() * 3);
  //console.log(Random_index);
  clicks[i]=Random_index;
  switch (Random_index) {
    case 1:
        $(".grid-item:eq("+(i)+")").toggleClass("slika"+slike[0]+" slika"+slike[2], false)
          .toggleClass("slika"+slike[1], true); 
        break;
      case 2:
        $(".grid-item:eq("+(i)+")").toggleClass("slika"+slike[0]+" slika"+slike[1], false)
          .toggleClass("slika"+slike[2], true);
        break;
      default:
        $(".grid-item:eq("+(i)+")").toggleClass("slika"+slike[1]+" slika"+slike[2], false)
          .toggleClass("slika"+slike[0], true);
}}
// $(".grid-item").addClass("slika"+slike[0]);
}



Random_slike();
$(".grid-item").addClass("slika"+slike[0]);

random_grid();

// Click F(x);
var classRemuvalCounter= true;
$(document).on('click','div.main_container div.grid-item',function(){
  
    // if(classRemuvalCounter){
    //   for(var ii=1;ii<=10;ii++){
    //     $(".grid-item").removeClass("slika"+ii);
    //   }
    //   classRemuvalCounter=false;
    // }

  
    dificulty_alowed = false;
    allClicks++;
    var index = $(".grid-item").index(this); // Get the index of the clicked grid item
    clicks[index]++;
    var i=clicks[index]%3;
    console.log("clicked index"+ index+"\t"+ clicks[index]);
    //console.log(slike);    
    switch (i) {
      case 1:
        $(this).toggleClass("slika"+slike[0]+" slika"+slike[2], false)
          .toggleClass("slika"+slike[1], true);
          console.log("case 1");
        break;
      case 2:
        $(this).toggleClass("slika"+slike[0]+" slika"+slike[1], false)
          .toggleClass("slika"+slike[2], true);
          console.log("case 2");
        break;
      default:
        $(this).toggleClass("slika"+slike[1]+" slika"+slike[2], false)
          .toggleClass("slika"+slike[0], true);
          console.log("case 3");
    }

    $(".score").html("Score: "+allClicks);

})

var Grid_HTML = "<div  class='grid-item slika1'></div>";

$(document).on('click','nav.navbar :button',function(){
  if(dificulty_alowed){
  var getClass = this.className;
  const dificulty_clases = ["EASY","MEDIUM","HARD"];
  for (var classNum = 0; classNum < dificulty_clases.length; classNum++) {
    if(getClass===dificulty_clases[classNum]){
      icounter=classNum+1;
      stGrid=Math.pow(icounter*3,2);
      $( ".grid-item" ).remove();
      for(var ii=0;ii<stGrid;ii++){
        //clicks.push(0);
        $( ".main_container" ).append( Grid_HTML );
      }
      $(".main_container").css({
          "--dificulty":icounter*3
      })
      console.log(getClass +"+"+icounter);
      random_grid()
    }
  }
  classNum=0;
  
}
})

function deleteSlike(){
  for(var i=0;i<slike.length;i++){
    $(".grid-item").removeClass("slika"+slike[i]);
  }
}



$(document).on('click','.under_image_container .RESTART',function(){
  console.log("restarted");
  
  deleteSlike();
  Random_slike();
  $(".grid-item").addClass("slika"+slike[0]);
  random_grid();
  allClicks=0;
  classRemuvalCounter= true;
  dificulty_alowed = true;
  $(".score").html("Score: "+allClicks);
})

msg = "  ";
msg = "SPTŠ INFORMATIVNI DNEVI" + msg;position = 0;
function scrolltitle() {
document.title = msg.substring(position, msg.length) + msg.substring(0, position); position++;
if (position > msg.length) position = 0
window.setTimeout("scrolltitle()",250);
}
scrolltitle();



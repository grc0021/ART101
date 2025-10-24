let count = 0;
var colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click(function() {
   
   $("#needy-button").html("You clicked me " + count + " times");

   $("#needy-button").html("Clicks: " + count + " Color: " + colors[count] );

   $("body").css("background-color", colors[count])

   count = count + 1;

   if (count == 4) 
      {
         count = 0;
      }
});

let phrase = "hey";
console.log(phrase);

$("#cat").addClass("fluffy").fadeIn(500).text("Meow!");


let Colors = ["Red", "Orange", "Yellow", "Green"];
let Count = 0;
$("#needy-button").hover(function(){
   $("body").css("background-color", Colors[Count]);
   Count = (Count + 1);
   if (Count == 4){
      Count = 0;
   };
});
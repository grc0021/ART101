let count = 0;
let colors = ["Orchid", "Coral", "HotPink", "Plum"];

$("#needy-button").click(function() {
   count = count + 1;
   $("#needy-button").html("You clicked me " + count + " times");

   $("#needy-button").html("Clicks: " + count + " Color: " + colors[count] );

   $("body").css("background-color", colors[count])
});

let phrase = "hey";
console.log(phrase);

$("#cat").addClass("fluffy").fadeIn(500).text("Meow!");
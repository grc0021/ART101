let count = 0;

$("#needy-button").click(function() {
   count = count + 1;
   $("#needy-button").html("You clicked me " + count + " times");
});

let phrase = "hey";
console.log(phrase);

$("#cat").addClass("fluffy").fadeIn(500).text("Meow!");
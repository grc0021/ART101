// declaring an array with name myCommutes
let myCommutes = ["metro bus", "UCSC taps bus", "ebike", "walk"];

// declaring an object with name myFavouriteCommute
let myFavouriteCommute = {
    type: "Bus",
    route: 18,
    print: "Mountain Lion",
    fastestBus: true,
    favSeats: ["FirstCol", "SingleSeat", "CloseToTheDoor"],
};

let megaSentence;

megaSentence = "<p>My two top commutes from the array are: " + myCommutes[0] + ", " + myCommutes[4] + "</p>";

megaSentence = megaSentence + "<p>My favourite commute possesses such characteristics: type - " + myFavouriteCommute.type + ", route number " + myFavouriteCommute.route + ", the best seats: " + myFavouriteCommute.favSeats[0] + "</p>";

$("#output").html(megaSentence);


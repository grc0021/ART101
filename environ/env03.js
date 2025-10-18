let SomeCommonlivingcreature = ["Lizards", "Slugcats", "Vulture", "Scavengers", "Noodleflies", "Squidcada", "Centipede", "Dropwig"];

let CanSurvivorSlugcatsEatThis = true;

let PlayableTypesOfSlugcats = 10;

let SurvivorSlugcats = 
{
    specie: "Slugcats",
    ifspecialability: false,
    specialability: "None",
    cantheyeatmeat: false,
    availableweapon: ["Rocks", "Spears"]
};

let IntroOfSurvivors;

IntroOfSurvivors = "<p>Introduction of Survivor Slugcats:</p>";

IntroOfSurvivors = IntroOfSurvivors + "<p>Specie: " + SurvivorSlugcats.specie + "</p>";

IntroOfSurvivors = IntroOfSurvivors + "<p>Weapons they can use: " + SurvivorSlugcats.availableweapon[0] + "</p>";

$("#IntroOfSurvivors").html(IntroOfSurvivors);

document.getElementById('IntroOfSurvivors').style.color = 'white';

let SurvivorSleepScreenLayerOriginalHeight = 20;
$("#ClickToZoomIn").click(function()
{
    SurvivorSleepScreenLayerOriginalHeight = SurvivorSleepScreenLayerOriginalHeight + 10;

    $("#SurvivorSleepScreenLayer").css("height", SurvivorSleepScreenLayerOriginalHeight)

});


let SurvivorSleepScreenLayerOriginalHeight2 = 20;
$("#ClickToZoomIn2").click(function()
{
    SurvivorSleepScreenLayerOriginalHeight2 = SurvivorSleepScreenLayerOriginalHeight2 + 10;

    $("#SurvivorSleepScreenLayer2").css("height", SurvivorSleepScreenLayerOriginalHeight2)

});
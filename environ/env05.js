let SomeCommonlivingcreature = ["Lizards", "Slugcats", "Vulture", "Scavengers", "Noodleflies", "Squidcada", "Centipede", "Dropwig"];

let CanSurvivorSlugcatsEatThis = true;

let PlayableTypesOfSlugcats = 10;

//SURVIVORS//
let SurvivorSlugcats = {
    specie: "Slugcats",
    ifspecialability: false,
    specialability: ["None"],
    cantheyeatmeat: false,
    availableweapon: ["Rocks", "Spears", "Explosive Spears"]
};

//let IntroOfSurvivors;//
IntroOfSurvivors = "<p>Introduction of <strong>Survivor</strong> Slugcats:</p>";
IntroOfSurvivors = IntroOfSurvivors + "<p>Specie: <em>" + SurvivorSlugcats.specie + "</em></p>";
IntroOfSurvivors = IntroOfSurvivors + "<p>Special things or abilities: <em>" + SurvivorSlugcats.specialability[0] + "</em></p>";
IntroOfSurvivors = IntroOfSurvivors + "<p>Weapons they can use: <em>" + SurvivorSlugcats.availableweapon[0];
IntroOfSurvivors = IntroOfSurvivors + ", " + SurvivorSlugcats.availableweapon[1];
IntroOfSurvivors = IntroOfSurvivors + ", " + SurvivorSlugcats.availableweapon[2] + "</em></p>";

//$("#IntroOfSurvivors").html(IntroOfSurvivors);

//document.getElementById('IntroOfSurvivors').style.color = 'white';
//document.getElementById('IntroOfSurvivors').style.backgroundColor = 'black';



//SURVIVOR PICS//
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




//HUNTERS//
let HuntersSlugcats = {
    specie: "Slugcats",
    ifspecialability: true,
    specialability: ["6 food pips are required", "a Spear can be on their back"],
    cantheyeatmeat: true,
    availableweapon: ["Rocks", "Spears", "Explosive Spears"]
};

//let IntroOfhunters;//
IntroOfHunters = "<p>Introduction of <strong>Hunter</strong> Slugcats:</p>";
IntroOfHunters = IntroOfHunters + "<p>Specie: <em>" + HuntersSlugcats.specie + "</em></p>";
IntroOfHunters = IntroOfHunters + "<p>Special things or abilities: <em>" + HuntersSlugcats.specialability[0] + ", " + HuntersSlugcats.specialability[1] + "</em></p>";
IntroOfHunters = IntroOfHunters + "<p>Weapons they can use: <em>" + HuntersSlugcats.availableweapon[0];
IntroOfHunters = IntroOfHunters + ", " + HuntersSlugcats.availableweapon[1];
IntroOfHunters = IntroOfHunters + ", " + HuntersSlugcats.availableweapon[2] + "</em></p>";



//SAINT//
let SaintSlugcats = {
    specie: "Slugcats",
    ifspecialability: true,
    specialability: ["grapple and swing from walls and ceilings with their long tongue", "incapable of throwing Spears"],
    cantheyeatmeat: false,
    availableweapon: ["Rocks"]
};
//let IntroOfSaint;//
IntroOfSaint = "<p>Introduction of <strong>Saint</strong> Slugcats:</p>";
IntroOfSaint = IntroOfSaint + "<p>Specie: <em>" + SaintSlugcats.specie + "</em></p>";
IntroOfSaint = IntroOfSaint + "<p>Special things or abilities: <em>" + SaintSlugcats.specialability[0] + ", " + SaintSlugcats.specialability[1] + "</em></p>";
IntroOfSaint = IntroOfSaint + "<p>Weapons they can use: <em>" + SaintSlugcats.availableweapon[0] + "</em></p>";


let clickOfIntroCount = 0;

function changeIntro() {
    //Intro of Survior
    if (clickOfIntroCount == 0){
        $("#IntroOfSlugcats").html(IntroOfSurvivors);
        document.getElementById('IntroOfSlugcats').style.color = 'white';
        document.getElementById('IntroOfSlugcats').style.backgroundColor = 'black';

        clickOfIntroCount = clickOfIntroCount + 1;
    }

    //Intro of Hunter
    else if (clickOfIntroCount == 1){
        $("#IntroOfSlugcats").html(IntroOfHunters);
        document.getElementById('IntroOfSlugcats').style.color = 'red';
        document.getElementById('IntroOfSlugcats').style.backgroundColor = 'black';

        clickOfIntroCount = clickOfIntroCount + 1;
    }

    //Intro of Saint
    else {
        $("#IntroOfSlugcats").html(IntroOfSaint);
        document.getElementById('IntroOfSlugcats').style.color = 'yellowgreen';
        document.getElementById('IntroOfSlugcats').style.backgroundColor = 'black';

        clickOfIntroCount = 0;
    }
}

$("#changeIntro-button").click(function () {
    changeIntro();
});


$(function ShowTheVulture(){    
    $("#Vulture_arrive").hover(
        function(){

            const $changeText = $(".WhatsComing").first();

            if ($changeText.data("origText") == undefined) {
                $changeText.data("origText", $changeText.text());
            }

            $changeText.text("It's a VULTURE!");

            if (!$(this).prev().hasClass("TempVulture")){
                
                $('<img class="TempVulture" src="Vulture_Stall.png" alt="hover image">')
                .css({ 
                    display: "block",
                    maxWidth: "100%",
                    margin: "0 auto 10px"
                })
                
                .insertBefore(this);
            };
        },
            
        function () {
            const $changeText = $(".WhatsComing").first();
            const orig = $changeText.data("origText");
            if (orig !== undefined) $changeText.text(orig);

            $(this).siblings(".TempVulture").remove();
        }
    );
});
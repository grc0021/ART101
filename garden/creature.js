```
// memorize all creatures in array

let allCreatures = [];

// main add click handler
// create creature object based on form inputs
// safety check-ups
// prepare an html for a single creature

// print single creature on a page
// add the creature to the memory
// reset the from

function getCreatureFromForm() {

    const freshCreature = {
        name: $("#crName").val(),
        color: $("#crColor").val(),
        eyesNum: $("#crEyesNum").val()
    };

    return freshCreature;

};

// prepare HTML for a single creature (does NOT add to the page)
function renderCreature(creature) {
    let crEyesHTML = "";

    for (let i = 0; i < creature.eyesNum; i++) {
        crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
    }

    const html = `
///<div class="creature">
///  <div class="creature-body" style="background: ${creature.color}">
///${crEyesHTML}
///  </div>
///  <div class="creature-info">❤️${creature.name}</div>
///</div>
`;
    return html;
}


// append one creature to the DOM using its HTML
function addCreatureToDOM(creature) {
    const html = renderCreature(creature);
    $("#creature-list").append(html);
}

// check if creature data is valid
function isCreatureValid(creature) {
    if (creature.name === "") return false;
    if (creature.name.length > 12) return false;
    if (creature.eyesNum == "" || creature.eyesNum > 5) return false;
    return true;
}

// clear all form fields
function clearForm() {
    $("#crName").val("");
    $("#crColor").val("#ee7dea");  // or keep previous if you prefer
    $("#crEyesNum").val(1);
}


// render all creatures in random order (uses the creatures array)
function renderAllCreaturesRandom() {
  $("#creature-list").empty();

  const shuffled = allCreatures.slice().sort(() => Math.random() - 0.5);

  shuffled.forEach(function (c, i) {
    const $creature = $(renderCreature(c)).hide(); 
    $("#creature-list").append($creature);
    $creature.delay(i * 120).fadeIn(300);  
  });
}

$("#add-creature").click(
    function () {

        // create creature object based on form inputs
        const newCreature = getCreatureFromForm();

        // do checks, exit function if something is wrong
        if (isCreatureValid(newCreature) == false) {
            return;
        }

        allCreatures.push(newCreature);   // remember it
        addCreatureToDOM(newCreature);    // show it
        clearForm();

    });

$("#shuffle-creatures").click(
    function () {
        renderAllCreaturesRandom();

    });


let newCreature;

// choose the source for a creature
if ($("#crRandom").is(':checked')) { newCreature = randomizeCreature(); }
else { newCreature = getCreatureFromForm(); }

// random creature
async function randomizeCreature() {

   const nameRandom = await getRandomName();
   const colorRandom = "grey";
   const eyesRandom = Math.floor(Math.random() * 5) + 1;

   const randomCreature = {
       name: nameRandom,
       color: colorRandom,
       eyesNum: eyesRandom
   };

   return randomCreature;
}

async function getRandomName() {

   const response = await fetch(
"https://api.gofakeit.com/funcs/petname", {method: "GET",});

   const nameRandom = await response.text();
   console.log("Got name:", nameRandom);
   return nameRandom;
}


```
// memorize all creatures in array
let allCreatures = [];

// random name api
async function getRandomName() {

   const response = await fetch(
"https://api.gofakeit.com/funcs/petname", 
{method: "GET",});

   const nameRandom = await response.text();
   console.log("Got name:", nameRandom);
   return nameRandom;
}


// random creature
async function randomizeCreature() {

   const eyesRandom = Math.floor(Math.random() * 5) + 1;
   const nameRandom = await getRandomName();
   const colorRandom = "grey";

   const randomCreature = {
       name: nameRandom,
       color: colorRandom,
       eyesNum: eyesRandom
   };

   return randomCreature;
}

// grabs data from the form
function getCreatureFromForm() {
    const freshCreature = {
        name: $("#crName").val(),
        color: $("#crColor").val(),
        eyesNum: $("#crEyesNum").val()
    };

    return freshCreature;
};

// prepare HTML for a single creature (does NOT add to the page)
function renderCreature(creature) {
  let crEyesHTML = "";

  for (let i = 0; i < creature.eyesNum; i++) {
    crEyesHTML = crEyesHTML + "<div class='eye'>.</div>";
  }

  const html=`
<div class="creature">
  <div class="creature-body" style="background: ${creature.color}">
${crEyesHTML}
  </div>
  <div class="creature-info">❤️${creature.name}</div>
</div>
`;
  return html;
}


// append one creature to the DOM using its HTML
function addCreatureToDOM(creature) {
  html = renderCreature(creature);
  $("#creature-list").append(html);

}

// check if creature data is valid
function isCreatureValid(creature) {
  if (creature.name === "") return false;
  if (creature.name.length > 12) return false;
  if (creature.eyesNum=="" || creature.eyesNum > 5) return false;
  return true;  
}

// clear all form fields
function clearForm() {
  $("#crName").val("");
  $("#crColor").val("#ee7dea");  // or keep previous if you prefer
  $("#crEyesNum").val(1);
}



// BUTTON HANDLERS

$("#add-creature").click(
    async function () {

 
    let newCreature;

   // choose the source for a creature
    if( $("#crRandom").is(':checked') ) 
    { newCreature= await randomizeCreature();}
    else 
    { newCreature= getCreatureFromForm(); }

    // do checks, exit function if something is wrong
   if ( isCreatureValid(newCreature)==false) {
    return;
   }
   
   allCreatures.push(newCreature);   // remember it
   addCreatureToDOM(newCreature);    // show it
   clearForm();

    });



//wanderAllCreatures(); // wander them
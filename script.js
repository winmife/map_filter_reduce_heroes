
// Genau das Gleiche wie die zweite Funktion 

async function loadHeroes() {
    const response = await fetch("http://localhost:3000/heroList");
    return await response.json();
}

function loadHeroesThen() {
    return fetch("http://localhost:3000/heroList")
        .then(response => response.json());
}

// die Namen aller [guten/bösen] Heroes:
async function getHeroNames(alignment) {
    const heroList = await loadHeroes();
    const heroNames = heroList.filter(hero => hero.biography.alignment === alignment).map(hero => hero.name);
    console.log(heroNames);
}
getHeroNames("good");

function getHeroNamesThen(alignment) {
    const heroes = [];
    loadHeroes().then(function (heroList) {
        for (let i = 0; i < heroList.length; i++) {
            if (heroList[i].biography.alignment === alignment) {
                heroes.push(heroList[i].name);
            }
        }
    }).then(function () {
        console.log(heroes);
    }
    );
}
getHeroNamesThen("good");

// 1. die Anzahl der [guten/bösen] Heroes:

function getGoodBadHeroes(alignment){
    let sum = 0;
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if (heroList[i].biography.alignment === alignment){
            sum ++;
        }
    }
    }).then(function(){
        console.log(sum);
    })
}
getGoodBadHeroes("good");


// 2. die durchschnittlichen Punkte (alle Disziplinen) der [guten/bösen] Heroes:

function averagePoints(alignment){
    let sum = 0;
    let average = 0;
    let amount = 0;
    
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if (heroList[i].biography.alignment === alignment){
            sum++;
            amount += heroList[i].powerstats.intelligence;
            amount += heroList[i].powerstats.strength;
            amount += heroList[i].powerstats.speed;
            amount += heroList[i].powerstats.durability;
            amount += heroList[i].powerstats.power;
            amount += heroList[i].powerstats.combat;
        
        }
average = amount / sum;

    }
    }).then(function(){
        console.log(average);
    })
}
averagePoints("good");



// 3. die Anzahl der [männlichen/weiblichen] Heroes:



function getNumberGenderHeroes(gender){
    let sum = 0;
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if (heroList[i].appearance.gender === gender){
            sum ++;
        }
    }
    }).then(function(){
        console.log(sum);
    })
}
getNumberGenderHeroes("Male");

// 4. die durchschnittliche Intelligenz aller [männlichen/weiblichen] Heroes - sind die Daten sexistisch?


function getAverageIntelligence(gender){
    let sum = 0;
    let amount = 0;
    let average = 0;
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if (heroList[i].appearance.gender === gender){
            sum++;
            amount += heroList[i].powerstats.intelligence;
        }
        average = amount / sum;

    }
    }).then(function(){
        console.log(average);
    })
}
getAverageIntelligence("Male");



// 5. alle Heroes mit anderem Gender als "Male" oder "Female" (Objekte mit Name + Gender):


function getDiverseHeroes(){
    let sum = 0;
    loadHeroes().then(function(heroList){
    for( let i = 0; i < heroList.length; i++){
        if (heroList[i].appearance.gender !== "Male" && heroList[i].appearance.gender !== "Female") {
             sum ++;
        }
    }
    }).then(function(){
        console.log(sum);
    })
}
getDiverseHeroes();







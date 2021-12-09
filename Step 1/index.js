const prompt = require('prompt-sync')();
const { Observable, Subject } = require('rxjs');

let autoPremium = 500;
let homePremium = 1000;
let premium = autoPremium + homePremium;

async function render() {
    let _ = prompt();
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    console.log(`Auto Premium: ${autoPremium}`);
    console.log(`Home Premium: ${homePremium}`);
    console.log(`The premium is ${premium}`);
}

function callAutoRating() {
    autoPremium += 200;

}

function callHomeRating() {
    homePremium += 150;

}

render();
callAutoRating();
render();
callHomeRating();
render();


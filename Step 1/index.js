const prompt = require('prompt-sync')();
const { Observable, Subject } = require('rxjs');

let autoPremium = 500;
let homePremium = 1000;
let multiproductDiscount = 0.05 * homePremium + 0.10 * autoPremium;
let premium = autoPremium + homePremium - multiproductDiscount;

async function render() {
    let _ = prompt();
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    console.log(`Auto Premium: ${autoPremium}`);
    console.log(`Home Premium: ${homePremium}`);
    console.log(`Multiproduct Discount: ${multiproductDiscount}`);
    console.log(`The premium is ${premium}`);
}

function callAutoRating() {
    autoPremium += 200;
    multiproductDiscount =  0.05 * homePremium + 0.10 * autoPremium;
    premium = autoPremium + homePremium - multiproductDiscount;

}

function callHomeRating() {
    homePremium += 150;
    multiproductDiscount =  0.05 * homePremium + 0.10 * autoPremium;
    premium = autoPremium + homePremium - multiproductDiscount;
}

render();
callAutoRating();
render();
callHomeRating();
render();


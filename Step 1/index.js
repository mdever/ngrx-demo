const prompt = require('prompt-sync')();
const { Observable, Subject, of, BehaviorSubject, combineLatest } = require('rxjs');
const { map, withLatestFrom } = require('rxjs/operators');

let autoPremium$ = new BehaviorSubject(500);
let homePremium$ = new BehaviorSubject(1000);
let multiproductDiscount$ = combineLatest([autoPremium$, homePremium$]).pipe(
    map(([autoPremium, homePremium]) => {
        return autoPremium * 0.10 + homePremium * 0.05;
    })
);
let premium$ = combineLatest([autoPremium$, homePremium$]).pipe(
    withLatestFrom(multiproductDiscount$),
    map(([autoPremium, homePremium, multiproductDiscount]) => {
        return autoPremium + homePremium - multiproductDiscount;
    })
);

combineLatest([autoPremium$, homePremium$, multiproductDiscount$, premium$])
    .subscribe(([autoPremium, homePremium, multiproductDiscount, premium]) => {
        render(autoPremium, homePremium, multiproductDiscount, premium);
    });

async function render(autoPremium, homePremium, multiproductDiscount, premium) {
    let _ = prompt();
    console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n");
    console.log(`Auto Premium: ${autoPremium}`);
    console.log(`Home Premium: ${homePremium}`);
    console.log(`Multiproduct Discount: ${multiproductDiscount}`);
    console.log(`The premium is ${premium}`);
}

function callAutoRating() {
    autoPremium$.next(700);

}

function callHomeRating() {
    homePremium$.next(1150);
}

callAutoRating();
callHomeRating();


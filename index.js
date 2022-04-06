const text = "JS  TEXT  ANIMATION";

const letters = text.split('');

const even = letters.filter((element, index) => {
    return (index % 2 === 0);
});

const odd = letters.filter((element, index) => {
    return (index % 2 === 1);
});


const evenSpan = even.map(element => `<span>${element}</span>`);
const oddSpan = odd.map(element => `<span class='over'>${element}</span>`);

const merged = evenSpan.map((element, index) => {
    if (oddSpan[index]) {
        return element + oddSpan[index]
    } else {
        return element
    }

}
)


const h1 = document.querySelector('h1');
h1.innerHTML = merged.join("");



const spans = gsap.utils.toArray('span');



gsap.to(h1, {
    "--width": "100%",
    duration: 3,
    ease: Back.easeOut.config(1.7)
});



spans.forEach((span, index) => {

    if (index % 2 === 0) {
        gsap.from(span, { autoAlpha: 0, yPercent: 150, ease: Power4.easeOut }).delay(index * .2)
    } else {
        gsap.from(span, { autoAlpha: 0, yPercent: -150, ease: Power4.easeOut }).delay(index * .2)
    }

});

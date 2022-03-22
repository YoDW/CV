const roule = document.querySelector('.profile-picture');
const menu = document.querySelector('nav');
const phrase = document.querySelector('.heading');

const tl = new TimelineMax();
tl
/* .fromTo(roule, 1, {rotation:0, opacity:0, x: "-150%"}, {rotation: 360, opacity:1, x: '0%', ease: Power2.easeInOut})
 */
.from(phrase, 1, {x:"300%", ease: Back.easeOut.config(1.2)})
/* .fromTo(menu, 1, {y: "-100%"}, {y: '0%', ease: Power2.easeInOut});
 */





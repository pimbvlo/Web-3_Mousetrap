var rotateBox = gsap.timeline({paused: true});
rotateBox.to('#moveable-box', { duration: 0.5, rotate: 180, scale: 2.5, borderRadius:"30% 70% 70% 30% / 30% 30% 70% 70%"})
.to('#moveable-box', { duration: 0.75, rotate: 0, scale: 1, borderRadius:"4%"}, "+=1");

var moveBox = gsap.timeline({paused: true});
moveBox.to('#moveable-box', { duration: 0.25, borderRadius: 32})
.to('#moveable-box', { duration: 0.75, rotate: 360, x: 500, ease: "expo.inOut"}, "+=0.25")
.to('#moveable-box', { duration: 1.5, rotate: -720, x: -500, ease: "expo.inOut"}, "+=0.25")
.to('#moveable-box', { duration: 0.75, rotate: 0, x: 0, ease: "expo.inOut"}, "+=0.25")
.to('#moveable-box', { duration: 0.25, borderRadius: "4%"});

var stretchBox = gsap.timeline({paused: true});
stretchBox.to('#moveable-box', { duration: 0.75, scaleX: 3, scaleY: 0.5, ease: "elastic.inOut", borderRadius: "0%"})
.to('#moveable-box', { duration: 0.75, scaleX: 1, scaleY:1, ease: "elastic.inOut", borderRadius: "4%", delay: 0.75});


var originalBox = gsap.timeline({paused: true});
originalBox.to('#moveable-box', { duration: 0.5, alpha:0, delay:1.5})
.to('#moveable-box', { borderRadius: "4%", x: 0, y: 0, scale:1})
.to('#moveable-box', { duration: 0.5, alpha: 1});


// single keys
Mousetrap.bind('q', function() {
    rotateBox.invalidate().restart();
    // originalBox.invalidate().restart();

    rotateBox.play();
    // originalBox.play();
});
Mousetrap.bind('w', function() {
    moveBox.invalidate().restart();
    // originalBox.invalidate().restart();

    moveBox.play();
    // originalBox.play();
});

Mousetrap.bind('command+k', function(e) {
    stretchBox.invalidate().restart();

    stretchBox.play();
    return false;
});

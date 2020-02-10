// @codekit-prepend "mousetrap.js";

gsap.set('#moveable-box', {transformOrigin: "50% 50%"});

$(document).ready(function() {
    gsap.registerPlugin(EasePack);

    console.log("ready!");
});

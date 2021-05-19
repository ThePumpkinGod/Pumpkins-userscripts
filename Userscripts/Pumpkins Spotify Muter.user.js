// ==UserScript==
// @name         Pumpkins Spotify Muter
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Automatically mute spotify when an ad comes on and play a song insterd
// @author       ThePumpkinGod
// @match        https://open.spotify.com/*
// @updateURL   https://github.com/sbh1311/Pumpkins-userscripts/raw/main/Userscripts/Pumpkins%20Spotify%20Muter.user.js
// @downloadURL https://github.com/sbh1311/Pumpkins-userscripts/raw/main/Userscripts/Pumpkins%20Spotify%20Muter.user.js
// ==/UserScript==

console.log("started");
(function() {
    'use strict';
    // gets the song eeeeaaaoo and set the volume
    var audio = new Audio('https://cdn.glitch.com/8302b443-7a87-4357-9e4f-9a5e26be2093%2Fbensound-theelevatorbossanova.mp3?v=1603202989299');
    audio.volume = 0.1;

    // the types of ads i know of
    var spotifyUtils = {
        get adPlaying() {
            return document.title.startsWith("Advertisement") || (document.title.startsWith("Spotify") && document.title.endsWith("Spotify"))
        },
        get muteElm () {
            return document.querySelector(`button[class="volume-bar__icon-button control-button"]`)
        },
        get muted () {
            return this.muteElm.getAttribute("aria-label") === "Unmute"
        },
        mute () {
            if (!this.muted) this.muteElm.click()
        },
        unmute () {
            if (this.muted) this.muteElm.click()
        }
    }

    // waits for and ad or and ad that ended
    new MutationObserver(function () {
        if (spotifyUtils.adPlaying && !window.location.href.includes("show")){
            spotifyUtils.mute()
                audio.play();
        }else{
            spotifyUtils.unmute()
            audio.pause();
            audio.currentTime = 0;
        }
    }).observe(document.querySelector("title"), { childList: true })

    window.spotifyUtils = spotifyUtils
})();

/*
setTimeout(function() {
console.log("works?")
var button_upgrade = document.querySelectorAll(`button`);
$(button_upgrade[3]).text("Premium!");
}, 5000);*/
  

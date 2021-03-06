// ==UserScript==
// @name        Pumpkin Better Twitch
// @version     0.4
// @description some small changes I like
// @match       https://www.twitch.tv/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @updateURL   https://github.com/sbh1311/Pumpkins-userscripts/raw/main/Userscripts/Pumpkin%20Better%20Twitch.user.js
// @downloadURL https://github.com/sbh1311/Pumpkins-userscripts/raw/main/Userscripts/Pumpkin%20Better%20Twitch.user.js
// ==/UserScript==
/* globals jQuery, $ */

var del = document.querySelectorAll('div[class="tw-flex tw-flex-row tw-full-height tw-justify-content-between"] > div[class="tw-flex tw-flex-column tw-full-height tw-pd-x-1 tw-xl-pd-x-2"]') // gets the list of all the buttons in the hotbar

// clear the hotbar
$(del[2]).remove();//music
$(del[3]).remove();//esport
$('a[class="tw-link"]').remove(); // icon

var i = 0;
var elemtext;var elemline;var elemafter;var name;var link;

// adds Art and Following Channels List tabs
while (i <= 2) {
 name = ["WilburSoot","Art",`FCL"`];
 link = ["https://www.twitch.tv/wilbursoot","https://www.twitch.tv/directory/game/Art","https://www.twitch.tv/directory/following/channels"];

elemtext = `
<div class="tw-flex tw-flex-column tw-full-height tw-pd-x-1 tw-xl-pd-x-2">
    <div class="tw-align-self-center tw-flex tw-full-height">
        <a class="navigation-link tw-interactive" data-a-target="browse-link" data-test-selector="top-nav__browse-link" aria-label="Browse" href="${link[i]}">
            <div>
                <div class="tw-flex-column tw-hide tw-sm-flex">
                    <div class="tw-hide tw-xl-flex">
                        <p class="tw-font-size-4 tw-line-height-heading tw-semibold tw-title">${name[i]}</p>
                    </div>
                    <div class="tw-flex tw-xl-hide">
                        <p class="tw-font-size-5 tw-line-height-heading tw-semibold tw-title tw-title--inherit">${name[i]}</p>
                    </div>
                </div>
                <div aria-label="Browse" class="tw-flex tw-pd-x-1 tw-sm-hide">
                    <div class="tw-inline-flex tw-relative tw-tooltip-wrapper" aria-describedby="e5ed1fdd8371d93862b6813d69052621">
                        <figure class="ScFigure-sc-1j5mt50-0 laJGEQ tw-svg">
                            <svg type="color-fill-current" width="20px" height="20px" version="1.1" viewBox="0 0 20 20" x="0px" y="0px" class="ScSvg-sc-1j5mt50-1 hAChQG">
                                <g>
                                    <path d="M5 2a2 2 0 00-2 2v8a2 2 0 002 2V4h8a2 2 0 00-2-2H5z"></path>
                                    <path fill-rule="evenodd" d="M7 8a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2V8zm2 0h6v8H9V8z" clip-rule="evenodd"></path>
                                </g>
                            </svg>
                        </figure>
                        <div class="tw-tooltip tw-tooltip--align-center tw-tooltip--down" data-a-target="tw-tooltip-label" role="tooltip" id="e5ed1fdd8371d93862b6813d69052621">${name[i]}</div>
                    </div>
                </div>
            </div>
        </a>
    </div>
    <div class="navigation-link__indicator-container"></div>
</div>
`
 $(elemtext).insertBefore('div[class="tw-align-items-center tw-flex tw-full-height tw-pd-x-1"]');

i++;
}

// adds the icon but this time redricts you to the twitch website
var elemicon = `
<a data-a-target="home-link" aria-label="Twitch Home" class="tw-link" href="https://www.twitch.tv/">
    <div class="ScLogoContainer-cdc1ai-0 fmatTN tw-animated-glitch-logo">
        <figure class="ScFigure-cdc1ai-1 fJrzHp">
            <svg overflow="visible" width="40px" height="40px" version="1.1" viewBox="0 0 40 40" x="0px" y="0px" class="ScSvg-cdc1ai-2 fMOUeO">
                <g>
                    <polygon points="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8" class="ScBody-cdc1ai-3 iMXlFV">
                        <animate dur="150ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="points" from="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8" to="16 5 8 13 8 31 14 31 14 36 19 31 23 31 35 19 35 5"></animate>
                        <animate dur="250ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="points" from="16 5 8 13 8 31 14 31 14 36 19 31 23 31 35 19 35 5" to="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"></animate>
                        <animate dur="50ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="points" to="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8" from="16 5 8 13 8 31 14 31 14 36 19 31 23 31 35 19 35 5"></animate>
                        <animate dur="75ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="points" to="16 5 8 13 8 31 14 31 14 36 19 31 23 31 35 19 35 5" from="13 8 8 13 8 31 14 31 14 36 19 31 23 31 32 22 32 8"></animate>
                    </polygon>
                    <polygon points="26 25 30 21 30 10 14 10 14 25 18 25 18 29 22 25" class="ScFace-cdc1ai-4 eKFQBH">
                        <animateTransform dur="150ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate" from="0 0" to="3 -3"></animateTransform>
                        <animateTransform dur="250ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate" from="3 -3" to="0 0"></animateTransform>
                        <animateTransform dur="50ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate" from="3 -3" to="0 0"></animateTransform>
                        <animateTransform dur="75ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate" from="0 0" to="3 -3"></animateTransform>
                    </polygon>
                    <g class="ScEyes-cdc1ai-5 itWjTv">
                        <path d="M20,14 L22,14 L22,20 L20,20 L20,14 Z M27,14 L27,20 L25,20 L25,14 L27,14 Z" class="ScBody-cdc1ai-3 iMXlFV">
                            <animateTransform dur="150ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate" from="0 0" to="3 -3"></animateTransform>
                            <animateTransform dur="250ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate" from="3 -3" to="0 0"></animateTransform>
                            <animateTransform dur="50ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate" from="3 -3" to="0 0"></animateTransform>
                            <animateTransform dur="75ms" begin="indefinite" fill="freeze" calcMode="spline" keyTimes="0; 1" keySplines="0.25 0.1 0.25 1" attributeName="transform" type="translate" from="0 0" to="3 -3"></animateTransform>
                        </path>
                    </g>
                </g>
            </svg>
        </figure>
    </div>
</a>
`;
var iconbefore = document.querySelectorAll('div[class="tw-flex tw-flex-row tw-full-height tw-justify-content-between"] > div[class="tw-flex tw-flex-column tw-full-height tw-pd-x-1 tw-xl-pd-x-2"]');
$(elemicon).insertBefore(iconbefore[0]);

// removes the featured content
function removeFeatured(){
$(document).ready(function() {
    if ($('div[class="front-page-carousel tw-pd-t-2 tw-pd-x-3"]').length > 0) {
    $('div[class="front-page-carousel tw-pd-t-2 tw-pd-x-3"]').remove();
    }
});
}
removeFeatured();
// auto claim points made by : https://greasyfork.org/en/users/310437
let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
let claiming = false;
if (MutationObserver) console.log('Auto claimer is enabled.');
let observer = new MutationObserver(e => {
    let bonus = document.querySelector('.claimable-bonus__icon');
    if (bonus && !claiming) {
        bonus.click();
        let date = new Date();
        claiming = true;
        setTimeout(() => {
            claiming = false;
        }, Math.random() * 1000 + 2000);
    }
});
observer.observe(document.body, {childList: true, subtree: true});

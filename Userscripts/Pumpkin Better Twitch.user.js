// ==UserScript==
// @name        Pumpkin Better Twitch
// @version     0.2
// @description some small changes I like
// @match       https://www.twitch.tv/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @updateURL   https://github.com/sbh1311/Pumpkins-userscripts/raw/main/Userscripts/Pumpkin%20Better%20Twitch.user.js
// @downloadURL https://github.com/sbh1311/Pumpkins-userscripts/raw/main/Userscripts/Pumpkin%20Better%20Twitch.user.js
// ==/UserScript==
/* globals jQuery, $ */

var i = 0;
while (i <= 1) {
 let name = ["Art","Following Channels List"];
 let link = ["https://www.twitch.tv/directory/game/Art","https://www.twitch.tv/directory/following/channels"];
 var elem = `
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
 $(elem).insertAfter('div[class="navigation-link__left-border tw-mg-t-1"]');
 i++;
}
var del = document.querySelectorAll('div[class="tw-flex tw-flex-row tw-full-height tw-justify-content-between"] > div[class="tw-flex tw-flex-column tw-full-height tw-pd-x-1 tw-xl-pd-x-2"]') // gets the list of all the buttons in the hotbar
$(del[4]).remove(); // remove number 5
$(del[5]).remove(); // remove number 6

// removes the featured content
$(document).ready(function() {
    if ($('div[class="front-page-carousel tw-pd-t-2 tw-pd-x-3"]').length > 0) {
    $('div[class="front-page-carousel tw-pd-t-2 tw-pd-x-3"]').remove();
    }
});


// ==UserScript==
// @name        Pumpkin's online courses club link collector
// @version     0.1
// @description mix of all the better pumpkin addons
// @include     https://online-courses.club/*
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require     https://cdn.jsdelivr.net/npm/clipboard@2.0.6/dist/clipboard.min.js
// ==/UserScript==
/* globals jQuery, $, ClipboardJS */

/*
use this button to easily copy all the links and to past them to
a download mannager like Jdownloader 2
*/

var AllA = document.querySelectorAll(`div[class="su-spoiler-content su-u-clearfix su-u-trim"] > p > a`)

new ClipboardJS('.btn');

var href = $(AllA).attr('href');
var len = AllA.length;
var i = 0;
var links = [];

while(i < len){
    links.push(`${AllA[i]}`);
    i = i+1;
}

$(`<br><center> <button class="btn" data-clipboard-text="${links}">Copy to clipboard</button> </center>`).insertAfter(`div[class="su-spoiler-content su-u-clearfix su-u-trim"]`);

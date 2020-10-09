// ==UserScript==
// @name         KAA hide ads click
// @author       ThePumpkinGod
// @match        https://*.kickassanime.rs/*
// @version      1
// @description  click on the hide add button
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==
/* globals jQuery, $ */

setTimeout(function() {
    if ($('a[class="nav-link"]').length > 0) {
        console.log("found it!")
        document.querySelector('a[class="nav-link"]').click()
    }
}, 1000)


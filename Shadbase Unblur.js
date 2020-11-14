// ==UserScript==
// @name         Shadbase Unblur
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Unblurs premium images on Shadbase
// @author       theslavicbear
// @match        https://shadbase.us/*
// @grant        none
// ==/UserScript==
(async function() {
    'use strict';

    while(true){
        await new Promise(r => setTimeout(r, 500));
        var list = document.getElementsByClassName('premium_content');
        for (let i = 0; i<list.length;)
        {
          list[i].classList.remove('premium_content');
        }

    }

})();

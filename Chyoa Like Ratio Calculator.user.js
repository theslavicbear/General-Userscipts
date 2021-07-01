// ==UserScript==
// @name         Chyoa Like Ratio Calculator
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Shows likes to views ratio on story map page.
// @author       theslavicbear
// @match        https://chyoa.com/story/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var styles = '.likes {width: auto}';


    var css = document.createElement('style');
            css.type = 'text/css';

            if (css.styleSheet)
                css.styleSheet.cssText = styles;
            else
                css.appendChild(document.createTextNode(styles));

            /* Append style to the head element */

    //var icon = document.createElement('i');

    var Chapters = document.getElementsByClassName("story-map-chapter");
    for (var i=0; i < Chapters.length; i++){

        //console.log("Testing: " + String(i));

        var viewsStr = Chapters[i].children[1].children[0].innerText;
        var likesStr = Chapters[i].children[1].children[1].innerText;


    var views= Number(viewsStr.replace(/\,/g,''));


    var likes= Number(likesStr.replace(/\,/g,''));

        //var ratio = likes / views;

        var ratio = likes/views;
        ratio=ratio*100;
        ratio = ratio.toFixed(3);
        //ratio = ratio.toPrecision(5);

        //Chapters[i].children[1].children[1].innerText += " @ " + ratio + "%";
        Chapters[i].children[1].children[1].childNodes[2].nodeValue = " "+likes+" @ " + ratio + "%";
        Chapters[i].children[1].children[1].classList.remove("likes");

        Chapters[i].children[1].style.width="330px";
        Chapters[i].children[0].children[1].style.right="330px";


    }
    
})();
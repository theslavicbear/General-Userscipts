// ==UserScript==
// @name         Imgur Open All Images in New Tab
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a function/button to open all images in an Imgur gallery in a new tab
// @author       theslavicbear
// @match        https://imgur.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {




    var button = document.createElement("a");
    button.setAttribute("class", "Buttonlink Button");
    button.setAttribute("href", "#");
    button.appendChild(document.createTextNode("Open all images in a new tag"));
    button.addEventListener( "click", function(){
        var images = document.getElementsByClassName('image-placeholder');
        for(var i = 0; i<images.length; i++){
            window.open(images[i].getAttribute('src'), '_blank')
        }

    });
    var insertElement = document.getElementsByClassName("NavbarContainer-left");
    insertElement[0].appendChild(button)

  }}
    })();

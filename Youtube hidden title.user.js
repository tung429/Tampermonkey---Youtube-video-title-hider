// ==UserScript==
// @name         Youtube Hidden Title
// @namespace    https://github.com/tung429/Tampermonkey---Youtube-video-title-hider
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  try to take over the world!
// @author       Simon Poon
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {
    //
    // loop every 0.2sec
    var looping = setInterval(myMethod, 500);

    //read localStorage and change title color
    function myMethod( )
    {

        var blackWhite = localStorage.getItem("blackWhite");

        if(blackWhite == 'black'){
            $('h1.title').css("color","#181818");
        }else if(blackWhite == 'white'){
            $('h1.title').css("color","#f9f9f9");
        }else{
            //default white
            $('h1.title').css("color","#f9f9f9");
        }

    }

    //
    setTimeout(killMyMethod, 3000);
    function killMyMethod()
    {

        clearInterval(looping);
    }

    //set localStorage
    setTimeout(function(){
        switchBtn();
        changeBtnColorText();

    }, 1500);
    //create btn and create localstorage
    function switchBtn(){

        var blackWhite = localStorage.getItem("blackWhite");
        if(blackWhite == 'black'){
            $('h1.title').append('<br><button id="hiddenBtn">Now Black</button>');
        }else if(blackWhite == 'white'){
            $('h1.title').append('<br><button id="hiddenBtn">Now White</button>');
        }else{
            //default white
            $('h1.title').append('<br><button id="hiddenBtn">Now White</button>');
            localStorage.setItem("blackWhite", "white");
        }

    }





    //change color and button text, update localStorage
    function changeBtnColorText(){

        $("#hiddenBtn").click(function(){
            var blackWhite = localStorage.getItem("blackWhite");

            if(blackWhite == 'black'){
                localStorage.setItem("blackWhite", "white");
                $('h1.title').css("color","#f9f9f9");
                $('#hiddenBtn').text('Now White');
            }else if(blackWhite == "white"){
                localStorage.setItem("blackWhite", "black");
                $('h1.title').css("color","#181818");
                $('#hiddenBtn').text('Now Black');
            }else{
                localStorage.setItem("blackWhite", "white");
                $('h1.title').css("color","#f9f9f9");
                $('#hiddenBtn').text('Now White');
            }
        });

    }




})();

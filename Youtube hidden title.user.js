// ==UserScript==
// @name         Youtube Hidden Title
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Simon Poon
// @match        https://www.youtube.com/*
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @grant        none
// @require https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

(function() {


    var looping = setInterval(myMethod, 500);

    function myMethod( )
    {

        var blackWhite = localStorage.getItem("blackWhite");
        if(blackWhite == 'black'){
            $('h1.title').css("color","#181818");
        }else if(blackWhite == 'white'){
            $('h1.title').css("color","#ffffff");
        }else{
            $('h1.title').css("color","#ffffff");
        }

    }

    setTimeout(killMyMethod, 3000);
    function killMyMethod()
    {
        clearInterval(looping);
    }

    var timeout2 = setTimeout(function(){
        var blackWhite = localStorage.getItem("blackWhite");
        if(blackWhite == 'black'){
            $('h1.title').append('<br><button id="hiddenBtn">Now Black</button>');
        }else if(blackWhite == 'white'){
            $('h1.title').append('<br><button id="hiddenBtn">Now White</button>');
        }else{
            $('h1.title').append('<br><button id="hiddenBtn">Now White</button>');
            localStorage.setItem("blackWhite", "white");
        }


    }, 500);

    setTimeout(function(){
        $("#hiddenBtn").click(function(){
            var blackWhite = localStorage.getItem("blackWhite");
            if(blackWhite == 'black'){
                localStorage.setItem("blackWhite", "white");
                $('h1.title').css("color","#ffffff");
                $('#hiddenBtn').text('Now White');
            }else if(blackWhite == "white"){
                localStorage.setItem("blackWhite", "black");
                $('h1.title').css("color","#181818");
                $('#hiddenBtn').text('Now Black');
            }


            //alert("yo:"+ $("#hiddenBtn").data('switch'));



        });
    }, 510);


})();
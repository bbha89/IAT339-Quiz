"use strict";

console.log("script is running");

// element select
let thumbnail = document.querySelector(".thumbnail");
let bigframe = document.querySelector("#image_box");

thumbnail.addEventListener("click",
    function() {
        console.log("button clicked");
        if (thumbnail.classList.contains("image_background")) {
            thumbnail.classList.remove("image_background");
            bigframe.classList.add("image_background");
        }
         else {
            thumbnail.classList.add("image_background");
            bigframe.classList.remove("image_background");
         }
    }

);
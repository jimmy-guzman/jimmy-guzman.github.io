!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([,function(e,t,n){},function(e,t,n){"use strict";var o,r,c=n(1);(o=c)&&o.__esModule;(r=document.createElement("link")).rel="stylesheet",r.href="https://fonts.googleapis.com/css?family=Lato|Oswald:400,700",document.querySelector("head").appendChild(r);var s=document.querySelector(".main-header"),i=document.querySelector(".nav");function d(){var e=window.innerHeight-i.offsetHeight;s.style.height=e+"px"}d(),document.addEventListener("click",function(e){e.target.classList.contains("nav__link")&&document.querySelector(e.target.dataset.href).scrollIntoView({behavior:"smooth",block:"start",inline:"start"})}),window.addEventListener("scroll",function(){var e=s.offsetHeight;window.scrollY>=e?(document.body.style.paddingTop=s.offsetHeight,document.body.classList.add("fixed-nav")):(document.body.style.paddingTop=0,document.body.classList.remove("fixed-nav"))}),window.addEventListener("scroll",function(){var e=document.querySelectorAll(".section"),t=document.querySelectorAll(".nav__link");e.forEach(function(e,n){window.innerHeight+window.pageYOffset>=document.body.offsetHeight?(t.forEach(function(e){return e.classList.remove("selected")}),t[t.length-1].classList.add("selected")):e.offsetTop-i.offsetHeight<=window.scrollY?(t.forEach(function(e){return e.classList.remove("selected")}),t[n].classList.add("selected")):0===window.scrollY&&t.forEach(function(e){return e.classList.remove("selected")})})}),window.addEventListener("resize",d)}]);
let headerList=document.querySelector(".header__list"),headerToggle=document.querySelector(".header__toggle-button-wrapper"),headerToggleButton=document.querySelector(".header__toggle-button"),contentLikeWrapper=document.querySelectorAll(".content__like-wrapper"),contentLikeIcon=document.querySelectorAll(".content__like-icon");headerList.classList.remove("header__list--nojs"),headerToggleButton.classList.remove("header__toggle-button--nojs"),headerToggle.addEventListener("click",(function(){headerList.classList.contains("header__list--closed")?(headerList.classList.remove("header__list--closed"),headerToggleButton.classList.remove("header__toggle-button--closed"),headerList.classList.add("header__list--opened"),headerToggleButton.classList.add("header__toggle-button--opened")):(headerList.classList.add("header__list--closed"),headerToggleButton.classList.add("header__toggle-button--closed"),headerList.classList.remove("header__list--opened"),headerToggleButton.classList.remove("header__toggle-button--opened"))}));for(let e of contentLikeIcon)e.addEventListener("click",(function(){e.classList.contains("content__like-icon--activated")?e.classList.remove("content__like-icon--activated"):e.classList.add("content__like-icon--activated")}));
import{sliderMain1}from"./module/sliderMain1.js";import{sliderMain2}from"./module/sliderMain2.js";import{sliderMain3}from"./module/sliderMain3.js";import{answerMain1}from"./module/answerMaein1.js";import{categoryMain1}from"./module/categoryMain1.js";import{documMain1}from"./module/documMain1.js";import{thumbnailMain}from"./module/thumbnailMain.js";import{sliderMain4}from"./module/sliderMain4.js";import{dropdownMenu}from"./module/dropdownMenu.js";import{catalogBtn}from"./module/catalogBtn.js";import{catalogSlider}from"./module/catalogSlider.js";import{reviewsSlider1}from"./module/reviewsSlider1.js";import{stageSlider}from"./module/stageSlider.js";import{testWebP}from"./module/testWebP.js";document.querySelectorAll(".section6-list").forEach(function(e){e.addEventListener("click",function(){this.classList.toggle("active")})}),testWebP(function(e){1==e?(document.querySelector("body").classList.add("webp"),console.log("выполнился webp")):document.querySelector("body").classList.add("no-webp")});let currentQuestion=0;const questions=document.querySelectorAll(".kwis-conteiner"),nextBtn=document.getElementById("kwis-button");export function kwis(e){questions.forEach((t,o)=>{t.style.display=o===e?"block":"none"}),nextBtn.textContent=e===questions.length-2?"Отпраить":"Далее",nextBtn.textContent=e===questions.length-1?"":"Далее"}nextBtn.addEventListener("click",()=>{currentQuestion<questions.length-1?kwis(++currentQuestion):console.log("Ваши ответы отправлены!")}),kwis(currentQuestion),answerMain1(),sliderMain1(),sliderMain2(),sliderMain3(),categoryMain1(),documMain1(),thumbnailMain(),sliderMain4(),dropdownMenu(),catalogBtn(),catalogSlider(),reviewsSlider1(),stageSlider();
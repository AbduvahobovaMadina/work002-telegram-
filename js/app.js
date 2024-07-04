import {DATA} from "../server/db.js"


const headerStatus = document.querySelector(".header__status")
const content = document.querySelector(".content")
const contentImage = document.querySelector(".content__image")
const form = document.querySelector(".form")
const input = document.querySelector("form input")

form.addEventListener("submit", (event)=>{
    event.preventDefault() //=>refreshni oldinin oladi
    let val = input.value
    if(val.trim() === "") return null //bo'sh string yoki spacelarni yubormaydi


    contentImage.style.display = "none"  //xabar yuborganda stiker yoki gif o'chib ketadi

    let date = new Date()
    let hour = date.getHours()
    let minute = date.getMinutes()

    let div = document.createElement("div") //xabar divini yaratadi
    div.className = "message my-message"
    div.innerHTML = `
    <p>${val}<p/>
    <span>${hour}:${minute}</span>
    `
    content.appendChild(div)   //HTML ga jo'natadi

    input.value = " " //input ichini tozlaydi
    partnerSendMessage() //biz yozganimizdan keyin yozishi uchun chaqririb qo'ydik
})




function partnerSendMessage(){

    setTimeout(()=>{
        let date = new Date()
        let hour = date.getHours()
        let minute = date.getMinutes()
        let index = Math.floor(Math.random() * DATA.length)
        let div = document.createElement("div") //xabar divini yaratadi
        div.className = "message "
        div.innerHTML = `
        <p>${DATA[index]}<p/>
        <span>${hour}:${minute}</span>
        `
        content.appendChild(div)   //HTML ga jo'natadi

    },2000)
}
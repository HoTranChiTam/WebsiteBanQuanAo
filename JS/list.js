

import { data } from "./data.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const chidren = data.chidren
const jacket = data.jacket
const male = data.male
const female = data.female
localStorage.setItem('ITEM_SHOP_N9', ['jacket', 0])

function scrollTop() {
  const scrollTop = document.getElementById("fixNav");

  if (this.scrollY >= 130) {
    scrollTop.classList.add("fixNav");
  } else {
    scrollTop.classList.remove("fixNav");
  }
}
window.addEventListener("scroll", scrollTop);
// hover item

// html san pham jacket
let listThoiTrangjackethtml = []
let hover = false
jacket.map((item, index) => {
  listThoiTrangjackethtml.push(
    `
      <a href="./item.html" class="card col-md-2 col-5 mt-3 mx-2" style="width: 18rem;"  onclick="setLocal(['jacket',${index}])" target="_blank">
              <img class="card-img-top card-img-1"
                src="${item.img[0]}"
                alt="Card image cap">
                <img class="card-img-top card-img-2"
                src="${item.img[1]}"
                alt="Card image cap">
              <div class="card-body">
                <p class="card-text title-sp">${item.name}<br> ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</p>
              </div>
            </a>
      `
  )
})
$('#thoiTrangjacket').innerHTML = listThoiTrangjackethtml.join('')

//html san pham nam

let listThoiTrangNamhtml = []
male.map((item, index) => {
  listThoiTrangNamhtml.push(
    `
      <a href="./item.html" class="card col-md-2 col-5 mt-3 mx-2" style="width: 18rem;" onclick="setLocal(['male',${index}])" target="_blank">
      <img class="card-img-top card-img-1"
      src="${item.img[0]}"
      alt="Card image cap">
      <img class="card-img-top card-img-2"
      src="${item.img[1]}"
      alt="Card image cap">
              <div class="card-body">
                <p class="card-text title-sp">${item.name}<br> ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</p>
              </div>
            </div>
      `
  )
})
$('#thoiTrangNam').innerHTML = listThoiTrangNamhtml.join('')


/* let listThoiTrangNuhtml = []
female.map((item, index) => {
  listThoiTrangNuhtml.push(
    `
      <a href="./item.html" class="card col-md-2 col-5 mt-3 mx-2" style="width: 18rem;"  onclick="setLocal(['female',${index}])" target="_blank">
      <img class="card-img-top card-img-1"
      src="${item.img[0]}"
      alt="Card image cap">
      <img class="card-img-top card-img-2"
      src="${item.img[1]}"
      alt="Card image cap">
              <div class="card-body">
                <p class="card-text title-sp">${item.name}<br> ${item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} VNĐ</p>
              </div>
            </div>
      `
  )
})
$('#thoiTrangNu').innerHTML = listThoiTrangNuhtml.join('')*/
var Usrdata = document.querySelector(".winner-list-container");

var userDetail = [
  {
    id: 1,
    name: "coca12345678",
    avatar: ".././images/userAva1.png",
    prize: 5888888,
    pool: "tài xỉu",
  },
  {
    id: 2,
    name: "coca12345678",
    avatar: ".././images/userAva1.png",
    prize: 5888888,
    pool: "tài xỉu",
  },
  {
    id: 3,
    name: "coca12345678",
    avatar: ".././images/userAva1.png",
    prize: 5888888,
    pool: "tài xỉu",
  },
  {
    id: 4,
    name: "coca12345678",
    avatar: ".././images/userAva1.png",
    prize: 5888888,
    pool: "tài xỉu",
  },
  {
    id: 5,
    name: "coca12345678",
    avatar: ".././images/userAva1.png",
    prize: 5888888,
    pool: "tài xỉu",
  },
  {
    id: 6,
    name: "coca12345678",
    avatar: ".././images/userAva1.png",
    prize: 5888888,
    pool: "tài xỉu",
  },
  {
    id: 7,
    name: "coca12345678",
    avatar: ".././images/userAva1.png",
    prize: 5888888,
    pool: "tài xỉu",
  },
  {
    id: 8,
    name: "coca12345678",
    avatar: ".././images/userAva1.png",
    prize: 5888888,
    pool: "tài xỉu",
  },
];

document.getElementById("winner-list").innerHTML = userDetail
  .map(
    (user) =>
      `<div class="winner-list__item">
    <img src=${user.avatar} alt="" />
    <div class="winner-list__item-text">
      <span>${user.name}</span>
      <div>${`Vừa thắng ${user.prize} tại ${users.pool}`}</div>
    </div>
    </div>`
  )
  .join("");

document.getElementById("winner-list").innerHTML = "testing"
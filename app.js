document.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    document.getElementByClassName("header").classList.add("on_scroll");
  } else {
    document.getElementByClassName("header").classList.remove("on_scroll");
  }
});

const users = [
  {
    id: 1,
    name: "Sara Smith",
    img: (src = "imag/download (1).jpeg"),
    text: "Nearly everywhere you look in this show, the male gaze is looking back, imbuing the female person with degrees of objectification. ",
  },

  {
    id: 2,
    name: "Tomas Johnson",
    img: (src = "imag/download.jpeg"),
    text: "Nearly everywhere you look in this show, the male gaze is looking back, imbuing the female person with degrees of objectification. ",
  },

  {
    id: 3,
    name: "Zeynep Kader",
    img: (src =
      "imag/portrait-dark-skinned-cheerful-woman-with-curly-hair-touches-chin-gently-laughs-happily-enjoys-day-off-feels-happy-enthusiastic-hears-something-positive-wears-casual-blue-turtleneck_273609-43443.avif"),
    text: "Nearly everywhere you look in this show, the male gaze is looking back, imbuing the female person with degrees of objectification. ",
  },
];

const userImage = document.getElementById("image");
const userName = document.getElementById("name");
const userText = document.getElementById("text");

let currentUser = 0;

const sliderData = (persons) => {
  userImage.src = persons.img;
  userName.textContent = persons.name;
  userText.textContent = persons.text;
};

document.addEventListener("DOMContentLoaded", function () {
  const userOne = users[0];
  sliderData(userOne);
});

const nextButtons = () => {
  if (currentUser >= 0 && currentUser < users.length - 1) {
    currentUser++;
    sliderData(users[currentUser]);
  } else if (currentUser >= users.length - 1) {
    currentUser = 0;
    sliderData(users[currentUser]);
  }
};

const backButtons = () => {
  if (currentUser < 0) {
    currentUser--;
    sliderData(users[currentUser]);
  } else {
    currentUser = users.length - 1;
    sliderData(users[currentUser]);
  }
};

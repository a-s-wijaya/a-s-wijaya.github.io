"use strict";

const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-testimonials-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-testimonials-text]"
    ).innerHTML;

    testimonialsModalFunc();
  });
}

modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
        if (document.body.classList.contains("lv-body")) {
          document.body.classList.remove("lv-body");
          const sidebar = document.getElementById("sidebar");
          sidebar.classList.remove("lv-bar");
        }
        const sidebar = document.getElementById("sidebar");
        if (sidebar.classList.contains("lv-bar")) {
          sidebar.classList.remove("lv-bar");
          document.body.classList.remove("lv-body");
        }
        const navbar = document.getElementById("navbar");
        if (navbar.classList.contains("lv-nav")) {
          navbar.classList.remove("lv-nav");
        }
        const myName = document.getElementById("my-name");
        myName.innerHTML = "Adrian S Wijaya";
        const droppingText = document.getElementById("dropping-texts");
        droppingText.classList.remove("lv-drop");
        const moreBtn = document.querySelectorAll(".info_more-btn");
        moreBtn.forEach((btn) => {
          if (btn.classList.contains("lv-btn")) {
            btn.classList.remove("lv-btn");
          }
        });
        const iconBox = document.querySelectorAll(".icon-box");
        iconBox.forEach((box) => {
          if (box.classList.contains("lv-icon")) {
            box.classList.remove("lv-icon");
          }
        });
        const avatar = document.getElementById("avatar");
        avatar.src = "assets/images/my-avatar.png";
        avatar.alt = "Literally Gojo";
        const mailLabel = document.getElementById("mail-label");
        mailLabel.innerHTML = "Email";
        const myMail = document.getElementById("my-mail");
        myMail.innerHTML = "anaphrodisiac1@gmail.com";
        myMail.href = "mailto:anaphrodisiac1@gmail.com";
        const birthday = document.getElementById("birthday");
        birthday.innerHTML = "Birthday";
        const birthdate = document.getElementById("birthdate");
        birthdate.innerHTML = "September 22, 2002";
        birthdate.datetime = "2002-09-22";
        const address = document.getElementById("address");
        address.innerHTML = "Bekasi, Indonesia, Earth(Probably)";
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

const hradmin = document.getElementById("hr-admin");
const oldHrText = hradmin.innerHTML;
hradmin.addEventListener("mouseover", function () {
  hradmin.innerHTML = "Human Resources Generalist Soon 😉";
});

hradmin.addEventListener("mouseout", function () {
  hradmin.innerHTML = oldHrText;
});

const love = document.getElementById("❤");
const sanyaPage = document.querySelector("[data-page='sanya']");
let clickCount = 0;
love.addEventListener("click", function () {
  clickCount++;
  if (clickCount === 3) {
    document.body.classList.add("lv-body");
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.add("lv-bar");
    const navbar = document.getElementById("navbar");
    navbar.classList.add("lv-nav");
    const myName = document.getElementById("my-name");
    myName.innerHTML = "Adrian & Sanya";
    const droppingText = document.getElementById("dropping-texts");
    droppingText.classList.add("lv-drop");
    const moreBtn = document.querySelectorAll(".info_more-btn");
    moreBtn.forEach((btn) => {
      btn.classList.add("lv-btn");
    });
    const iconBox = document.querySelectorAll(".icon-box");
    iconBox.forEach((box) => {
      box.classList.add("lv-icon");
    });
    const avatar = document.getElementById("avatar");
    avatar.src = "assets/images/secret-avatar.png";
    avatar.alt = "Adrian & Sanya";
    const mailLabel = document.getElementById("mail-label");
    mailLabel.innerHTML = "Our Wish";
    const myMail = document.getElementById("my-mail");
    myMail.innerHTML = "Be Together Forever";
    myMail.href = "#";
    const birthday = document.getElementById("birthday");
    birthday.innerHTML = "Our Anniversary";
    const birthdate = document.getElementById("birthdate");
    birthdate.innerHTML = "September 17, 2019";
    birthdate.datetime = "2019-09-17";
    const address = document.getElementById("address");
    address.innerHTML = "Our Home";

    sanyaPage.classList.add("active");
    for (let i = 0; i < pages.length; i++) {
      if (pages[i] !== sanyaPage) {
        pages[i].classList.remove("active");
      }
    }

    clickCount = 0;
  }
});

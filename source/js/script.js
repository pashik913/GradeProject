'use strict';

var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.page-header__toggle');
var tabs = document.querySelector('.countrys');
var buttons = tabs.querySelectorAll('.countrys__tab-item');
var items = tabs.querySelectorAll('.countrys__item');
var modalButton = document.querySelectorAll('.modal-button');
var modal = document.querySelector('.modal');
var modalCloseButton = document.querySelector('.modal__close');
var overlay = document.createElement('div');

overlay.className = 'overlay';

pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');
  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});

function change(arr, i) {
  arr.forEach(function (item) {
    item.forEach(function (k) {
      k.classList.remove('is-active');
    });
    item[i].classList.add('is-active');
  });
}

var onTabClick = function onTabClick(i) {
  buttons[i].addEventListener('click', function () {
    change([buttons, items], i);
  });
};

for (var i = 0; i < buttons.length; i++) {
  onTabClick(i);
}

var onModalButtonClick = function () {
  if (modal.classList.contains('modal-show') === true) {
    modal.classList.remove('modal-show');
    document.body.removeChild(overlay);
  }

  document.body.appendChild(overlay);
  parent.className = 'overlay';
  modal.classList.add('modal-show');
};

for (var j = 0; j < modalButton.length; j++) {
  modalButton[j].addEventListener('click', function (evt) {
    evt.preventDefault();
    onModalButtonClick();
  });
}

overlay.addEventListener('click', function (evt) {
  evt.preventDefault();
  document.body.removeChild(overlay);
  modal.classList.remove('modal-show');
});

modalCloseButton.addEventListener('click', function (evt) {
  evt.preventDefault();

  if (modal.classList.contains('modal-show')) {
    modal.classList.remove('modal-show');
  }
});

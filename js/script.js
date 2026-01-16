const projectFirstSlider = new Swiper('.project__slider-first', {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,
  navigation: {
    nextEl: '.service__row.fifth .steps__arrow.next',
    prevEl: '.service__row.fifth .steps__arrow.prev',
  },
});
const projectSecondSlider = new Swiper('.project__slider-second', {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,
  navigation: {
    nextEl: '.service__row.fifth.hab .steps__arrow.next',
    prevEl: '.service__row.fifth.hab .steps__arrow.prev',
  },
});

const lettersSlider = new Swiper('.letters__slider', {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,
  navigation: {
    nextEl: '.letters .steps__arrow.next',
    prevEl: '.letters .steps__arrow.prev',
  },
});

const stepsSlider = new Swiper('.steps__slider', {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: '.steps:not(.letters) .steps__arrow.next',
    prevEl: '.steps:not(.letters) .steps__arrow.prev',
  },
});

const buttonUp = document.querySelector('.button-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 1000) {
    buttonUp.classList.add('active');
  } else {
    buttonUp.classList.remove('active');
  }
});

buttonUp.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

const searchButton = document.querySelector('.header__search');
const searchBlock = document.querySelector('.header-search');

searchButton.addEventListener('click', function(e) {
  e.preventDefault(); 
  
  this.classList.toggle('active');
  searchBlock.classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('[data-modal]');

  buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const modalId = btn.getAttribute('data-modal');
      const modalWindow = document.getElementById(modalId);
      if (modalWindow) {
        const modal = modalWindow.closest('.modal');
        if (modal) {
          modal.classList.add('active');
          document.body.style.overflow = 'hidden';
        }
      }
    });
  });

  function closeModal(modal) {
    modal.classList.remove('active');
    if (!document.querySelector('.modal.active')) {
      document.body.style.overflow = '';
    }
  }

  document.querySelectorAll('.modal__close').forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });

  document.querySelectorAll('.modal__bg').forEach(bg => {
    bg.addEventListener('click', () => {
      const modal = bg.closest('.modal');
      if (modal) {
        closeModal(modal);
      }
    });
  });
});

if (document.querySelector('.phone')) {
  var phoneInputs = document.querySelectorAll('.phone');

  phoneInputs.forEach(phoneInput => {
    phoneInput.onfocus = function (e) {
      e.target.setAttribute('placeholder', '+7 (000) 000-00-00');
    };

    phoneInput.addEventListener('focusout', function (e) {
      e.target.setAttribute('placeholder', '');
    });
    phoneInput.addEventListener('keydown', function (event) {
      if (!(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) {
        event.preventDefault();
      }

      var mask = '+7 (111) 111-11-11'; 

      if (/[0-9\+\ \-\(\)]/.test(event.key)) {
        var currentString = this.value;
        var currentLength = currentString.length;

        if (/[0-9]/.test(event.key)) {
          if (mask[currentLength] == '1') {
            this.value = currentString + event.key;
          } else {
            for (var i = currentLength; i < mask.length; i++) {
              if (mask[i] == '1') {
                this.value = currentString + event.key;
                break;
              }

              currentString += mask[i];
            }
          }
        }
      }
    });
  });
}
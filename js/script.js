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

const headerBurger = document.querySelector('.header__open');
const headerMobile = document.querySelector('.header-mobile');
const headerMobileBg = document.querySelector('.header-mobile__bg');
const headerMobileClose = document.querySelector('.header-mobile__close');

headerBurger.addEventListener('click', () => {
  headerBurger.classList.toggle('active');
  headerMobile.classList.toggle('active');
});

headerMobileBg.addEventListener('click', () => {
  headerBurger.classList.remove('active');
  headerMobile.classList.remove('active');
})

headerMobileClose.addEventListener('click', () => {
  headerBurger.classList.remove('active');
  headerMobile.classList.remove('active');
})

if(document.querySelector('.projs__filter')) {
  const headerBurger2 = document.querySelector('.projs__filter');
const headerMobile2 = document.querySelector('.header-mobile.second');
const headerMobileBg2 = document.querySelector('.header-mobile__bg.second');
const headerMobileClose2 = document.querySelector('.header-mobile__close.second');

headerBurger2.addEventListener('click', () => {
  headerBurger2.classList.toggle('active');
  headerMobile2.classList.toggle('active');
});

headerMobileBg2.addEventListener('click', () => {
  headerBurger2.classList.remove('active');
  headerMobile2.classList.remove('active');
})

headerMobileClose2.addEventListener('click', () => {
  headerBurger2.classList.remove('active');
  headerMobile2.classList.remove('active');
})
}

document.addEventListener('DOMContentLoaded', () => {
  const points = document.querySelectorAll('.header__point');

  points.forEach(point => {
    const link = point.querySelector('.header__link');
    const sublist = point.querySelector('.header__sublist');

    point.addEventListener('click', (e) => {
      if (sublist) {
        if (e.target === link && !point.classList.contains('active')) {
          e.preventDefault();
        }

        if (e.target.classList.contains('header__dropdown')) {
          point.classList.toggle('active'); 
        }

        if (e.target === point || e.target === link || e.target.closest('.header__dropdown')) {
          point.classList.toggle('active');
        }
      } else {
        point.classList.toggle('active');
      }
    });
  });
});


const headerAside = document.querySelector('.header-mobile__aside');
const headerCaption = document.querySelector('.header-mobile__caption');
const headerList = document.querySelector('.header-mobile__list');
const headerPoints = document.querySelectorAll('.header__point');
const backButton = document.querySelector('.header-mobile__back');

// Обработчик для каждого пункта меню
headerPoints.forEach(point => {
  point.addEventListener('click', (e) => {
    // Проверяем, есть ли у элемента подменю
    const sublist = point.querySelector('.header__sublist');
    
    if (sublist) {
      // Предотвращаем переход по ссылке
      e.preventDefault();
      
      // Получаем текст из основной ссылки
      const linkText = point.querySelector('.header__link').textContent;
      
      // Получаем все подссылки
      const sublinks = sublist.querySelectorAll('.header__sublink');
      
      // Обновляем заголовок
      headerCaption.textContent = linkText;
      
      // Очищаем список
      headerList.innerHTML = '';
      
      // Переносим ссылки
      sublinks.forEach(sublink => {
        const newLink = document.createElement('a');
        newLink.className = 'header-mobile__url';
        newLink.href = sublink.href;
        newLink.textContent = sublink.textContent;
        headerList.appendChild(newLink);
      });
      
      // Добавляем класс active
      headerAside.classList.add('active');
    }
  });
});

// Обработчик для кнопки "Назад"
if (backButton) {
  backButton.addEventListener('click', (e) => {
    e.preventDefault();
    headerAside.classList.remove('active');
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const phoneButton = document.querySelector('.header-mobile .header__phone');
  const phonesList = document.querySelector('.header-mobile .header__phones');
  const wrapper = document.querySelector('.header-mobile .header__rato');
  let isOpened = false;

  phoneButton.addEventListener('click', function(e) {
    if (!isOpened) {
      e.preventDefault();
      wrapper.classList.add('is-open');
      isOpened = true;
    }
  });

  // Закрытие при клике вне элемента
  document.addEventListener('click', function(e) {
    if (!wrapper.contains(e.target)) {
      wrapper.classList.remove('is-open');
      isOpened = false;
    }
  });
});

var acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

if (document.querySelector('.device__window')) {
  document.querySelector('.device__close').addEventListener('click', function() {
    document.querySelector('.device__window').style.display = 'none';
  })
}

const searchButton = document.querySelector('.header__search');
const searchBlock = document.querySelector('.header-search');

searchButton.addEventListener('click', function (e) {
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

if (window.innerWidth <= 876) {
  document.addEventListener('DOMContentLoaded', function () {
    const mobileContainer = document.querySelector('.work__mobile');

    if (mobileContainer) {
      let isScrolling = false;
      let startX;
      let scrollLeft;

      // Добавляем поддержку перетаскивания мышью (для тестирования на десктопе)
      mobileContainer.addEventListener('mousedown', (e) => {
        isScrolling = true;
        startX = e.pageX - mobileContainer.offsetLeft;
        scrollLeft = mobileContainer.scrollLeft;
        mobileContainer.style.cursor = 'grabbing';
      });

      mobileContainer.addEventListener('mouseleave', () => {
        isScrolling = false;
        mobileContainer.style.cursor = 'grab';
      });

      mobileContainer.addEventListener('mouseup', () => {
        isScrolling = false;
        mobileContainer.style.cursor = 'grab';
      });

      mobileContainer.addEventListener('mousemove', (e) => {
        if (!isScrolling) return;
        e.preventDefault();
        const x = e.pageX - mobileContainer.offsetLeft;
        const walk = (x - startX) * 2;
        mobileContainer.scrollLeft = scrollLeft - walk;
      });

      // Курсор для мобильного контейнера
      if (window.innerWidth > 876) {
        mobileContainer.style.cursor = 'grab';
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const mobileContainer = document.querySelector('.work__mobile');

  if (mobileContainer) {
    // Устанавливаем начальную прокрутку на 200px
    mobileContainer.scrollLeft = 200;
  }
});

const projectFirstSlider = new Swiper('.project__slider-first', {
  slidesPerView: 3,
  spaceBetween: 32,
  loop: true,
  navigation: {
    nextEl: '.service__row.fifth .steps__arrow.next',
    prevEl: '.service__row.fifth .steps__arrow.prev',
  },
  breakpoints: {
    876: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: '.project__slider-first .swiper-pagination',
    clickable: true
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
  breakpoints: {
    876: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: '.project__slider-second .swiper-pagination',
    clickable: true
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
  breakpoints: {
    876: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: '.letters__slider .swiper-pagination',
    clickable: true
  },
});

const servicesSlider = new Swiper('.services .services__slider', {
  slidesPerView: 3,
  spaceBetween: 0,
  loop: false,
  pagination: {
    el: '.services .swiper-pagination',
    clickable: true
  },
  breakpoints: {
    960: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 1,
    },
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
  breakpoints: {
    1000: {
      slidesPerView: 4,
    },
    700: {
      slidesPerView: 3,
    },
    1: {
      slidesPerView: 1,
    },
  },
  pagination: {
    el: '.steps__slider .swiper-pagination',
    clickable: true
  },
});

const projectsSlider = new Swiper('.projects__slider', {
  slidesPerView: 2,
  spaceBetween: 32,
  loop: true,
  pagination: {
    el: '.projects__slider .swiper-pagination',
    clickable: true
  },
  breakpoints: {
    876: {
      slidesPerView: 3,
    },
    700: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 1,
    },
  }
});

const aboutSlider = new Swiper('.about__slider', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: '.about__slider .swiper-pagination',
    clickable: true
  },
});

const partnersSlider = new Swiper('.partners__slider', {
  slidesPerView: 'auto',
  spaceBetween: 16,
  loop: false,
  pagination: {
    el: '.partners__slider .swiper-pagination',
    clickable: true
  },
});

const seroSlider = new Swiper('.sero__slider', {
  slidesPerView: 1,
  spaceBetween: 9,
  loop: false,
  pagination: {
    el: '.sero__slider .swiper-pagination',
    clickable: true
  },
   breakpoints: {
    700: {
      slidesPerView: 1,
    },
    1: {
      slidesPerView: 'auto',
    },
  }
});

const featuresSlider = new Swiper('.features__slider', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: '.features__slider .swiper-pagination',
    clickable: true
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 'auto',
    },
  }
});

const featuresSlider2 = new Swiper('.features__slider.sec', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: '.features__slider.sec .swiper-pagination',
    clickable: true
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 1,
    },
  }
});

const featuresSlider3 = new Swiper('.features__slider.ten', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: '.features__slider.ten .swiper-pagination',
    clickable: true
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 1,
    },
  }
});

const featuresSlider4 = new Swiper('.why .features__slider', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: '.why .features__slider.n .swiper-pagination',
    clickable: true
  },

  breakpoints: {
    700: {
      slidesPerView: 1,
    },
    1: {
      slidesPerView: 1,
    },
  }
});

const oppoSlider = new Swiper('.oppo__slider', {
  slidesPerView: 1,
  spaceBetween: 32,
  loop: false,
  pagination: {
    el: '.oppo__slider .swiper-pagination',
    clickable: true
  },

  breakpoints: {
    700: {
      slidesPerView: 2,
    },
    1: {
      slidesPerView: 1,
    },
  }
});

const modernSlider = new Swiper('.modern__slider', {
  slidesPerView: 'auto',
  spaceBetween: 24,
  loop: false,
  pagination: {
    el: '.modern__slider .swiper-pagination',
    clickable: true
  },
});
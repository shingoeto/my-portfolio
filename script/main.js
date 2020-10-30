'use strict';
// skills
$(function () {
  // HTML
  $(window).scroll(function () {
    $('.skill-html5').each(function () {
      let scroll = $(window).scrollTop();
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let per = $('.skill-per-html5')
      let value = $(per).data('value') + '%';
      if (scroll > position - windowHeight) {
        $(this).addClass('value').animate(
          {
            width: value,
          },
          3000,
          'swing'
        );
        $(per).text(value).animate();
      }
    });
  });
  // CSS
  $(window).scroll(function () {
    $('.skill-css3').each(function () {
      let scroll = $(window).scrollTop();
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let per = $('.skill-per-css3')
      let value = $(per).data('value') + '%';
      if (scroll > position - windowHeight) {
        $(this).addClass('value').animate(
          {
            width: value,
          },
          3000,
          'swing'
        );
        $(per).text(value).animate();
      }
    });
  });
  // JavaScript
  $(window).scroll(function () {
    $('.skill-js').each(function () {
      let scroll = $(window).scrollTop();
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let per = $('.skill-per-js')
      let value = $(per).data('value') + '%';
      if (scroll > position - windowHeight) {
        $(this).addClass('value').animate(
          {
            width: value,
          },
          3000,
          'swing'
        );
        $(per).text(value).animate();
      }
    });
  });
  // jQuery
  $(window).scroll(function () {
    $('.skill-jquery').each(function () {
      let scroll = $(window).scrollTop();
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let per = $('.skill-per-jquery')
      let value = $(per).data('value') + '%';
      if (scroll > position - windowHeight) {
        $(this).addClass('value').animate(
          {
            width: value,
          },
          3000,
          'swing'
        );
        $(per).text(value).animate();
      }
    });
  });
  // Vue.js
  $(window).scroll(function () {
    $('.skill-vue').each(function () {
      let scroll = $(window).scrollTop();
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let per = $('.skill-per-vue');
      let value = $(per).data('value') + '%';
      if (scroll > position - windowHeight) {
        $(this).addClass('value').animate(
          {
            width: value,
          },
          3000,
          'swing'
        );
        $(per).text(value).animate();
      }
    });
  });
  // PHP
  $(window).scroll(function () {
    $('.skill-php').each(function () {
      let scroll = $(window).scrollTop();
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let per = $('.skill-per-php');
      let value = $(per).data('value') + '%';
      if (scroll > position - windowHeight) {
        $(this).addClass('value').animate(
          {
            width: value,
          },
          3000,
          'swing'
        );
        $(per).text(value).animate();
      }
    });
  });
  // After Effects
  $(window).scroll(function () {
    $('.skill-ae').each(function () {
      let scroll = $(window).scrollTop();
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let per = $('.skill-per-ae');
      let value = $(per).data('value') + '%';
      if (scroll > position - windowHeight) {
        $(this).addClass('value').animate(
          {
            width: value,
          },
          3000,
          'swing'
        );
        $(per).text(value).animate();
      }
    });
  });
  // Photoshop
  $(window).scroll(function () {
    $('.skill-ps').each(function () {
      let scroll = $(window).scrollTop();
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let per = $('.skill-per-ps');
      let value = $(per).data('value') + '%';
      if (scroll > position - windowHeight) {
        $(this).addClass('value').animate(
          {
            width: value,
          },
          3000,
          'swing'
        );
        $(per).text(value).animate();
      }
    });
  });
  // Illustrator
  $(window).scroll(function () {
    $('.skill-ai').each(function () {
      let scroll = $(window).scrollTop();
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let per = $('.skill-per-ai');
      let value = $(per).data('value') + '%';
      if (scroll > position - windowHeight) {
        $(this).addClass('value').animate(
          {
            width: value,
          },
          3000,
          'swing'
        );
        $(per).text(value).animate();
      }
    });
  });
  // XD
  $(window).scroll(function () {
    $('.skill-xd').each(function () {
      let scroll = $(window).scrollTop();
      let position = $(this).offset().top;
      let windowHeight = $(window).height();
      let per = $('.skill-per-xd');
      let value = $(per).data('value') + '%';
      if (scroll > position - windowHeight) {
        $(this).addClass('value').animate(
          {
            width: value,
          },
          3000,
          'swing'
        );
        $(per).text(value).animate();
      }
    });
  });
});

// smooth-scroll.js
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
});

// Modal Window
Vue.component('open-modal', {
  template: `
    <div id="overlay" v-show="showModal" @click="exitModal">
      <div id="works-content" @click="stopModal" @click="keepModal">
      <slot name="expl"></slot>
      <slot name="miratabi"></slot>
      <button type="button" @click="exitModal">CLOSE</button>
      </div>
    </div>
  `,
  methods: {
    exitModal: function () {
      this.$emit('from-child')
    },
    keepModal: function () {
      event.stopPropagation()
    },
  },
});

new Vue({
  el: '#app',
  data: {
    showModal: false
  },
  methods: {
    openModal: function () {
      this.showModal = true
    },
    closeModal: function () {
      this.showModal = false
    }
  }
})


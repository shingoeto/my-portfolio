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
Vue.component('OpenModal', {
  props: {
    imgInfo: Object,
  },
  methods: {
    exitModal: function () {
      this.$emit('from-child');
    },
    keepModal: function () {
      event.stopPropagation();
    },
  },
  template: `
  <div class="overlay" @click="exitModal">
    <div class="works-content" @click="stopModal" @click="keepModal">
      <slot name="img" :img-info="imgInfo"></slot>
      <button type="button" @click="exitModal">CLOSE</button>
    </div>
  </div>
  `,
});
// v-scroll-lock
import VScrollLock from 'v-scroll-lock';
Vue.use(VScrollLock);
// Vue Instance
new Vue({
  el: '#app',
  data: function () {
    return {
      showModal: null,
      open: false,
    };
  },
  methods: {
    openModal1: function (e) {
      this.open = true;
      this.showModal = {
        modal: this.$refs.work1.innerHTML
      };
    },
    openModal2: function (e) {
      this.open = true;
      this.showModal = {
        modal: this.$refs.work2.innerHTML
      };
    },
    openModal3: function (e) {
      this.open = true;
      this.showModal = {
        modal: this.$refs.work3.innerHTML
      };
    },
    openModal4: function (e) {
      this.open = true;
      this.showModal = {
        modal: this.$refs.work4.innerHTML
      };
    },
    openModal5: function (e) {
      this.open = true;
      this.showModal = {
        modal: this.$refs.work5.innerHTML
      };
    },
    openModal6: function (e) {
      this.open = true;
      this.showModal = {
        modal: this.$refs.work6.innerHTML
      };
    },
    closeModal: function () {
      this.open = false;
      this.showModal = null;
    }
  }
})


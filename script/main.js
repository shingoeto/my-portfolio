'use strict';
// jquery
// navigation menu
$('.hamburger').on('click', function(){
  $('.hamburger-line').toggleClass('active');
  $('.nav').fadeToggle();
});
$('li').on('click', function(){
  $('.hamburger-line').removeClass('active');
  $('.nav').fadeOut();
});
// hide navigation line on show in modal window
$(function() {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      var scroll = $(window).scrollTop();
      var position = $(this).offset().top;
      var windowHeight = $(window).height();
      if (scroll > position - windowHeight - 400)
        $(this).addClass("up");
    })
  })
})
// vue.js
// modal window
Vue.component('OpenModal', {
  props: {
    imgInfo: Object,
  },
  methods: {
    exitModal: function () {
      this.$emit('from-child');
    },
  },
  template: `
  <transition name="fade">
  <div class="works-modal-overlay" @click="exitModal">
  <div class="works-modal-content" @click="stopModal">
  <slot name="img" :img-info="imgInfo"></slot>
  <button type="button" class="works-modal-close" @click="exitModal">CLOSE</button>
  </div>
  </div>
  </transition>
  `
});
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
    openModal7: function (e) {
      this.open = true;
      this.showModal = {
        modal: this.$refs.work7.innerHTML
      };
    },
    openModal8: function (e) {
      this.open = true;
      this.showModal = {
        modal: this.$refs.work8.innerHTML
      };
    },
    closeModal: function () {
      this.open = false;
      this.showModal = null;
    }
  }
})
// library
// smooth-scroll.js
var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
});
// v-scroll-lock
import VScrollLock from 'v-scroll-lock';
Vue.use(VScrollLock);

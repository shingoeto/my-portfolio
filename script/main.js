'use strict';
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
  },
  template: `
  <transition name="fade">
    <div class="overlay" @click="exitModal">
      <div class="works-content" @click="stopModal">
        <slot name="img" :img-info="imgInfo"></slot>
        <button type="button" class="modal-close" @click="exitModal">close</button>
      </div>
    </div>
  </transition>
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
// Navigation Menu
$('.hamburger').on('click', function(){
  $('.line').toggleClass('active');
  $('.nav').fadeToggle();
});
$('li').on('click', function(){
  $('.line').removeClass('active');
  $('.nav').fadeOut();
});
// Hide Navigation Line on Show in Modal Window


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


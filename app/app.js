const Vue = require('nativescript-vue/dist/index')
const http = require("http")

import VueComponent from './vue-component';

import './app.scss'

Vue.prototype.$http = http

new Vue({
  components: {
    JsComponent,
    VueComponent
  },

  template: `
    <page ref="page">
      <stack-layout>
        <vue-component></vue-component>
      </stack-layout>
    </page>
  `,
  methods: {
  }
}).$start()

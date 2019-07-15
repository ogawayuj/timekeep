var app = new Vue({
  el: '#app',
  data: {
      message: 'Hello Vue.js!',
      list: ['docker','nginx','Vue.js']
  }
})

var clock = new Vue({
  el: '#clock',
  data: {
    dials:[1,2,3,4,5,6,7,8,9,10,11,12]
  }
})
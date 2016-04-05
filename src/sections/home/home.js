import Vue from 'vue'

const home = Vue.extend({
    template: '<p>This is home buddy!</p>'
})

Vue.component('Home', home);

export default home;

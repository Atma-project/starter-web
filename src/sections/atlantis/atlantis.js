import './atlantis.scss'

import Vue from 'vue'
import config from 'config'

import dat from 'dat-gui'
import Experience from './experience/experience'

Vue.config.debug = true

export default Vue.extend({
    template: require('./atlantis.html'),

    data() {
        return {
            gui: null
        }
    },

    created() {
        if (config.gui) this.gui = new dat.GUI()
    },

    ready() {
        new Experience({
            debug: true,
            gui: this.gui,
            postProcessing: true,
            container: this.$el,
            data: null
        })
    }
})

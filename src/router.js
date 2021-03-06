import Vue from 'vue'
import VueRouter from 'vue-router'
import PATH from './constants/path'
import HelloWorld from './components/HelloWorld.vue'
import Earth from './components/Earth.vue'
import Mars from './components/Mars.vue'
import MarsSol from './components/MarsSol.vue'

Vue.use(VueRouter)

const routes = [
    { path: PATH.home, component: HelloWorld },
    { path: PATH.earth, component: Earth },
    { path: PATH.mars, component: Mars },
    { path: PATH.marsSol, component: MarsSol }
]

export default new VueRouter({
    routes
})

import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/view/Index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        }
    ]
})

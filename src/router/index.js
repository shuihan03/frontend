import Vue from 'vue'
import Router from 'vue-router'
import GrowRecord from '@/components/GrowRecord'
import User from '@/components/User'
import New from '@/components/New'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'GrowRecord',
            component: GrowRecord
        },
        {
            path: '/user',
            name: 'User',
            component: User
        }, {
            path: '/new',
            name: 'New',
            component: User
        }
    ]
})
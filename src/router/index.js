import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'

import Account from '@/components/Account'
import Budget from '@/components/Budget'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'MainContent',
        component: MainContent,
        children: [{
                path: '/Account',
                name: 'Account',
                component: Account,
            },
            {
                path: '/Budget',
                name: 'Budget',
                component: Budget,
            },
        ]
    }]
});
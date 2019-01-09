import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'

import Account from '@/components/Account'
import Budget from '@/components/Budget'

import Accountform from '@/components/Account-form'
import Accounttable from '@/components/Account-table'

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
                children: [{
                        path: '/all-account',
                        name: 'all-account',
                        default: Accounttable,
                        component: Accounttable,
                    },
                    {
                        path: '/add-account',
                        name: 'add-account',
                        component: Accountform,
                    },
                ]
            },
            {
                path: '/Budget',
                name: 'Budget',
                component: Budget,
            },
        ]
    }]
});
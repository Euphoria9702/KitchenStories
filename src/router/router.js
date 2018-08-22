/*
* @Author: admin
* @Date:   2018-08-16 10:14:35
* @Last Modified by:   admin
* @Last Modified time: 2018-08-21 10:34:07
*/
import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home.vue'
import tips from '../components/tips.vue'
import mime from '../components/mime.vue'
import hello from '../components/hello.vue'
import search from '../components/search.vue'
import mylove from '../components/mylove.vue'
import mybook from '../components/mybook.vue'
import detail from '../components/detail/detail.vue'
import login from '../components/login.vue'
import register from '../components/register.vue'
import nobody from '../components/nobody.vue'

Vue.use(Router)

export default new Router({
	routes:[
		{
	    	path: '/',
	    	name: 'hello',
	    	component: hello
    	},
    	{
	    	path: '/home',
	    	name: 'home',
	    	component: home
    	},
    	{
	    	path: '/tips',
	    	name: 'tips',
	    	component: tips
    	},
    	{
	    	path: '/mime',
	    	name: 'mime',
	    	component: mime,
            children:[
                {
                    path: '/mime/mylove',
                    name: 'mylove',
                    component: mylove
                },
                {
                    path: '/mime/mybook',
                    name: 'mybook',
                    component: mybook
                },
                {
                    path: '/mime/Userlogin',
                    name: 'login',
                    component: login
                },
                {
                    path: '/mime/Userregister',
                    name: 'register',
                    component: register
                },
                {
                    path: '/mime/nobody',
                    name: 'nobody',
                    component: nobody
                }
            ]
    	},
        {
            path: '/search',
            name: 'search',
            component: search
        },
         {
            path: '/detail/:id',
            name: 'detail',
            component: detail
        }
	]
})
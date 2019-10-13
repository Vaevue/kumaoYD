import vue from 'vue'
import Router from 'vue-router'
import find from '../components/find/find.vue'
import toplist from '../components/find/component/toplist'
import toplistinfo from '../components/find/component/toplistinfo'
import mrtj from '../components/find/component/mrtj/mrtj.vue'
import search from '../components/search/search'
import mv from '../components/mv/mv'
import singer from '../components/singer/singer.vue'
import singerinfo from '../components/singer/singerinfo.vue'
vue.use(Router)
const router =  new Router ({
        routes:[
            {
                path:'/',
                redirect : '/find'
            },
            {
                path:'/find',
                component:find,
            },
            {
                path:'/toplist',
                component:toplist,
            },
            {
                path:'/mrtj',
                component:mrtj
            },
            {
                path:'/search',
                component:search
            },
            {
                path:'/mv',
                component:mv
            },
            {
                path:'/singer',
                component:singer
            },
            {
                path:'/singerinfo',
                component:singerinfo
            }
        ]
})

export default router
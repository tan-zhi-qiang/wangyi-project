import FirstPage from '../pages/FirstPage/FirstPage.vue'
import Classify from '../pages/Classify/Classify.vue'
import Buy from '../pages/Buy/Buy.vue'
import Shop from '../pages/Shop/Shop.vue'
import Profile from '../pages/Profile/Profile.vue'

export default [
    {
        path:'/FirstPage',
        component:FirstPage
    },
    {
        path:'/Classify',
        component:Classify,
        children:[
            {
                path:'/classifylist'
            }
        ]
    },
    {
        path:'/Buy',
        component:Buy
    },
    {
        path:'/Shop',
        component:Shop
    },
    {
        path:'/Profile',
        component:Profile
    },
    {
        path:'/',
        redirect:'/FirstPage'
    },

]
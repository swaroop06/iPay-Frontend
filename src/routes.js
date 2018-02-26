import body from './Components/body.vue'
import login from './Components/login.vue'
import profile from './Components/profile.vue'
import wallet from './Components/wallet.vue'
import orders from './Components/orders.vue'
import payment from './Components/payment.vue'
import productdetails from './Components/productdetail.vue'
import shop from './Components/shopping.vue'
import movies from'./Components/moviebooking.vue'
import electricity from './Components/electricity.vue'
import phonebill from './Components/phonebill.vue'
import flight from './Components/flightbooking.vue'
import phones from './Components/phones.vue'
import bus from './Components/bustickets.vue'

export default[
    {path:'/', component:body},
    {path:'/login',component:login},
    {path: '/profile', component:profile},
    {path:'/wallet',component:wallet},
    {path:'/orders',component:orders},
    {path:'/payment',component:payment},
    {path:'/productdetails',component:productdetails},
    {path:'/movies',component:movies},
    {path:'/electricitybills',component:electricity},
    {path:'/phonebills',component:phonebill},
    {path:'/flights',component:flight},
    {path:'/phones',component:phones},
    {path:'/buses',component:bus}
]
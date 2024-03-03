import { createRouter, createWebHashHistory } from "vue-router"
import SelectPlan from "./components/SelectPlan.vue"
import AddOns from "./components/AddOns.vue"
import Summary from "./components/Summary.vue"
import YourInfo from "./components/YourInfo.vue"

const routes = [

    {
        path: "/" , name : 'info', component : YourInfo
    },
    {
        path: "/add-ons" , name : 'addons', component : AddOns
    },
    {
        path: "/select-plan" , name : 'selectplan', component : SelectPlan
    },
    {
        path: "/summary" , name : 'summary', component : Summary
    }
]

const router = createRouter({
    routes : routes,
    history : createWebHashHistory()
})

export default router
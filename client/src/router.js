
import Home from './views/Home.vue'
import DailyTasks from './views/DailyTasks.vue'
import UserTasks from './views/UserTasks.vue'




export const routes =[
    {
    path: '/',
    name: 'Home',
    component: Home
    },
    {
    path: '/tasks',
    name: 'DailyTasks',
    component: DailyTasks
    },
    {
    path: '/users',
    name: 'UserTasks',
    component: UserTasks
    }
]
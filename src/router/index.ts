import ENSOForecastExamination from '@/views/ENSO/ForecastExamination.vue'
import Achievement from '@/views/About/Achievement.vue'
import UserView from '@/views/user/UserView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory('/faa'),
    routes: [
        {
            name: 'home',
            path: '/',
            component: UserView,
            redirect: { name: 'about' },
            children: [
                {
                    name: 'about',
                    meta: {
                        title: 'About',
                    },
                    path: 'about',
                    component: Achievement,
                },
                {
                    name: 'ENSO',
                    meta: {
                        title: 'ENSO',
                    },
                    path: 'ENSO',
                    component: ENSOForecastExamination,
                },
            ],
        },
    ],
})

export default router;

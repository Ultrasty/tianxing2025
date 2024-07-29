import ENSOForecastExamination from '@/views/ENSO/ForecastExamination.vue'
import ENSOForecastResult from '@/views/ENSO/ForecastResult.vue'
import GlobalWeatherForecastResult from '@/views/GlobalWeather/ForecastResult.vue'
import Achievement from '@/views/About/Achievement.vue'
import UserView from '@/views/user/UserView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
    history: createWebHashHistory('/tianxing'),
    routes: [
        {
            name: 'home',
            path: '/',
            component: UserView,
            redirect: { name: 'about' },
            children: [ //这块跟headerview里面menus对应
                {
                    name: 'about',
                    meta: {
                        title: 'About',
                    },
                    path: 'about',
                    component: Achievement,
                },
                {
                    name: 'ENSO_ForecastExamination',
                    meta: {
                        title: 'ENSO_ForecastExamination',
                    },
                    path: 'ENSO_ForecastExamination',
                    component: ENSOForecastExamination,
                },
                {
                    name: 'ENSO_ForecastResult',
                    meta: {
                        title: 'ENSO_ForecastResult',
                    },
                    path: 'ENSO_ForecastResult',
                    component: ENSOForecastResult,
                },
                {
                    name: 'GlobalWeather_ForecastResult',
                    meta: {
                        title: 'GlobalWeather_ForecastResult',
                    },
                    path: 'GlobalWeather_ForecastResult',
                    component: GlobalWeatherForecastResult,
                }
            ],
        },
    ],
})

export default router;

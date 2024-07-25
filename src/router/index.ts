import { createRouter, createWebHashHistory } from 'vue-router';
import AboutView from '@/views/about/AboutView.vue';
import ApplyView from '@/views/apply/ApplyView.vue';
import ContactView from '@/views/contact/ContactView.vue';
import DonationView from '@/views/donation/DonationView.vue';
import LoginView from '@/views/login/LoginView.vue';
import NewsDetailView from '@/views/news/NewsDetailView.vue';
import NewsView from '@/views/news/NewsView.vue';
import UserView from '@/views/user/UserView.vue';

// Import ENSO components
import ENSO_ForecastResult from '@/components/ENSO/ForecastResult.vue';
import ENSO_ForecastExamination from '@/components/ENSO/ForecastExamination.vue';

// Import GlobalWeather components
import GlobalWeatherForecastResult from '@/components/GlobalWeather/GlobalWeatherForecastResult.vue';

// Import NAO components
import NAO_ForecastResult from '@/components/NAO/ForecastResult.vue';
import NAO_ForecastExamination from '@/components/NAO/ForecastExamination.vue';

// Import SeaIce components
import SeaIce_ForecastResult from '@/components/SeaIce/ForecastResult.vue';
import SeaIce_ForecastExamination from '@/components/SeaIce/ForecastExamination.vue';

const routes = [
    {
        name: 'home',
        path: '/',
        component: UserView,
        redirect: { name: 'ENSO_ForecastResult' },
        children: [
            // {
            //     name: 'about',
            //     meta: {
            //         title: 'About',
            //     },
            //     path: 'about',
            //     component: AboutView,
            // },
            // {
            //     name: 'apply',
            //     meta: {
            //         title: 'Apply',
            //     },
            //     path: 'apply',
            //     component: ApplyView,
            // },
            // {
            //     name: 'news',
            //     meta: {
            //         title: 'News & Insights',
            //     },
            //     path: 'news',
            //     component: NewsView,
            // },
            // {
            //     name: 'newsDetail',
            //     meta: {
            //         title: 'News & Insights',
            //     },
            //     path: 'news/:id',
            //     component: NewsDetailView,
            // },
            // {
            //     name: 'contact',
            //     meta: {
            //         title: 'Contact Us',
            //     },
            //     path: 'contact',
            //     component: ContactView,
            // },
            // {
            //     name: 'donation',
            //     meta: {
            //         title: 'Donation',
            //     },
            //     path: 'donation',
            //     component: DonationView,
            // },
            {
                name: 'ENSO_ForecastResult',
                meta: {
                    title: 'ENSO Forecast Result',
                },
                path: 'ENSO/ForecastResult',
                component: ENSO_ForecastResult,
            },
            {
                name: 'ENSO_ForecastExamination',
                meta: {
                    title: 'ENSO Forecast Examination',
                },
                path: 'ENSO/ForecastExamination',
                component: ENSO_ForecastExamination,
            },
            {
                name: 'GlobalWeather_ForecastResult',
                meta: {
                    title: 'Global Weather Forecast Result',
                },
                path: 'GlobalWeather/ForecastResult',
                component: GlobalWeatherForecastResult,
            },
            {
                name: 'NAO_ForecastResult',
                meta: {
                    title: 'NAO Forecast Result',
                },
                path: 'NAO/ForecastResult',
                component: NAO_ForecastResult,
            },
            {
                name: 'NAO_ForecastExamination',
                meta: {
                    title: 'NAO Forecast Examination',
                },
                path: 'NAO/ForecastExamination',
                component: NAO_ForecastExamination,
            },
            {
                name: 'SeaIce_ForecastResult',
                meta: {
                    title: 'SeaIce Forecast Result',
                },
                path: 'SeaIce/ForecastResult',
                component: SeaIce_ForecastResult,
            },
            {
                name: 'SeaIce_ForecastExamination',
                meta: {
                    title: 'SeaIce Forecast Examination',
                },
                path: 'SeaIce/ForecastExamination',
                component: SeaIce_ForecastExamination,
            },
        ],
    },
    {
        name: 'login',
        path: '/login',
        component: LoginView,
    },
];

const router = createRouter({
    history: createWebHashHistory('/faa'),
    routes,
});

export default router;

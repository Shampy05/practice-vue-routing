import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue'
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
    routes: [
        {
            path: '/',
            redirect: '/teams',
        },
        {
            path: '/teams',
            component: TeamsList,
        },
        {
            path: '/users',
            component: UsersList,
        },
        {
            path: '/teams/:teamId',
            component: TeamMembers,
            props: true
        },
        {
            path: '/:notFound(.*)',
            component: NotFound,
        }
    ],
    history: createWebHistory()
})

const app = createApp(App)

app.use(router);

app.mount('#app');

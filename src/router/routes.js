import Index from '../views/Index.vue'

const routes = [
    {
        path: '/',
        name: 'Index',
        component: Index
    },
    {
        path: '/user',
        name: 'User',
        component: () => import('../views/Home.vue'),
        // children: [
        //     {
        //         // children routes
        //     }
        // ]
    },
    {
        path: '*',
        component: () => import('../views/404')
    }
]


export default routes

export default {
	mode: 'history', // hash/history
	routes: [
		{ path: '/', redirect: '/calendar' },
		{
			path: '/calendar',
			name: 'calendar',
			component: (resolve) => require(['@/page/home'], resolve),
		},
		{
			path: '/mulcalendar',
			name: 'MulCalendar',
			component: (resolve) =>
				require(['@/components/MulCalendar'], resolve),
		},
		{
			path: '/tree',
			name: 'tree',
			component: (resolve) => require(['@/page/tree'], resolve),
		},
	],
}

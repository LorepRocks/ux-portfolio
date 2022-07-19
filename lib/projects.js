export default projects = [
    {
        id: 1,
        name: 'iChoose',
        role: 'UX Designer',
        responsibilities: 'Create low and high fidelity prototypes for app, conducting interviews, usability cases, accounting for accessibility, and participate in the whole design process.',
        duration: '5 Months',
        problem_statement: 'Users spend too much time searching for reservations, and the process is not easy to follow.',
        goal: 'We want to offer user the opportunity to be able to find the right restaurant on time, get notifications and manage their reservations.',
        target_audience: 'Busy people that do not have time to make reservations in anticipation',
        key_challenges: 'Design an application that manages restaurant reservations, alerts, cancellations in an easy way for the user',
        personas: [{id: 1, url: '/ichoose/persona1.png', alt: 'iChoose app persona 1'}, {id: 2, url: '/ichoose/persona2.png', alt: 'iChoose app persona 2'}],
        user_journey_map: {url : '/ichoose/journal_map.png', alt: 'iChoose app user journal map'},
        research_study: { methodology: 'Unmoderated', users: '2 Males, 2 Females, 1 user using assistive technologies'},
        paper_design: {url : '/ichoose/paper_design.png', alt: 'iChoose app paper design'},
        wireFrames: [
            {id: 1, name: 'homepage', url: '/ichoose/wireframe_homepage.png', alt: 'iChoose app wireframe homepage'},
            {id: 2, name: 'restaurant page', url: '/ichoose/wireframe_restaurant_page.png', alt: 'iChoose app wireframe restaurant page'},
            {id: 3, name: 'confirm reservation', url: '/ichoose/wireframe_confirmation.png', alt: 'iChoose app wireframe confirmation page'},
            {id: 4, name: 'restaurant list', url: '/ichoose/wireframe_restautant_list.png', alt: 'iChoose app wireframe restaurant list'},
            {id: 5, name: 'reserve confirmation', url: '/ichoose/wireframe_reserve_confirmation.png', alt: 'iChoose app wireframe reservation confirm'},
            {id: 6, name: 'menu', url: '/ichoose/wireframe_menu.png', alt: 'iChoose app wireframe '},
        ],
        user_testing_results: { themes: [
            {id: 1, desc: 'For most users there are not enough filters available.'},
            {id: 2, desc: 'The information provided during and after the reservation process could be more significant.'},
            {id: 3, desc: 'For most of the users there is not enough criteria information selecting a restaurant.'}
        ], insights: [
            {id: 1, desc: 'Users need more filters to ensure they will select the right restaurant.'},
            {id: 2, desc: 'Users need some extra information during the reservation process.'},
            {id: 3, desc: 'After applying filters and getting the restaurant list users need more tools that allow them to choose the right restaurant.'}
        ],
        img: {url: '/ichoose/insights.png', alt: 'iChoose app insights' }
    },
        storyBoards: { 
            storyboardBig: { url: '/ichoose/storyboard_big.png', alt: 'iChoose app storyboard big'} , 
            storyboardClose: {url: '/ichoose/storyboard_close.png', alt: 'iChoose app storyboard close'}
        },
        mockups: [
            {id: 1, name: 'homepage', url: '/ichoose/mockup-homepage.png', alt: 'iChoose app mockup homepage'},
            {id: 2, name: 'restaurant page', url: '/ichoose/mockup-restaurant-page.png', alt: 'iChoose app mockup restaurant page'},
            {id: 3, name: 'reservation summary', url: '/ichoose/mockup-reservation-summary.png', alt: 'iChoose app mockup reservation summary'},
            {id: 4, name: 'restaurant list', url: '/ichoose/mockup-restaurant-list.png', alt: 'iChoose app mockup restaurant list'},
            {id: 5, name: 'reservation confirm', url: '/ichoose/mockup-reservation-confirm', alt: 'iChoose app mockup reservation confirm'}

        ],
        sitemap: {url: 'ichoose/sitemap.png', alt: 'iChoose app sitemap'},
        conclusion: 'After usability studies we have a better product, we identify the problems users are facing on restaurant reservations and give a solution for that. So, now we have to add some new features that allow restaurant owners to register their restaurant in our platform.'
    }
]
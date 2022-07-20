export const projectsList = [
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
    },
    {
        id: 2,
        name: 'BookNotes',
        role: 'UX Designer',
        responsibilities: 'create low and high fidelity prototypes for web and mobile taking in account the personas created',
        duration: '3 Months',
        problem_statement: 'Users that usually read books likes to highlight some phrases, but with the time the forget the exact place where they can found it.',
        goal: 'Offer an easy and practical way to save book notes organized by books, authors, tags, etc. Where the user can be able to search and have a track of their notes.',
        target_audience: 'people of any ages that likes to read usually',
        key_challenges: 'Allow user be able to find the book they are reading, create phrases from pictures or camera photos, and synchronize with different platforms that they are using to save that notes so far.',
        personas: [{id: 1, url: '/bookNotes/persona1.png', alt: 'bookNotes app persona 1'}],
        user_journey_map: null,
        research_study: null,
        paper_design: {url : '/bookNotes/paper-design.png', alt: 'bookNotes app paper design'},
        wireFrames: [
            {id: 1, name: 'homepage', url: '/bookNotes/wireframe-homepage.png', alt: 'bookNotes app wireframe homepage'},
            {id: 2, name: 'homepage web', url: '/bookNotes/wireframe-web-homepage.png', alt: 'bookNotes app web wireframe homepage'},
            {id: 3, name: 'books', url: '/bookNotes/wireframe_books.png', alt: 'bookNotes app wireframe books'},
            {id: 4, name: 'books web', url: '/bookNotes/wireframe-web-books.png', alt: 'bookNotes app wireframe web books'},
        ],
        user_testing_results: { themes: null, insights: null, img: null },
        storyBoards: { 
            storyboardBig: null , 
            storyboardClose: null,
        },
        mockups: [
            {id: 1, name: 'homepage', url: '/bookNotes/mockup-homepage.png', alt: 'bookNotes app mockup homepage'},
            {id: 2, name: 'book selected', url: '/bookNotes/mockup-book-selected.png', alt: 'bookNotes app mockup book selected'},
            {id: 3, name: 'category book', url: '/bookNotes/mockup-category-book.png', alt: 'bookNotes app mockup category book'},
            {id: 4, name: 'category note', url: '/bookNotes/mockup-category-note.png', alt: 'bookNotes app mockup category note'},
            {id: 5, name: 'search', url: '/bookNotes/mockup-search.png', alt: 'bookNotes app mockup search'},
            {id: 6, name: 'search book', url: '/bookNotes/mockup-search-book.png', alt: 'bookNotes app mockup search book'},
            {id: 7, name: 'mobile homepage', url: '/bookNotes/mockup-mobile-homepage.png', alt: 'bookNotes app mockup mobile homepage'},
            {id: 8, name: 'mobile splash', url: '/bookNotes/mockup-mobile-splash.png', alt: 'bookNotes app mockup mobile splash'},
            {id: 9, name: 'mobile sign up', url: '/bookNotes/mockup-mobile-signup.png', alt: 'bookNotes app mockup mobile signup'},
            {id: 10, name: 'mobile search', url: '/bookNotes/mockup-mobile-search.png', alt: 'bookNotes app mockup mobile search'},
        ],
        sitemap: null,
        conclusion: 'We have a big challenge with the camera integration and the synchronize with other platforms, the next steps is to design a feature where the user easily can choose the different platform options with their wants to connect.'
    },
    {
        id: 3,
        name: 'LocalHub',
        role: 'UX Designer',
        responsibilities: 'create low and high fidelity prototypes, conduct usability research on every stage of the process, identify insights and update designs according to users feedback.',
        duration: '7 Months',
        problem_statement: 'Users has to spend a lot of time searching on internet places where they can to offer community service, sometimes the information is fraudulent or imprecise and, in other cases they miss the opportunity to participate in a event because they do not receive the information on time.',
        goal: 'Provide a technological solution for different kind of users, to keep track of the community events they are interested on. We have to have a good analysis about the requirements for different users to provide solutions on different formats.',
        target_audience: 'People of any age involved or with the willing to participate on local community service.',
        key_challenges: 'Offer the right solution to people with different needs, deep investigation on solution formats.',
        personas: [{id: 1, url: '/localHub/persona1.png', alt: 'LocalHub app persona 1'}, {id: 2, url: '/localHub/persona2.png', alt: 'LocalHub app persona 2'}],
        user_journey_map: null,
        research_study: null,
        paper_design: {url : '/localHub/paper-design.png', alt: 'LocalHub app paper design'},
        wireFrames: [
            {id: 1, name: 'homepage', url: '/localHub/wireframe-homepage.png', alt: 'LocalHub app wireframe homepage'},
            {id: 2, name: 'event detail', url: '/localHub/wireframe-event-detail.png', alt: 'LocalHub app wireframe event detail page'},
            {id: 3, name: 'event agenda', url: '/localHub/wireframe_event-agenda.png', alt: 'LocalHub app wireframe event agenda'},
            {id: 4, name: 'events', url: '/localHub/wireframe-events.png', alt: 'LocalHub app wireframe upcoming events'},
            {id: 5, name: 'homepage web', url: '/localHub/wireframe-web-homepage.png', alt: 'LocalHub app wireframe web homepage'},
            {id: 6, name: 'agenda web', url: '/localHub/wireframe-web-agenda.png', alt: 'LocalHub app wireframe web agenda'},
            {id: 7, name: 'event details', url: '/localHub/wireframe-web-event-details.png', alt: 'LocalHub app wireframe web event details'},
            {id: 8, name: 'events', url: '/localHub/wireframe-web-events.png', alt: 'LocalHub app wireframe web events'},
        ],
        user_testing_results: { themes: [
            {id: 1, desc: 'Users found difficult to find the exact social event they are looking for.'},
            {id: 2, desc: 'Users felt lost when they were through the diagram representing events near you.'},
            {id: 3, desc: 'Users were looking for ways to communicate with event organizer and friends through social media.'},
            {id: 4, desc: 'When there are similar events users would like to compare them to make the choose that better fits with them.'},
            {id: 5, desc: 'Users wants be able to personalize alerts by events categories.'}
        ], insights: [
            {id: 1, desc: 'Add more filters on application to make searching easy.'},
            {id: 2, desc: 'Change the current diagram an use a map.'},
            {id: 3, desc: 'Add a function to allow users communicate with event’s organizers throught the app, and the ability to share to social media.'},
            {id: 4, desc: 'Add similar events inside event description page, highlight the differences.'},
            {id: 5, desc: 'Add the ability for users to subscribe not just to an event but also to a event category to receive alerts.'}
        ],
            img: {url: '/localHub/affinity-diagram.png', alt: 'LocalHub app insights' }
        },
        storyBoards: { 
            storyboardBig: null , 
            storyboardClose: null,
        },
        mockups: [
            {id: 1, name: 'homepage', url: '/localHub/mockup-homepage.png', alt: 'LocalHub app mockup homepage'},
            {id: 2, name: 'coming events', url: '/localHub/mockup-coming-events.png', alt: 'LocalHub app mockup coming events'},
            {id: 3, name: 'event agenda', url: '/localHub/mockup-event-agenda.png', alt: 'LocalHub app mockup event agenda'},
            {id: 4, name: 'event detail', url: '/localHub/mockup-event-detail.png', alt: 'LocalHub app mockup event detail'},
            {id: 5, name: 'search page', url: '/localHub/mockup-search.png', alt: 'LocalHub app mockup search page'},
            {id: 6, name: 'web homepage', url: '/localHub/mockup-web-homepage.png', alt: 'LocalHub app mockup homepage'},
            {id: 7, name: 'web coming events', url: '/localHub/mockup-web-coming-events.png', alt: 'LocalHub app mockup  web coming events'},
            {id: 8, name: 'web event agenda', url: '/localHub/mockup-web-event-agenda.png', alt: 'LocalHub app mockup web event agenda'},
            {id: 9, name: 'web event detail', url: '/localHub/mockup-web-event-detail.png', alt: 'LocalHub app web mockup event detail'},
        ],
        sitemap: null,
        conclusion: 'Usability studies has revealed that we are on good direction, our next steps should be include some interfaces where events organizers can create and publish their social events.'
    }
]
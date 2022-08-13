import { Post } from '../Models/Post'
import { Widget } from '../Models/Widget'

export const PROFILE_URL = '/assets/profile-pic.png'
export const LINKEDIN_LOGO =
  'https://cdn-icons-png.flaticon.com/512/174/174857.png'
export const LINKEDIN_LOGO_FULL =
  'https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png'
export const BANNER =
  'https://images.unsplash.com/photo-1513735539099-cf6e5d559d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4072&q=80'

//
// Example Post
export const POSTS: Post[] = [
  {
    id: '234sdfg',
    displayName: 'Krupesh Anadkat',
    photoUrl: PROFILE_URL,
    subtitle: 'Software Engineer',
    message:
      'Teams should adopt Typescript if the project codebase is growing and more number of contributors would participate.',
  },
]

//
// Example Widgets Data
export const WIDGETS: Widget[] = [
  {
    key: 'widget-1',
    title: 'Hiring up in retail sector',
    subtitle: '1d ago • 1,784 readers',
    url: 'https://www.linkedin.com/news/story/hiring-up-in-retail-sector-5389028',
  },
  {
    key: 'widget-2',
    title: 'Big hikes in IT set to fade out',
    subtitle: '12h ago • 10,704 readers',
    url: 'https://www.linkedin.com/news/story/big-hikes-in-it-set-to-fade-out-4892625',
  },
  {
    key: 'widget-3',
    title: 'JP Morgan to hire 5,000',
    subtitle: '6h ago • 55,315 readers',
    url: 'https://www.linkedin.com/news/story/jp-morgan-to-hire-5000-4833089',
  },
  {
    key: 'widget-4',
    title: 'Uber rides out of Zomato',
    subtitle: '1d ago • 11,003 readers',
    url: 'https://www.linkedin.com/news/story/uber-rides-out-of-zomato-4879369',
  },
  {
    key: 'widget-5',
    title: 'WFH attracts more women to work',
    subtitle: '1d ago • 16,588 readers',
    url: 'https://www.linkedin.com/news/story/wfh-attracts-more-women-to-work-4878689',
  },
]

export const FEATURES = [
  {
    id: 1,
    title: 'Speaking Practice',
    description: 'AI-powered speaking assessments with real-time feedback and pronunciation analysis',
    icon: 'Mic',
    gradient: 'from-blue-600 to-purple-600',
    bgGradient: 'from-blue-50 to-purple-50'
  },
  {
    id: 2,
    title: 'Mock Tests',
    description: 'Full-length practice tests with actual IELTS exam conditions and detailed analytics',
    icon: 'BookOpen',
    gradient: 'from-purple-600 to-pink-600',
    bgGradient: 'from-purple-50 to-pink-50'
  },
  {
    id: 3,
    title: 'AI Band Score',
    description: 'Instant band score predictions using advanced AI algorithms trained on 10k+ tests',
    icon: 'Brain',
    gradient: 'from-green-600 to-teal-600',
    bgGradient: 'from-green-50 to-teal-50'
  },
  {
    id: 4,
    title: 'Expert Mentors',
    description: 'Learn from certified IELTS trainers with 8.5+ band scores and years of experience',
    icon: 'Award',
    gradient: 'from-orange-600 to-red-600',
    bgGradient: 'from-orange-50 to-red-50'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya Sharma',
    band: '8.5',
    destination: 'Canada PR',
    initials: 'PS',
    gradient: 'from-blue-600 to-purple-600',
    review: 'IELTS Excellence transformed my preparation! The AI feedback on speaking was incredibly accurate. I scored 8.5 overall in just 2 months!'
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    band: '8.0',
    destination: 'UK Masters',
    initials: 'RK',
    gradient: 'from-purple-600 to-pink-600',
    review: 'The mock tests were exactly like the real exam! Mock tests helped me manage time better. Scored 8.0 on my first attempt. Highly recommended!'
  },
  {
    id: 3,
    name: 'Sneha Mehta',
    band: '7.5',
    destination: 'Australia PR',
    initials: 'SM',
    gradient: 'from-green-600 to-teal-600',
    review: 'Best investment I made! The mentors are patient and knowledgeable. Their writing correction saved my score. Got 7.5 and moving to Australia!'
  }
];

export const COURSES = [
  {
    id: 1,
    title: 'IELTS Foundation',
    duration: '4 Weeks',
    level: 'Beginner',
    targetBand: '6.0 - 6.5',
    price: '₹12,999',
    features: [
      'Basic grammar and vocabulary',
      '20+ practice tests',
      'Speaking practice sessions',
      'Writing feedback'
    ],
    popular: false
  },
  {
    id: 2,
    title: 'IELTS Advanced',
    duration: '8 Weeks',
    level: 'Intermediate',
    targetBand: '7.0 - 8.0',
    price: '₹19,999',
    features: [
      'Advanced strategies',
      '50+ practice tests',
      'Daily speaking sessions',
      'Detailed writing corrections',
      'One-on-one mentorship',
      'Mock exam with evaluation'
    ],
    popular: true
  },
  {
    id: 3,
    title: 'IELTS Pro',
    duration: '12 Weeks',
    level: 'Advanced',
    targetBand: '8.5+',
    price: '₹29,999',
    features: [
      'Expert-level training',
      '100+ practice tests',
      'Unlimited speaking practice',
      'Personal mentor assigned',
      'Priority doubt clearing',
      'Guaranteed score improvement'
    ],
    popular: false
  }
];

export const STATS = [
  { value: '15k+', label: 'Students Enrolled' },
  { value: '8.5', label: 'Average Band Score' },
  { value: '98%', label: 'Success Rate' }
];

export const NAV_LINKS = [
  { path: '/', label: 'Home' },
  { path: '/courses', label: 'Courses' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' }
];
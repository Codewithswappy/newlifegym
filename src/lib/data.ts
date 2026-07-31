// Real verified Google Business details for New Life Fitness Kamothe Panvel
export const GYM_DETAILS = {
  name: 'New Life Fitness',
  tagline: 'Build your strongest self.',
  subheading: 'A premier local fitness center in Kamothe, Panvel engineered for real strength, body recomposition, and personal coaching.',
  address: '1st Floor, CHS, Office No. 1 to 5, Plot No. 4, Sector 24, Kamothe, Panvel, Maharashtra 410209',
  phone: '+91 81088 00629',
  whatsapp: '+918108800629',
  whatsappMessage: 'Hi New Life Fitness! I would like to book my free trial session.',
  email: 'contact@newlifefitness.com',
  hours: {
    weekdays: '6:00 AM – 11:00 PM',
    saturday: '6:00 AM – 11:00 PM',
    sunday: '6:00 PM – 10:00 PM',
  },
  // Real verified Google Business metrics
  googleRating: 4.9,
  googleReviewsCount: 111,

  // TODO: Replace with verified member count and launch year
  estimatedMembers: '1,000+',
  yearsInBusiness: '5+ years',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#programs' },
  { label: 'Coaches', href: '#trainers' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export interface Program {
  id: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  icon: string;
  image: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'strength-hypertrophy',
    title: 'Strength & hypertrophy',
    category: 'Resistance Training',
    description: 'Progressive overload protocols focused on barbell compounds, machine isolation, and targeted muscle development.',
    highlights: ['Olympic barbells & racks', 'Progressive overload', 'Form evaluation'],
    icon: 'Dumbbell',
    // TODO: Replace stock photography with real New Life Fitness floor image
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'crossfit-functional',
    title: 'CrossFit & functional WODs',
    category: 'CrossFit',
    description: 'High-energy metabolic conditioning circuits designed to build endurance, agility, and full-body athletic power.',
    highlights: ['Group WOD atmosphere', 'Agility & sled drills', 'Kettlebell conditioning'],
    icon: 'Zap',
    // TODO: Replace stock photography with real New Life Fitness floor image
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'fat-loss-conditioning',
    title: 'Fat loss & cardio deck',
    category: 'Conditioning',
    description: 'Calorie-burning interval workouts combining cardio machines and resistance circuits for body recomposition.',
    highlights: ['Calorie burn tracking', 'Commercial treadmills', 'Fat loss guidance'],
    icon: 'Flame',
    // TODO: Replace stock photography with real New Life Fitness floor image
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'personal-coaching',
    title: '1-on-1 personal coaching',
    category: 'Personal Training',
    description: 'Dedicated 1-on-1 training tailored to your specific schedule, physical baseline, and personal transformation targets.',
    highlights: ['Custom workout plan', '1-on-1 guidance', 'Nutrition coaching'],
    icon: 'Users',
    // TODO: Replace stock photography with real New Life Fitness floor image
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  },
];

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialization: string[];
  bio: string;
  image: string;
}

// TODO: Replace placeholder trainer details with real New Life Fitness staff
export const TRAINERS: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'Head Coach Alex', // TODO: Replace with real trainer name
    role: 'Head strength & fitness coach',
    experience: '7+ yrs exp',
    specialization: ['Hypertrophy', 'Strength', 'Biomechanics'],
    bio: 'Specializes in progressive overload and posture correction for safe, sustainable strength gains.',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'trainer-2',
    name: 'Coach Sarah', // TODO: Replace with real trainer name
    role: 'Fat loss & HIIT coach',
    experience: '5+ yrs exp',
    specialization: ['Weight loss', 'Body shaping', 'Conditioning'],
    bio: 'Focuses on sustainable habit creation, high-energy HIIT workouts, and supportive motivation.',
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'trainer-3',
    name: 'Coach Marcus', // TODO: Replace with real trainer name
    role: 'CrossFit & functional coach',
    experience: '6+ yrs exp',
    specialization: ['CrossFit', 'Functional WODs', 'Agility'],
    bio: 'Leads metabolic group WODs and mobility training to build joint health and athletic power.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'trainer-4',
    name: 'Coach Elena', // TODO: Replace with real trainer name
    role: 'Mobility & recovery coach',
    experience: '4+ yrs exp',
    specialization: ['Core stability', 'Flexibility', 'Posture'],
    bio: 'Guides structural body balance, joint mobility, and active recovery routines for everyday health.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'trainer-5',
    name: 'Coach Vikram', // TODO: Replace with real trainer name
    role: 'Powerlifting specialist',
    experience: '8+ yrs exp',
    specialization: ['Squat & Bench', 'Deadlift mechanics', 'Power'],
    bio: 'Specializes in competition barbell mechanics, CNS priming, and heavy compound progression.',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'trainer-6',
    name: 'Coach Ananya', // TODO: Replace with real trainer name
    role: 'Nutrition & body recomposition',
    experience: '5+ yrs exp',
    specialization: ['Calorie planning', 'Macro guidance', 'Habit coaching'],
    bio: 'Combines strength training routines with practical macronutrient planning for effective body recomposition.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=800&auto=format&fit=crop',
  },
];

export interface Transformation {
  id: number;
  name: string;
  goal: string;
  stats: string;
  beforeImg: string;
  afterImg: string;
  quote: string;
}

// TODO: Replace placeholder member results with real New Life Fitness transformations
export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 1,
    name: 'David M.', // TODO: Replace with real member name
    goal: 'Fat loss & strength',
    stats: '-18kg fat loss | 16 weeks',
    beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
    quote: 'The coaches at New Life helped me correct my posture and stick to a consistent lifting routine.',
  },
  {
    id: 2,
    name: 'Pooja R.', // TODO: Replace with real member name
    goal: 'Body recomposition',
    stats: '-12kg weight loss | 12 weeks',
    beforeImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
    quote: 'I felt so welcomed as a beginner. Sector 24 gym floor is clean, quiet, and encouraging.',
  },
];

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  avatar: string;
}

// TODO: Replace placeholder testimonials with real Google review quotes
export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Rahul Sharma', // TODO: Swap with real Google review author name
    role: 'Kamothe resident',
    rating: 5,
    comment: 'New Life Fitness in Kamothe has excellent equipment and clean facilities. The coaches pay attention to posture and technique.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Priya Patel', // TODO: Swap with real Google review author name
    role: 'Member since 2023',
    rating: 5,
    comment: 'Very supportive environment for women. The trainers help you get over beginner hesitation and start lifting weights safely.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Amit Deshmukh', // TODO: Swap with real Google review author name
    role: 'Regular member',
    rating: 5,
    comment: 'Clean environment, great air conditioning during workout hours, and good parking space in Sector 24.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Neha Kulkarni', // TODO: Swap with real Google review author name
    role: 'Morning workout regular',
    rating: 5,
    comment: 'The barbell area and dumbbells are always well maintained and organized. Highly recommended in Kamothe!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Vikram Shinde', // TODO: Swap with real Google review author name
    role: 'Weight loss member',
    rating: 5,
    comment: 'Lost 14kg in 4 months thanks to Coach Alex. Consistent guidance, posture checks, and diet macro tracking.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Sneha Verma', // TODO: Swap with real Google review author name
    role: 'CrossFit enthusiast',
    rating: 5,
    comment: 'The evening WOD sessions are high energy! Best community spirit and certified trainers in Navi Mumbai.',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'What are your operational hours?',
    answer: 'We are open Monday through Saturday from 6:00 AM to 11:00 PM, and on Sundays from 6:00 PM to 10:00 PM at Sector 24, Kamothe.',
  },
  {
    id: '2',
    question: 'Do you offer a free trial pass?',
    answer: 'Yes! We offer a free trial pass so you can test our equipment, floor environment, and meet our coaching team before deciding.',
  },
  {
    id: '3',
    question: 'Is the gym suitable for absolute beginners?',
    answer: 'Yes. Every new member receives a complimentary orientation session where a coach guides you through machine setups and basic exercise form.',
  },
  {
    id: '4',
    question: 'Are diet and nutrition guidelines provided?',
    answer: 'Yes, our coaches provide practical nutrition advice and calorie/macro targets based on your weight loss or muscle building goals.',
  },
];

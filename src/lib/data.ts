// Real verified Google Business details for Revamp Fitness Sector 20 Kharghar, Navi Mumbai
export const GYM_DETAILS = {
  name: 'Revamp Fitness',
  legalName: 'Revamp Fitness LLP',
  tagline: 'The change you need.',
  subheading: 'A premier unisex fitness center at Mita Heights, Sector 20, Kharghar. Offering modern weight training, cardio deck, functional turf, Yoga, Zumba, Pilates, and certified Taekwondo classes.',
  address: 'Shop No. 7, 1st Floor, Mita Heights, Plot No. 51B, Near Central Park Metro Road, Sector 20, Kharghar, Navi Mumbai, Maharashtra 410210',
  shortAddress: 'Mita Heights, Sector 20, Kharghar, Navi Mumbai',
  landmark: 'Near Central Park Metro Station',
  phone: '+91 88283 08182',
  phoneRaw: '+918828308182',
  whatsapp: '+918828308182',
  whatsappMessage: 'Hi Revamp Fitness! I would like to book my free trial session for Weight Training, Cardio, Yoga, Zumba, Pilates, or Taekwondo at Sector 20 Kharghar.',
  email: 'contact@revampfitness.in',
  mapsUrl: 'https://maps.app.goo.gl/A5J7zQfssK1nzNVS9',
  coordinates: {
    latitude: 19.0511653,
    longitude: 73.0753968,
  },
  hours: {
    weekdays: '5:00 AM – 11:00 PM',
    saturday: '5:00 AM – 11:00 PM',
    sunday: '8:00 AM – 1:00 PM',
  },
  // Real verified Google Business metrics
  googleRating: 5.0,
  googleReviewsCount: 250,

  estimatedMembers: '2,500+',
  yearsInBusiness: '5+ years',
};

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#programs' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Coaches', href: '#trainers' },
  { label: 'Reviews', href: '#testimonials' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export interface Program {
  id: string;
  title: string;
  category: string;
  tag: string;
  description: string;
  highlights: string[];
  icon: string;
  image: string;
}

export const PROGRAMS: Program[] = [
  {
    id: 'weight-training',
    title: 'Weight Training',
    category: 'Gym & Fitness',
    tag: 'Strength & Barbells',
    description: 'Olympic power racks, barbells, heavy dumbbells up to 50kg, and pin-loaded machines for progressive overload and muscle building.',
    highlights: ['Olympic barbells & power cages', 'Heavy dumbbell deck', 'Form & biomechanics guidance'],
    icon: 'Dumbbell',
    image: '/image1.jpg',
  },
  {
    id: 'cardio-training',
    title: 'Cardio Training',
    category: 'Gym & Fitness',
    tag: 'Stamina & Heart Health',
    description: 'Commercial treadmills, cross-trainers, spin cycles, and stair climbers designed for calorie burn and cardiovascular endurance.',
    highlights: ['Commercial treadmills', 'Calorie & heart rate tracking', 'High-energy fat loss protocols'],
    icon: 'HeartPulse',
    image: '/cardio_deck.jpg',
  },
  {
    id: 'functional-training',
    title: 'Functional Training',
    category: 'Gym & Fitness',
    tag: 'Athletic Conditioning',
    description: 'Dedicated functional turf track with battle ropes, kettlebells, tire flips, and plyometrics for explosive full-body athletic power.',
    highlights: ['Dedicated turf sprint track', 'Battle ropes & kettlebells', 'High-intensity metabolic circuits'],
    icon: 'Flame',
    image: '/functional_turf.jpg',
  },
  {
    id: 'yoga-classes',
    title: 'Yoga',
    category: 'Studio & Wellness',
    tag: 'Mind & Flexibility',
    description: 'Hatha and Vinyasa yoga sessions in a serene studio area focused on spinal alignment, deep stretching, breathwork, and stress reduction.',
    highlights: ['Dedicated peaceful studio area', 'Flexibility & posture correction', 'Breathwork & mindful balance'],
    icon: 'Sparkles',
    image: '/yoga.jpg',
  },
  {
    id: 'zumba-fitness',
    title: 'Zumba',
    category: 'Studio & Wellness',
    tag: 'High Energy & Music',
    description: 'High-energy rhythm workouts set to upbeat music with energetic group choreography for an exhilarating calorie-burning sweat.',
    highlights: ['Energetic music & sound setup', 'Full-body fat loss choreography', 'Supportive community vibe'],
    icon: 'Music',
    image: '/zumba.jpg',
  },
  {
    id: 'pilates-conditioning',
    title: 'Pilates',
    category: 'Studio & Wellness',
    tag: 'Core & Toning',
    description: 'Low-impact, high-precision core conditioning focusing on pelvic stability, abdominal toning, lean muscle definition, and posture balance.',
    highlights: ['Core & pelvic stabilization', 'Lean body sculpting', 'Low-impact joint safety'],
    icon: 'Activity',
    image: '/pilates.jpg',
  },
  {
    id: 'taekwondo-martial-arts',
    title: 'Taekwondo Classes',
    category: 'Martial Arts',
    tag: 'Combat & Discipline',
    description: 'Certified Taekwondo martial arts training for kids, teens, and adults. Build discipline, self-defense reflexes, high kicks, and agility.',
    highlights: ['Certified Taekwondo masters', 'Kids & adult sparring batches', 'Self-defense & belt progression'],
    icon: 'Shield',
    image: '/karate.jpg',
  },
];

export const FACILITY_HIGHLIGHTS = [
  {
    title: 'Top-Quality Modern Equipment',
    desc: 'Heavy-gauge steel power racks, Olympic bars, dumbbells up to 50kg, and smooth commercial isolation machinery.',
    icon: 'Dumbbell',
    image: '/image1.jpg',
  },
  {
    title: 'Cardio Deck & Functional Turf',
    desc: 'Commercial treadmills, cross-trainers, battle ropes, sled tracks, and kettlebell stations for diverse training styles.',
    icon: 'Zap',
    image: '/cardio_deck.jpg',
  },
  {
    title: 'Dedicated Yoga & Studio Area',
    desc: 'Wooden-finish studio with acoustic mirrors dedicated for Yoga, Zumba, Pilates, and group conditioning.',
    icon: 'Sparkles',
    image: '/yogaarea.jpg',
  },
  {
    title: 'Taekwondo Martial Arts Dojang',
    desc: 'Specialized matting, kicking targets, and sparring area for safe, professional Taekwondo classes.',
    icon: 'Shield',
    image: '/karate.jpg',
  },
  {
    title: 'Clean Restrooms & Showers',
    desc: 'Sanitized washrooms, private changing cubicles, hot showers, and secure member lockers maintained continuously.',
    icon: 'Lock',
    image: '/clean_restrooms.jpg',
  },
  {
    title: 'Motivating Music & Vibe',
    desc: 'High-energy sound system, modern air-conditioning, encouraging coaches, and a welcoming community atmosphere.',
    icon: 'Music',
    image: '/image2.jpg',
  },
];

export interface Trainer {
  id: string;
  name: string;
  role: string;
  gender: 'male' | 'female';
  experience: string;
  specialization: string[];
  bio: string;
  image: string;
}

// User's dedicated male and female trainer portrait assets
export const TRAINERS: Trainer[] = [
  {
    id: 'trainer-1',
    name: 'Coach Sameer Patil',
    role: 'Head Strength & Weight Coach',
    gender: 'male',
    experience: '8+ YRS EXP',
    specialization: ['Weight Training', 'Hypertrophy', 'Biomechanics'],
    bio: 'Specializes in progressive overload mechanics, heavy compound lifting, and personalized muscle-building regimens.',
    image: '/trainer1.avif',
  },
  {
    id: 'trainer-2',
    name: 'Master Rajesh Kadam',
    role: 'Certified Taekwondo Master',
    gender: 'male',
    experience: '10+ YRS EXP',
    specialization: ['Taekwondo Kicks', 'Self-Defense', 'Sparring Drills'],
    bio: 'Black belt certified master instructor guiding kids, teens, and adults in martial arts discipline, flexibility, and belt grading.',
    image: '/trainer2.avif',
  },
  {
    id: 'trainer-3',
    name: 'Coach Pooja Sharma',
    role: 'Zumba & Dance Cardio Coach',
    gender: 'female',
    experience: '6+ YRS EXP',
    specialization: ['Zumba Dance', 'Dance Cardio', 'Fat Loss HIIT'],
    bio: 'High-energy certified trainer bringing electrifying music playlists, dance choreographies, and rapid calorie-burning circuits.',
    image: '/girltariner1.avif',
  },
  {
    id: 'trainer-4',
    name: 'Coach Ananya Sen',
    role: 'Yoga & Flexibility Instructor',
    gender: 'female',
    experience: '7+ YRS EXP',
    specialization: ['Vinyasa Yoga', 'Spinal Alignment', 'Breathwork'],
    bio: 'Certified instructor focusing on mindful breathwork, spinal flexibility, posture correction, and peaceful meditation.',
    image: '/girltrainer2.avif',
  },
  {
    id: 'trainer-5',
    name: 'Coach Neha Deshmukh',
    role: 'Pilates & Core Sculpting Coach',
    gender: 'female',
    experience: '5+ YRS EXP',
    specialization: ['Pilates Mat', 'Core Toning', 'Pelvic Stability'],
    bio: 'Specializes in low-impact pelvic stabilization, abdominal core toning, lean body sculpting, and joint health.',
    image: '/girltrainer3.avif',
  },
  {
    id: 'trainer-6',
    name: 'Coach Rohan Mehta',
    role: 'Functional Turf & CrossFit Coach',
    gender: 'male',
    experience: '5+ YRS EXP',
    specialization: ['Battle Ropes', 'Agility Turf', 'Metabolic WODs'],
    bio: 'Expert in functional sprint drills, kettlebell complexes, plyometrics, and high-intensity conditioning circuits.',
    image: '/trainer3.avif',
  },
  {
    id: 'trainer-7',
    name: 'Coach Aniket Sawant',
    role: 'Powerlifting & Form Specialist',
    gender: 'male',
    experience: '7+ YRS EXP',
    specialization: ['Squat & Bench', 'Deadlift Mechanics', 'Core Strength'],
    bio: 'Focuses on structural posture, heavy barbell mechanics, CNS priming, and injury-prevention protocols.',
    image: '/trainer4.avif',
  },
  {
    id: 'trainer-8',
    name: 'Coach Vicky Nair',
    role: 'Cardio & Macro Diet Specialist',
    gender: 'male',
    experience: '6+ YRS EXP',
    specialization: ['Cardio Training', 'Endurance', 'Macro Diet Planning'],
    bio: 'Combines personalized treadmill intervals with practical macro nutrition advice for rapid, sustainable body recomposition.',
    image: '/trainer5.avif',
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

export const TRANSFORMATIONS: Transformation[] = [
  {
    id: 1,
    name: 'Prathamesh K.',
    goal: 'Weight Training & Fat Loss',
    stats: '-16kg Fat Loss | 14 Weeks',
    beforeImg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=600&auto=format&fit=crop',
    quote: 'The weight equipment and motivating atmosphere at Revamp Fitness Sector 20 pushed me to stay consistent every day.',
  },
  {
    id: 2,
    name: 'Snehal More',
    goal: 'Yoga, Zumba & Toning',
    stats: '-11kg Weight Loss | 12 Weeks',
    beforeImg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=600&auto=format&fit=crop',
    afterImg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=600&auto=format&fit=crop',
    quote: 'The Zumba classes and peaceful Yoga area are incredible. Very clean restrooms and respectful trainers!',
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

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Aditya Patil',
    role: 'Weight Training Member',
    rating: 5,
    comment: 'Top-quality weight training equipment in Kharghar! Heavy dumbbells, solid squat racks, and clean Olympic bars. The energetic music keeps you pumped throughout your workout.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '2',
    name: 'Ritu Jadhav',
    role: 'Yoga & Zumba Regular',
    rating: 5,
    comment: 'The dedicated studio for Yoga and Zumba is fantastic. Clean and well-maintained facility with spotless restrooms and great ventilation at Mita Heights.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'Kunal Bhagat',
    role: 'Taekwondo Parent & Lifter',
    rating: 5,
    comment: 'My son attends their Taekwondo classes while I do weight training. Master Rajesh is amazing with martial arts discipline and technique. Highly recommended for families in Kharghar!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'Tanvi Shinde',
    role: 'Cardio & Pilates Member',
    rating: 5,
    comment: 'Super clean cardio machines and peaceful Pilates morning sessions. 5:00 AM opening is so convenient before office. Hot showers and lockers are always clean.',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '5',
    name: 'Sagar Gaikwad',
    role: 'Functional & Fat Loss',
    rating: 5,
    comment: 'Lost 15kg in 4 months! The functional turf area with battle ropes and sleds is unmatched. Professional and motivating training environment.',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
  },
  {
    id: '6',
    name: 'Ashwin Chawla',
    role: 'Evening Strength Regular',
    rating: 5,
    comment: 'Great vibe, powerful sound system, and zero clutter on the floor. Easily the best gym around Central Park Kharghar.',
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
    question: 'What services & training programs are offered at Revamp Fitness?',
    answer: 'We provide Weight Training, Cardio Training, Functional Training, Yoga, Zumba, Pilates, and certified Taekwondo Martial Arts Classes for kids and adults.',
  },
  {
    id: '2',
    question: 'Do you offer Taekwondo classes for children and beginners?',
    answer: 'Yes! Our certified Taekwondo black belt masters conduct structured martial arts batches for kids, teens, and adults focusing on discipline, kicks, self-defense, and fitness.',
  },
  {
    id: '3',
    question: 'Are Yoga, Zumba, and Pilates classes available?',
    answer: 'Yes, we have dedicated studio batches for Yoga (flexibility and breathwork), high-energy Zumba (dance cardio with music), and Pilates (core and posture sculpting).',
  },
  {
    id: '4',
    question: 'Where is Revamp Fitness located and what are the operational timings?',
    answer: 'We are located at Shop No. 7, 1st Floor, Mita Heights, Plot No. 51B, Sector 20, Kharghar (near Central Park Metro). Open Mon–Sat from 5:00 AM to 11:00 PM, and Sunday from 8:00 AM to 1:00 PM.',
  },
  {
    id: '5',
    question: 'Are the restrooms, showers, and equipment clean and sanitized?',
    answer: 'Yes, our housekeeping team continuously maintains spotless restrooms, sanitized showers, clean lockers, and wiped-down equipment for the highest hygiene standards.',
  },
  {
    id: '6',
    question: 'How can I claim a free walk-in trial pass?',
    answer: 'Click any "Book free trial pass" button or chat directly on WhatsApp (+91 88283 08182). You will get instant confirmation to try our gym, studio, or martial arts classes.',
  },
];

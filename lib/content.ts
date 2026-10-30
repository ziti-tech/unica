export const site = {
  name: 'UNICA Multi Speciality Therapy Centre',
  phone: '7200701127', landline: '04146 294770', whatsapp: '917200701127',
  origin: process.env.NEXT_PUBLIC_SITE_URL || 'https://unica-therapy-villupuram.alousiusambrose18.chatgpt.site',
  instagram: 'https://www.instagram.com/unica_rehabilitation_centre/',
  directions: 'https://maps.app.goo.gl/RRrFojFDiapXVgQT9?g_st=iw',
  map: 'https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3903.506104808841!2d79.48434067505943!3d11.939420688289081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTHCsDU2JzIxLjkiTiA3OcKwMjknMTIuOSJF!5e0!3m2!1sen!2sin!4v1793365784395!5m2!1sen!2sin',
};
export const image = {
 logo: '/images/logo-BiscYrva.webp', hero: '/images/therapy_banner2-Duinhy3i.webp',
 play: '/images/therapy_1-MliD7-vp.webp', care: '/images/therapy_3-TEkNuQPl.webp', team: '/images/team-DB-z1uWQ.webp',
};
export const therapies = [
 { slug:'occupational-therapy', name:'Occupational Therapy', short:'Little skills. Greater independence.', description:'Building the everyday skills that help your child play, learn, and take part with confidence.', image:'/images/Occupational_therapy-BJsVRAkP.webp', color:'peach', icon:'hand', areas:['Everyday routines and self-care','Sensory processing and play','Fine motor and pre-writing skills'], detail:'From holding a pencil to getting dressed, everyday activities can be opportunities to grow. Occupational therapy starts with understanding what matters to your child and family, then uses purposeful play and practical activities to support participation.' },
 { slug:'speech-therapy', name:'Speech Therapy', short:'Every expression matters.', description:'Helping children find their own ways to communicate, connect, and be understood.', image:'/images/Speech_therapy-DYXXaZSB.webp', color:'sage', icon:'speech', areas:['Understanding and using language','Speech sounds and clarity','Communication in everyday situations'], detail:'Communication takes many forms: words, gestures, sounds, and shared attention. Our approach meets your child where they are, using engaging activities and family involvement to support meaningful communication.' },
 { slug:'physiotherapy', name:'Physiotherapy', short:'Growing confidence in movement.', description:'Supporting balance, strength, and movement for more comfortable, confident everyday adventures.', image:'/images/physio-BIe8wjuY.webp', color:'lavender', icon:'move', areas:['Balance and coordination','Strength and functional movement','Walking and gait support'], detail:'Movement helps children explore their world. A personalised physiotherapy plan can support physical skills through appropriate exercises, play, and guidance for everyday activities, based on an individual assessment.' },
 { slug:'psychological-counselling', name:'Psychological Counselling', short:'A space to feel understood.', description:'A caring space to understand emotions, navigate challenges, and support family wellbeing.', image:'/images/Psychological_counselling-BZNC1j4Y.webp', color:'sand', icon:'heart', areas:['Emotional understanding','Coping with everyday challenges','Parent and family support'], detail:'Children and families deserve a space to be heard. Psychological counselling provides support to explore feelings, understand challenges, and develop practical strategies together, with respect for each family’s circumstances.' },
 { slug:'special-education', name:'Special Education', short:'Learning, in their own way.', description:'Making learning accessible through individualised teaching that celebrates each child’s strengths.', image:'/images/Special_education-C2zeHziK.webp', color:'blue', icon:'book', areas:['Individual learning needs','Foundational and pre-academic skills','Practical learning strategies'], detail:'There is more than one way to learn. Special education adapts activities and teaching approaches to your child’s needs, interests, and pace, helping them participate meaningfully in learning.' },
 { slug:'applied-behaviour-analysis', name:'Applied Behaviour Analysis', short:'Understanding opens possibilities.', description:'Understanding behaviour and supporting useful skills through respectful, personalised approaches.', image:'/images/Behavior_therapy-BoTcndHK.webp', color:'rose', icon:'sprout', areas:['Understanding behaviour in context','Communication and daily living skills','Collaborative family strategies'], detail:'Behaviour can be a way of communicating a need. ABA support begins with understanding the individual and their environment. Goals are discussed with families and focus on meaningful participation, practical skills, and respect for the child.' },
] as const;
export const journey = [
 ['First conversation','Tell us about your child, your questions, and what matters to your family.'],
 ['Understanding needs','We take time to understand strengths, interests, and areas where support may help.'],
 ['Personalised plan','Together, we shape meaningful goals and an approach that fits your child.'],
 ['Therapy & support','Purposeful sessions and practical family guidance bring the plan into everyday life.'],
 ['Reviewing progress','We reflect together, celebrate small steps, and adapt support as needs change.'],
];
export const programmes = ['Sensory integration','Play therapy','Group therapy','Pre-vocational training','Vocational training','Home programmes','Gait training','Aquatic therapy','Pain management','Voice therapy','Pre-writing skills'];

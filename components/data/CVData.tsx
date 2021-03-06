import { Occupation, LifeEvent } from '../d3/TimeLine';

export const occupationData: Array<Occupation> = [
  {
    id: '001',
    selected: true,
    title: 'Data Visualization Intern',
    company: 'Interactive Things',
    location: 'Switzerland',
    description:
      'Involved across the process of digital content creation. Working with designers on ideation, prototyping and client coordination as well as assisting developers with implementation from cleaning data, building web app features, and continuous integration and deployment.',
    skills: [
      'Web Design(HTML, CSS)',
      'Frontend(Typescript, React)',
      'Data Analysis (R, Tableau)',
      'Data Visualization (D3.js)',
    ],
    character: [
      'Multidisciplinary Teamplayer',
      'Self Motivated',
      'Problem Solver',
    ],
    category: 'Work',
    tag: ['coder'],
    start: new Date('2020-01-03'),
    end: new Date('2020-07-11'),
  },
  {
    id: '002',
    selected: true,
    title: 'Gardener',
    company: 'Der Holländer Pflanzencenter',
    location: 'Germany',
    description:
      'Responsible for designing and maintaining the nursery while interacting and problem solving for customers. Worked and practised in both spoken and written German. Additionally, kept the social media up-to-date with regular posts and content.',
    skills: [
      'Horticulture (N. European)',
      'German (B1)',
      'Landscaping (N. European)',
    ],
    character: ['Teamplayer', 'Task Oriented', 'Multilingual'],
    category: 'Work',
    tag: ['landscaper', 'farmer'],
    start: new Date('2019-03-01'),
    end: new Date('2019-10-31'),
  },
  {
    id: '003',
    selected: true,
    title: 'Intensive German (A1-B1)',
    company: 'SpeakEasy',
    location: 'Germany',
    description:
      'Intensive language course with focus on practical and conversational skills. Small classroom lectures with vocal practise and 1 on 1 conversation skills. Course taken in conjunction with language meet ups and immersion housing.',
    skills: ['German (A1-B1)'],
    character: [''],
    category: 'Education',
    tag: ['landscaper', 'coder'],
    start: new Date('2019-01-01'),
    end: new Date('2019-04-03'),
  },
  {
    id: '004',
    selected: true,
    title: 'Design Consultant',
    company: 'Lloyd Richards Design',
    location: 'UK',
    description:
      'Volunteered my design skills to assist local community projects with regenerative design problems.  Included Hardcliffe Elementary, Incredible Edible, Red Hill Bars, Bristol Fish Project, and Bearpit Bristol.',
    skills: [
      'Regenerative Design (Permaculture, Horticulture)',
      'Digital Design (CAD, Illistrations)',
      'Carpentry (Framing, Furniture)',
    ],
    character: ['Community Leader', 'Specialized Expert', 'Consultant'],
    category: 'Volunteer',
    tag: ['coder', 'landscaper', 'farmer'],
    start: new Date('2016-11-01'),
    end: new Date('2018-12-21'),
  },
  {
    id: '005',
    selected: true,
    title: 'Fellowship Programme',
    company: 'School for Social Entrepreneurs',
    location: 'UK',
    description:
      'Practical and theoretical course on running a social enterprise. Focus on leadership, business skills (finances, marketings, planning) and measuring impact in communities',
    skills: [
      'Entrepreneur (StartUps, Business Planning)',
      'Finances (Planning, Bookkeeping)',
      'Impact Assessment',
    ],
    character: ['Community Leader', 'Local Collaborator', 'Social Impact'],
    category: 'Education',
    tag: ['landscaper', 'farmer'],
    start: new Date('2016-10-01'),
    end: new Date('2017-10-01'),
  },
  {
    id: '006',
    selected: true,
    title: 'Regenerative Garden Designer',
    company: 'Lloyd Richards Design',
    location: 'UK',
    description:
      'Self employed garden designer and contractor focusing on residential clients and community groups. Designing ecologically gardens. Managing sub-contractors, materials, budgets. Complying with building regulations and planning permission.',
    skills: [
      'Business Development (Planning, Running)',
      'Regenerative Design (Permaculture, Horticulture)',
      'Landscaper (Design, Building, Maintenance)',
    ],
    character: ['Independant'],
    category: 'Work',
    tag: ['coder'],
    start: new Date('2016-04-01'),
    end: new Date('2018-10-01'),
  },
  {
    id: '007',
    selected: true,
    title: 'Senior Landscaper',
    company: 'Acer ltd',
    location: 'UK',
    description:
      'Worked with the team designers to impliment and build gardens for residencial clients.  Worked closely with the client to meet their needs while ording materials, scheduling labour and detailing production.',
    skills: ['Project Management'],
    character: ['Team Leader', 'Organized'],
    category: 'Work',
    tag: ['landscaper'],
    start: new Date('2015-08-01'),
    end: new Date('2016-02-01'),
  },
  {
    id: '008',
    selected: true,
    title: 'Farm Manager',
    company: 'La Loma Vida',
    location: 'Spain',
    description:
      'Ran day to day operations of a permaculture project, including managing volunteers, planting, watering and general maintenance.  Included design and builds of earth works and water collection systems.',
    skills: [''],
    character: [''],
    category: 'Volunteer',
    tag: ['coder'],
    start: new Date('2015-02-01'),
    end: new Date('2015-07-15'),
  },
  {
    id: '010',
    selected: true,
    title: 'WWOOFer Volunteer',
    company: 'WWOOF.org',
    location: 'Costa Rica, Spain, Morocco, Turkey',
    description:
      'Various jobs on organic farms across tropical and mediterranean climates. Included general labour, ongoing maintenance, crop rotation and earth works.',
    skills: [''],
    character: [''],
    category: 'Volunteer',
    tag: ['coder'],
    start: new Date('2014-10-01'),
    end: new Date('2015-01-01'),
  },
  {
    id: '012',
    selected: true,
    title: 'Permaculture Design Certificate',
    company: 'Permaculture Institute',
    location: 'Costa Rica',
    description:
      'Practical approach to design, based on participatory, community inclusion process. Land and resource management on multiple scales. Designing collaboratively with a multidisciplinary group',
    skills: [''],
    character: [''],
    category: 'Education',
    tag: ['coder'],
    start: new Date('2014-02-01'),
    end: new Date('2014-06-01'),
  },
  {
    id: '013',
    selected: true,
    title: 'System Analyst',
    company: 'Bowden Physiotherapy',
    location: 'Canada',
    description:
      'Examined existing systems in the physio clinic and researched new methods and technologies that would be used tp improve preformance and customer experiance.',
    skills: [''],
    character: [''],
    category: 'Work',
    tag: ['coder'],
    start: new Date('2013-09-01'),
    end: new Date('2013-12-21'),
  },
  {
    id: '014',
    selected: true,
    title: 'Orientation Coodinator',
    company: 'University of Calgary',
    location: 'Canada',
    description:
      'Organized and developed a week long orientation for incoming Masters Students.  Worked with the City of Calgary to introduce Architects to the urban development as well as a design spring looking at urban fabric.',
    skills: [''],
    character: [''],
    category: 'Volunteer',
    tag: ['architect'],
    start: new Date('2013-01-01'),
    end: new Date('2013-08-15'),
  },
  {
    id: '015',
    selected: true,
    title: 'Crew Leader',
    company: 'Greenworks',
    location: 'Canada',
    description:
      'Ran one of two landscaping crews, dealing with residencil clients and implimenting urban gardens.  Included managing schedules and other crew members resources on and off site.',
    skills: [''],
    character: [''],
    category: 'Work',
    tag: ['coder'],
    start: new Date('2013-04-22'),
    end: new Date('2013-08-30'),
  },
  {
    id: '016',
    selected: true,
    title: 'MArch Foundation',
    company: 'University of Calgary',
    location: 'Canada',
    description:
      'Foundation year of Architecture Masters with focus on history, design methodology and sustainability. Individual and group design assignments of various scale. CAD supported design process and model production.',
    skills: [''],
    character: [''],
    category: 'Education',
    tag: ['coder'],
    start: new Date('2012-09-01'),
    end: new Date('2013-04-21'),
  },
  {
    id: '017',
    selected: true,
    title: 'Baker',
    company: 'Fresh',
    location: 'Canada',
    description:
      'Responsible for filling bakery orders and breakfast deliveries.  Produced cakes, cookies, bars, and other desserts for a large showcase for the flagship store.',
    skills: [''],
    character: [''],
    category: 'Work',
    tag: ['coder'],
    start: new Date('2012-01-01'),
    end: new Date('2012-06-21'),
  },
  {
    id: '018',
    selected: true,
    title: 'Baker',
    company: 'Modern Jelly Donut',
    location: 'Canada',
    description:
      'Produced and filled orders of gourmet doughnuts.  Worked with several other bakers as a team to produce top quality products for business meetings, events, and store front customers.',
    skills: [''],
    character: [''],
    category: 'Work',
    tag: ['coder'],
    start: new Date('2011-06-01'),
    end: new Date('2011-12-21'),
  },
  {
    id: '021',
    selected: true,
    title: 'Landscaper',
    company: 'Dean Clarke',
    location: 'Canada',
    description:
      'Designed and built the garden and patio area for a summer home of a clients.  Managed and ordered materials on site while producing reports of ongoing work for client abroad.',
    skills: [''],
    character: [''],
    category: 'Work',
    tag: ['coder'],
    start: new Date('2010-04-21'),
    end: new Date('2010-09-01'),
  },
  {
    id: '020',
    selected: true,
    title: 'Store Clerk',
    company: 'Stor',
    location: 'Canada',
    description:
      'Served univercity students and faculty at a local conveniance store ran by the Student Union.  Responsible for opening and closing the store as well as taking in stock and resupplying.',
    skills: [''],
    character: [''],
    category: 'Work',
    tag: ['coder'],
    start: new Date('2009-09-01'),
    end: new Date('2011-04-21'),
  },
  {
    id: '019',
    selected: true,
    title: 'Bachelor of Arts',
    company: 'University of Calgary',
    location: 'Canada',
    description:
      'Bachelor degree in liberal arts with course work focus in fine arts and history. Minor in Visual Studies with focus in sculpture and woodworking. Technical proficiency in laboratory and workshop settings.',
    skills: [''],
    character: [''],
    category: 'Education',
    tag: ['coder'],
    start: new Date('2006-09-01'),
    end: new Date('2011-04-21'),
  },
];

export const lifeEventData: Array<LifeEvent> = [
  { id: '001', date: new Date('2020-01-03'), title: 'Moved to Switzerland' },
  { id: '002', date: new Date('2019-01-03'), title: 'Moved to Germany' },
  { id: '003', date: new Date('2015-08-03'), title: 'Moved to UK' },
  { id: '004', date: new Date('2014-08-01'), title: 'Moved to Spain' },
  {
    id: '005',
    date: new Date('2014-01-01'),
    title: 'Traveled Central America',
  },
  {
    id: '005',
    date: new Date('2012-08-01'),
    title: 'Started MArch',
  },
];

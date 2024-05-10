export type Education = {
  degree: string;
  achievements: string[];
  institution: string;
  date: string;
};

const education: Education[] = [{
  degree: 'Bachelor of Multimedia',
  achievements: ['GPA 6.1', 'Recipient of multimedia medal'],
  institution: 'Griffith University',
  date: '2004'
}, {
  degree: 'Diploma in Sociology',
  achievements: [],
  institution: 'Alison online university',
  date: '2021'
}, {
  degree: 'JavaScript ES6 short course',
  achievements: [],
  institution: 'Marcos Cáceres (Mozilla)',
  date: '2016'
},{
  degree: 'Intro to Functional Programming',
  achievements: [],
  institution: 'NICTA',
  date: '2015'
}]

export default education;

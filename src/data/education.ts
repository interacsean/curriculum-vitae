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
}]

export default education;

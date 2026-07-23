export interface Tech {
  name: string
  icon: string
}

const DEVICON = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const techs: Tech[] = [
  { name: 'Python', icon: `${DEVICON}/python/python-original.svg` },
  { name: 'Java', icon: `${DEVICON}/java/java-original.svg` },
  { name: 'JavaScript', icon: `${DEVICON}/javascript/javascript-original.svg` },
  { name: 'TypeScript', icon: `${DEVICON}/typescript/typescript-original.svg` },
  { name: 'C++', icon: `${DEVICON}/cplusplus/cplusplus-original.svg` },
  { name: 'HTML5', icon: `${DEVICON}/html5/html5-original.svg` },
  { name: 'CSS3', icon: `${DEVICON}/css3/css3-original.svg` },
  { name: 'MySQL', icon: `${DEVICON}/mysql/mysql-original.svg` },
  { name: 'PostgreSQL', icon: `${DEVICON}/postgresql/postgresql-original.svg` },
  { name: 'React', icon: `${DEVICON}/react/react-original.svg` },
  { name: 'Git', icon: `${DEVICON}/git/git-original.svg` },
  { name: 'Node.js', icon: `${DEVICON}/nodejs/nodejs-original.svg` },
]

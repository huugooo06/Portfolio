import {
    cssSvg, dockerSvg, gitSvg, htmlSvg, javaSvg, jsSvg, mongoSvg,
    mysqlSvg, nodeSvg, postmanSvg, vueSvg,
} from './svgs'

export const skills = [
    {
        name: 'Lenguajes de Programación',
        skills: [
            { name: 'HTML', svg: htmlSvg, level: 'Avanzado', description: 'Maquetación y estructuración semántica de sitios web.' },
            { name: 'CSS', svg: cssSvg, level: 'Intermedio', description: 'Diseño responsive y estilos modernos con Flexbox y Grid.' },
            { name: 'JavaScript', svg: jsSvg, level: 'Intermedio', description: 'Manipulación del DOM y lógica de aplicaciones web.' },
            { name: 'Java', svg: javaSvg, level: 'Básico', description: 'Programación orientada a objetos y desarrollo backend.' },
        ],
    },
    {
        name: 'Frameworks',
        skills: [
            { name: 'Vue.js', svg: vueSvg, level: 'Intermedio', description: 'Creación de SPAs y componentes reactivos.' },
            { name: 'Node.js', svg: nodeSvg, level: 'Básico', description: 'Desarrollo de APIs REST y gestión de servidores.' },
        ],
    },
    {
        name: 'Bases de Datos',
        skills: [
            { name: 'MySQL', svg: mysqlSvg, level: 'Intermedio', description: 'Diseño y gestión de bases de datos relacionales.' },
            { name: 'MongoDB', svg: mongoSvg, level: 'Básico', description: 'Bases de datos NoSQL y gestión de documentos.' },
        ],
    },
    {
        name: 'Herramientas',
        skills: [
            { name: 'Git', svg: gitSvg, level: 'Intermedio', description: 'Control de versiones y colaboración en proyectos.' },
            { name: 'Docker', svg: dockerSvg, level: 'Básico', description: 'Creación y gestión de contenedores para aplicaciones.' },
            { name: 'Postman', svg: postmanSvg, level: 'Avanzado', description: 'Pruebas y depuración de APIs REST.' },
        ],
    },
]

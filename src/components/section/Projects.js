import styles from './Projects.module.css';
import Card from '../elements/Card';
import lpdnc from '../../image/projects/lpdnc.svg'
import ButtonA from '../elements/ButtonA';

function Projects () {
    return (
        <div id="projects" className={styles.projects}>
            <h1>Projetos</h1>
            <Card 
                img={lpdnc}
                title='LP-DNC'
                tech='HTML, CSS e Javascript'
                description='Projeto Front-End para realizar pipipi e popo.'
                repo='https://github.com/felipedestro/landing-page'
                site='https://base-dnc-landing-page.netlify.app/'
            />
            <Card 
                img={lpdnc}
                title='LP-DNC'
                tech='HTML, CSS e Javascript'
                description='Projeto Front-End para realizar pipipi e popo.'
                repo='https://github.com/felipedestro/landing-page'
                site='https://base-dnc-landing-page.netlify.app/'
            />
            <div className={styles.center}>
                <p>Para acessar o repositório completo: </p>
                <ButtonA link='https://github.com/felipedestro' text='Clique Aqui!'/>
            </div>
        </div>
    )
}

export default Projects;
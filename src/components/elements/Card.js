import styles from './Card.module.css';
import ButtonB from '../elements/ButtonB'

function Card ({img, title, tech, description, repo, site}) {
    return (
        <div className={styles.card}>
            <a href={site} target='_blank'>
                <img src={img} alt='ERROR'/>
            </a>
            <section>
                <h3>{title}</h3>
                <p><strong>Tecnologia:</strong>{tech}</p>
                <p>{description}</p>
                <ButtonB link={repo} text='Acesse meu repositório'/>
            </section>
        </div>
    )
}

export default Card;
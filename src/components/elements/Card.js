import styles from './Card.module.css';
import ButtonB from '../elements/ButtonB';
import { useState } from 'react';

function Card ({img, title, tech, description, repo, site}) {

    const [info, setInfo] = useState(false);

    function infoOn () {
        setInfo(true);
    }

    function infoOff () {
        setInfo(false);
    }

    return (
        <div className={styles.card} onMouseLeave={infoOff}> 
            <a href={site} target='_blank' onMouseEnter={infoOn}>
                <img src={img} alt='ERROR'/>
            </a>
            {
                info === true &&
                (
                    <section>
                        <h3>{title}</h3>
                        <p><strong>Tecnologia:</strong>{tech}</p>
                        <p>{description}</p>
                        <ButtonB link={repo} text='Acesse meu repositório'/>
                    </section>
                )
            }
        </div>
    )
}

export default Card;
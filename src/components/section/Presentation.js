import ButtonA from '../elements/ButtonA';
import styles from './Presentation.module.css';
import { useEffect, useState } from 'react';

function Presentation () {

    const [text, setText] = useState('');
    const toRotate = ['Felipe Destro!', 'Dev Front End', 'o próximo Dev Back End'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 110;
    const [delta, setDelta] = useState(40);

    useEffect(() => {
        let ticker = setInterval(() => {
            toType()
        }, delta);
        return () => { clearInterval(ticker); }
    }, [text]);

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length +1);
        
        setText(updateText);

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setDelta(period);
            setLoop(loop +1);
        }
    }

    return (
        <div id="presentation" className={styles.presentation}>
            <h4><strong>Bem vindo ao meu Portifólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. <br />
                Como Product Manager, eu tenho o compromisso de resolver problemas <br />
                complexos e trazer resultados excepcionais para os negócios. <br />
                Meus projetos já geraram milhões de reais em receita anual <br />
                estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link='https://github.com/felipedestro' text='Conecte-se comigo!'/>
        </div>
    )
}

export default Presentation;
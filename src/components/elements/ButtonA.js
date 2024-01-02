import sytles from './ButtonA.module.css';

function ButtonA ({link, text}) {
    return (
        <div>
            <a href={link} target='_blank'>
                <button className={sytles.btn}> {text} </button>
            </a>
        </div>
    )
}

export default ButtonA;
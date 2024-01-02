import sytles from './ButtonA.module.css';

function ButtonA ({link, text}) {
    return (
        <>
            <a href={link} target='_blank'>
                <button className={sytles.btn}> {text} </button>
            </a>
        </>
    )
}

export default ButtonA;
import classes from './Modal.module.css'

const Modal = (props) => {
    return (
        <div className={classes.bg} onClick={props.close}>
            <div className={classes.modal}>
                <header>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.body}>
                    <p>{props.msg}</p>
                </div>
                <footer>
                    <button className={classes.btn} onClick={props.close}>x</button>
                </footer>
            </div>
        </div>
    )
}

export default Modal;
import { Fragment } from 'react'
import { createPortal} from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} />
}

const ModalOverlay = props => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')
console.log(portalElement, 'portalElement')

const Modal = props => {
    return <Fragment>
            {createPortal(<Backdrop />, portalElement)}
            {createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </Fragment>
    };

    
export default Modal;

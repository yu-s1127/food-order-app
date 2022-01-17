import { FC, Fragment } from 'react'
import ReactDOM from 'react-dom'

import classes from './Modal.module.css'

interface Props {
  onClose?: () => void
}

const Backdrop: FC<Props> = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />
}

const ModalOverlay: FC = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  )
}

const portalElement = document.getElementById('overlays') as HTMLElement

const Modal: FC<Props> = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement,
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement,
      )}
    </Fragment>
  )
}

export default Modal

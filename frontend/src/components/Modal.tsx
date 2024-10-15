import { ReactNode } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components"

const Backdrop = styled.div`
    position: absolute;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    background-color: black;
`

const ModalContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 1rem;
    border-radius: 0.3rem;
    z-index: 20;
`

function Modal ({ children, visible, onClose }: { children: ReactNode, visible: boolean, onClose: () => any }) {
    if(!visible) return null

    const modals = document.getElementById("modals")!
    return createPortal(
        <>
            <Backdrop />
            <ModalContainer>
                {children}
                <button onClick={onClose}>Close Modal</button>
            </ModalContainer>
        </>,
        modals
    )
}

export default Modal
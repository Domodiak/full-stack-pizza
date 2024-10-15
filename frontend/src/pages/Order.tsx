
import Menu from "../components/Menu"
import Cart from "../components/Cart"
import Header from "../components/Header"
import styled from "styled-components"

const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

function Order() {
    return (
        <PageContainer>
            <Header />
            <div>
                <Menu />
                <Cart />
            </div>
        </PageContainer>
    )
}

export default Order
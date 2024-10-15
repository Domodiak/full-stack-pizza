import styled from "styled-components"
import Logo from "./Logo"
import User from "./User"
import Notifications from "./Notifications"
import SearchInMenu from "./SearchInMenu"

const HeaderContainer = styled.header`
    width: 100vw;
    padding: 1rem;
    background-color: gray;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const RightSide = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    height: 100%;
`

function Header() {
    return (
        <HeaderContainer>
            <Logo size={32} link={true} />
            <RightSide>
                <SearchInMenu />
                <Notifications />
                <User />
            </RightSide>
        </HeaderContainer>
    )
}

export default Header
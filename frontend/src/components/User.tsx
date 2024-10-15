import PersonIcon from '@mui/icons-material/Person';
import styled from 'styled-components';

const PersonCircle = styled.div`
    border-radius: 100%;
    overflow: hidden;
    background: white;
    aspect-ratio: 1;
    width: 32px;
`

function User() {
    return (
        <>
            <PersonCircle>
                <PersonIcon style={{ color: "gray", width: "140%", height: "140%", transform:"translateX(-15%)", position: "relative" }} />
            </PersonCircle>
        </>
    )
}

export default User
import styled from "styled-components"

const Input = styled.input`
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
`

function SearchInMenu() {
    return (
        <Input type="text" placeholder="Search menu" />
    )
}

export default SearchInMenu
import styled from "styled-components"

const Container = styled.div`
    margin: 8px;
    border: 1px solid lightgrey;
    border-radius: 5px;
`
const Column = ({ children }) => {
    return (
        <Container>
           {children} 
        </Container>
    )
}

export default Column

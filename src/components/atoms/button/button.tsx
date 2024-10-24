import styled from "styled-components";


interface ButtonProps {
    
}

const button = styled.button`
    background: ${(props)=> props.theme.colors.primary}
`

export default button
import styled from "styled-components";

type StyledButtonPropsType = {
    color?: string
    fontSize?: string
}

export const StyledBtn = styled.button<StyledButtonPropsType>`
    border: none;
    background-color: ${props => props.color || '#10CD5AFF'};
    padding: 10px 20px;
    color: #193505;
    font-size: ${props => props.fontSize || '2rem' };
    font-weight: bold;
    border-radius: 5px;

    &:hover {
        background-color: #0077ff;
        color: white;
    }
`

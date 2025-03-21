import styled from "styled-components";
import {MyAnimation} from "../styles/animations/Animations";

export const StyledBtn = styled.button`
    border: none;
    background-color: aqua;
    padding: 10px 20px;
    color: blue;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: #0077ff;
        color: white;
    }

    &:last-child {
        background-color: chartreuse;
    }
`

// Наследуемся от StyledBtn
export const SuperButton = styled(StyledBtn)`
    border-radius: 5px;
    background-color: #bf9541;
    color: #05352c;
    &:hover {
        animation: ${MyAnimation} 2s ease-in-out infinite;
    }
`
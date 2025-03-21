import styled, {css} from "styled-components";

type StyledButtonPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
    btnType: "primary" | "outlined"
    active?: boolean
}

export const StyledBtn = styled.button<StyledButtonPropsType>`
    border: none;
    padding: 10px 20px;
    font-size: ${props => props.fontSize || '2rem'};
    font-weight: bold;
    border-radius: 5px;

    //outlined
    ${props => props.btnType === 'outlined' && css<StyledButtonPropsType>`
        border: 2px solid ${props => props.color || '#10CD5AFF'};
        color: ${props => props.color || '#10CD5AFF'};
        background-color: transparent;

        &:hover {
            border-color: #a85fd8;
            color: #a85fd8;
            background-color: transparent;
        }
    `} 
        
     //primary
    ${props => props.btnType === 'primary' && css<StyledButtonPropsType>`
        background-color: ${props => props.color || '#a85fd8'};
        color: #10cd5a;
        
        &:hover {
            background-color: #10CD5AFF;
            color: #A85FD8FF;
        }
    `}
    
    //active
    ${props => props.active && css<StyledButtonPropsType>`
        box-shadow: 5px 5px 5px 5px rgba(168, 95, 216, 0.51);

        &:hover {
            box-shadow: 5px 5px 5px 5px rgba(16, 205, 90, 0.42)
        }
    `}
`

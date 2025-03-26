import React from 'react';
import styled from "styled-components";
import {StyledBtn} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {theme} from "./styles/Theme.styled";

function App() {
  return (
    <div className="App">
        <Box>
{/*            <StyledBtn color={'red'} fontSize={'20px'}>Hello</StyledBtn>
            <StyledBtn color="#320535FF">Hello</StyledBtn>
            <StyledBtn fontSize={'30px'}>Hello</StyledBtn>*/}

            <StyledBtn color={theme.colors.primary} btnType={'primary'} active >Hello</StyledBtn>
            <StyledBtn color={theme.colors.secondary} btnType={"outlined"} >Hello</StyledBtn>
        </Box>
    </div>
  );
}

const Box = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    
    //Обращаемся ко всем вложеным button по тегу 
    button {
        cursor: pointer;
    }

    //Обращаемся ко всем вложенной компоненте
    ${Link} {
        cursor: zoom-in;
    }
    
    @media ${theme.media.tablet} {
        flex-direction: column;
    }
`
export default App;

import React from 'react';
import styled from "styled-components";
import {StyledBtn, SuperButton} from "./components/Button.styled";
import {Link} from "./components/Link.styled";
import {Menu} from "./components/Menu.styled";

function App() {
  return (
    <div className="App">
        <Menu>
            <ul>
                <li><a href="#">menu item 1</a></li>
                <li><a href="#">menu item 2</a></li>
                <li><a href="#">menu item 3</a></li>
            </ul>
        </Menu>
        <Box>
            {/*Используем button как ссылку*/}
            <StyledBtn as='a' href={'#'}>Link</StyledBtn>

            {/*Используем кастомный компонент в as*/}
            <StyledBtn as={Link} href={'#'}>LinkComponent</StyledBtn>

            <StyledBtn>Hello</StyledBtn>
            <SuperButton>SuperButton</SuperButton>
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
    
    @media screen and (max-width: 800px) {
        flex-direction: column;
    }
`
export default App;

import styled from "styled-components"

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
`

export const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 12px;
    width: 210px;
    height: 58px;
    border-radius: 30px;
    background: rgba(31, 95, 163, 1);
    text-align: center;
    font-weight: 400;
    font-size: 24px;
    cursor: pointer;
`

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;  
    width: 500px;
    padding: 45px;
    margin-left: 52px;
`
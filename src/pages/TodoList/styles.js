import styled from "styled-components";

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

export const SubTitulo = styled.p`
    font-size: 20px;
    font-weight: 700;
    background-color: transparent;
    color: #2b2a27;
`

/* Lado esquerdo */
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;
`

/* Lado direito */
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;  
    width: 500px;
    height: fit-content;
    padding: 45px;
    margin-left: 52px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 45px;
    background-color: #fff;
    box-shadow: 0px 40px 100px 0px rgba(0, 0, 0, 0.08);
    box-shadow: 0px 10px 80px 0px rgba(0, 0, 0, 0.06);
    box-shadow: 0px 2px 15px 0px rgba(0, 0, 0, 0.12);
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
`

export const LogoImage = styled.img`
    margin-right: 8px;
    width: 7rem;
`

export const Headline = styled.div`
    display: flex;
    align-items: center;
`

export const SubHeadLine = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: normal;
    font-style: normal;
    margin-top: 16px;
`

export const TaskInfo = styled.input`
    display: flex;
    flex-direction: column;
    width: 410px;
    padding: 15px 15px 10px 15px;
    justify-content: center;
    align-items: flex-start;
    gap: 5px;
    border: none;
    outline: none;
    border-bottom: 2px solid rgba(53, 56, 62, 0.05);
    font-size: 22px;
    font-weight: 600;
    line-height: normal;
    background-color: transparent;
    color: #2b2a27;
`
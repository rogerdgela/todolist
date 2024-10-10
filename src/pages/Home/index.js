import Titulo from "../../components/Titulo";

import { MainContainer, Container, LeftContainer, Button, RightContainer } from "./styles";

import HomeImg from "../../assets/images/home.png";
import { useNavigate } from "react-router-dom";

export default function Component() {
    const navigate = useNavigate()
    function navegPages() {
        navigate('/todolist/')
    }

    return (
        <MainContainer>
            <Container>
                <LeftContainer>
                    <Titulo>
                        Organize sua vida com <span>simplicidade e eficiência</span>
                    </Titulo>
                    <Button onClick={navegPages}>Iniciar</Button>
                </LeftContainer>

                <RightContainer>
                    <img src={HomeImg} alt="Imagem da Home" />
                </RightContainer>
            </Container>
        </MainContainer>
    );
}

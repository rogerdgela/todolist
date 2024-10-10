import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import TodoListImg from "../../assets/images/logo.png";
import Tarefa from "../../components/Tarefa";
import Titulo from "../../components/Titulo";
import TituloPreto from "../../components/TituloPreto";
import {
    Container, MainContainer,
    LeftContainer, Headline, SubHeadLine,
    RightContainer, SubTitulo, LogoImage, TaskInfo
} from "./styles";

export default function Component() {
    const [tasks, setTasks] = useState([])
    const taskText = useRef("");

    useEffect(() => {
        async function listTasks () {
            const {data: taskList} = await axios.get("https://universodev.herokuapp.com/api/todolist/")
            setTasks(taskList)
        }

        listTasks()
    }, [])

    async function insertNewTask(event) {
        if (event.key === "Enter") {
            const {data: newTaskInfo} = await axios.put("https://universodev.herokuapp.com/api/todolist/", {text: taskText.current.value})

            setTasks([...tasks, {id: newTaskInfo.id, text: newTaskInfo.text}])
            taskText.current.value = ""
        }
    }

    return (
        <MainContainer>
            <Container>
                <LeftContainer>
                    <Headline>
                        <LogoImage src={TodoListImg} alt="Logotipo" />
                        <Titulo>Organize sua vida com <span>simplicidade e eficiência</span></Titulo>
                    </Headline>
                    <SubHeadLine>Adicione ao lado as tarefas que deseja fazer hoje e não pare até ela estar vazia!</SubHeadLine>
                </LeftContainer>

                <RightContainer>
                    <TituloPreto children="Minhas tarefas" />
                    <SubTitulo>Tarefas do dia...</SubTitulo>
                    {
                        tasks.map(task => (
                            <Tarefa id={task.id} text={task.text} updateTasks={setTasks} />
                        ))
                    }

                    <TaskInfo type="text" placeholder="Digite sua próxima tarefa aqui..." onKeyDown={insertNewTask} ref={taskText} />
                </RightContainer>
            </Container>
        </MainContainer>
    );
}

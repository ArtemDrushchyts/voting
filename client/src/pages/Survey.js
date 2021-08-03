import React, {useContext, useState} from 'react'
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {Context} from "../index";
import { observer } from 'mobx-react-lite'
import {LOGIN_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";

const Survey = observer( () => {
    const [propose, setPropose] = useState(false);
    const {user} = useContext(Context);
    const history = useHistory();
    const [message, setMessage] = useState('');
    const [front, setFront] = useState(false);
    const [back, setBack] = useState(false);

    const sendResult = () => {
        console.log({message, front, back })
        alert('Ответ записсан!')
    }

    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className="p-5">
                <h2 className="m-auto">Ваша роль в компании?</h2>
                <Form className="d-flex flex-column">
                    <Form.Check
                        type='checkbox'
                        id='checkbox1'
                        label='Frontend разработчик'
                        checked={front}
                        onChange={()=> setFront(!front)}
                    />
                    <Form.Check
                        type='checkbox'
                        id='checkbox2'
                        label='Backend разработчик'
                        checked={back}
                        onChange={()=> setBack(!back)}
                    />

                    { propose ?
                        <Form.Control
                            placeholder="Введите ваше предложение"
                            type='text'
                            id='text-message'
                            label="что-то другое"
                            onChange={ e => setMessage(e.target.value) }
                        />
                        :
                        <Form.Check
                        type="checkbox"
                        id="Что-то другое"
                        label="Что-то другое"
                        value={message}
                        onClick={() => setPropose(true)}
                        />
                    }
                    <Button
                        className="align-items-center"
                        style={{marginTop: "30px"}}
                        type="submit"
                        onClick={!user._isAuth ?
                            () => history.push(LOGIN_ROUTE) :
                            () => sendResult()

                        }
                    >
                        Отправить
                    </Button>
                </Form>
            </Card>
        </Container>
    )
});

export default Survey

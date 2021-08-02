import React, { useContext } from 'react';
import { Navbar, Container, Nav, Button} from 'react-bootstrap';
import { Context } from '../index';
import {NavLink, useHistory} from 'react-router-dom';
import { LOGIN_ROUTE, SURVEY_PAGE } from '../utils/consts';
import {observer} from 'mobx-react-lite';

const NavBar = observer (() => {
    const {user} = useContext(Context);
    const history = useHistory();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <Navbar bg="dark" variant="dark">
        <Container>
            <NavLink style={{color:'white'}} to={SURVEY_PAGE}>Пройти опрос</NavLink>
            {user.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}}>
                    
                    <Button
                        variant={"outline-light"}
                        onClick={() => logOut()}
                        className="ml-2"
                    >
                            Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                <Button variant={"outline-light"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                </Nav>
            }
        </Container>
    </Navbar>
    )
});

export default NavBar

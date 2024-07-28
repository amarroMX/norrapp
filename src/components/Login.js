import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Feature from './Feature';
import BackgroundLoginImage from '../assets/img/background_login_norra.jpg'




function Login() {

    return (
        <Container className="g-0" fluid={true}>
            <Row className="g-0">
                <Col className="vh-100" xs={12} md={5}>
                     <Image className="w-100 h-100 object-fit-cover" src={BackgroundLoginImage} alt="Login"/>
                </Col>
                <Col style={{ backgroundColor: '#a3a656' }} className="vh-100" xs={12} md={2}>
                    <Feature></Feature>
                </Col>
                <Col className="vh-100" xs={12} md={5}>
                   <p>form goes here!</p>
                </Col>
            </Row>
        </Container>
    )

}

export default Login;

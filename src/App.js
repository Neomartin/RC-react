
// STYLES
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// COMPONENTS
import Header from './shared/header/header';
import Footer from './shared/footer/footer';
import { Aside } from './shared/aside/aside';

//BOOSTRAP COMPONENTS
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Fragment } from 'react';


function App() {
  const user = {
    name: 'Jhon',
    surname: 'Doe',
    email:  'jhondoe@gmail.com',
    password: '12345678',
    ROLE: 'ADMIN'
  }
  const color= 'danger'
  return (
    <Fragment>
      <Header userProp={user} bgColor={color}/>
        <Container fluid="lg">
          <Row>
            <Col xs={12} lg={9}>
              <main>
                <section>
                  <Button>BOTÓN DE BOOSTRAP</Button>
                  <h1>Hola mundo</h1>
                  <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                  <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                  <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                  <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                  <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                  <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                  <p>lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                </section>
              </main>
            </Col>
            <Col xs={12} lg={3}>
              <Aside />
            </Col>
          </Row>
        
          
      </Container>
        
      <Footer />
    </Fragment>
  );
}

export default App;

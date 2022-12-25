// import logo from './logo.svg';
import { useState } from 'react';
// import './App.css';
import LoginPage from './LoginPage/indexLoginPage';
import { DashboardPage } from './DashBoardPage/indexDashboardPage';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [loginState,setLoginState] = useState(null)
  // console.log(loginState)
  return (
    <Container  className='container-fluid'>
        <Row>
          <Col></Col>
          <Col>
            <Card>
            {
                loginState 
                  ? <DashboardPage getter={loginState} logout={e=>setTimeout(()=> setLoginState(e),3000)}/> 
                  : <LoginPage className={'mt-5'} onLoginEvent={e=>setTimeout(()=>setLoginState(e),3000)} />
                  }
            </Card>
          </Col>
          <Col></Col>
        </Row>  
    </Container>
  )
}

export default App;

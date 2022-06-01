import './App.css';
import { useState } from 'react';
import { Button, Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import data from './data';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Detail from './routes/Detail';

function App() {
  const [shoes] = useState(data);
  const navigate = useNavigate();

  const Table = (props) => {
    return (
      <>
        {shoes.map(function (a, i) {
          return (
            <div className="col-md-4">
              <img
                src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'}
                width="80%"
              ></img>
              <h4>{props.shoes[i].title}</h4>
              <p>{props.shoes[i].content}</p>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}
            >
              Detail
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="container">
                <div className="row">
                  <Table shoes={shoes} />
                </div>
              </div>
            </>
          }
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>member 페이지</div>} />
          <Route path="location" element={<div>location 페이지</div>} />
        </Route>
        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양말 서비스</div>} />
          <Route path="two" element={<div>생일 기념 쿠폰 받기</div>} />
        </Route>
        <Route path="*" element={<div>없는 페이지 입니다.</div>} />
      </Routes>
    </div>
  );
}

const About = () => {
  return (
    <div>
      <h4>
        <Outlet></Outlet>
        입니다
      </h4>
    </div>
  );
};

const Event = () => {
  return (
    <div>
      <h4>
        오늘의 이벤트
        <Outlet></Outlet>
      </h4>
    </div>
  );
};

export default App;

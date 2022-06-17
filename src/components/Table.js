import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import apiRequest from '../api/index';

const Table = (props) => {
  const navigate = useNavigate();
  const Btn = styled.button`
    margin-left: 500px;
    width: 10%;
  `;
  console.log();
  return (
    <>
      {props.shoes.map(function (a, i) {
        return (
          <div
            key={i}
            className="col-md-4"
            onClick={() => {
              navigate('/detail/' + i);
            }}
          >
            <img
              src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'}
              width="80%"
            ></img>
            <h4>{props.shoes[i].title}</h4>
            <p>{props.shoes[i].content}</p>
          </div>
        );
      })}
      <Btn
        key="tableBtn"
        onClick={() => {
          axios
            .get('https://codingapple1.github.io/shop/data2.json')
            .then((data) => {
              console.log(data.data);
            })
            .catch(() => {
              console.log('fail!!!!!!!');
            });
        }}
      >
        버튼
      </Btn>
    </>
  );
};

export default Table;

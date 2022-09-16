import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';

const CounterContainer = ({ number, increase, decrease }) => (
  <Counter number={number} onIncrease={increase} onDecrease={decrease} />
);

//리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기위해 설정하는 함수
const mapStateToProps = (state) => ({ number: state.counter.number });

//액션 생성 함수를 컴포넌트의 props로 넘겨주기위해 사용하는 함수
const mapDispatchToProps = (dispatch) => ({
  increase: () => {
    console.log('increase');
  },
  decrease: () => {
    console.log('decrease');
  },
});

export default CounterContainer;

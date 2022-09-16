import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease } from '../modules/counter';
import { bindActionCreators } from 'redux';
const CounterContainer = ({ number, increase, decrease }) => (
  <Counter number={number} onIncrease={increase} onDecrease={decrease} />
);

//리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기위해 설정하는 함수
const mapStateToProps = (state) => ({ number: state.counter.number });

//액션 생성 함수를 컴포넌트의 props로 넘겨주기위해 사용하는 함수
//일일이 dispatch를 감싸주는건 귀찮음 bindActionCreators 유틸 함수를 사용하면 편함
const mapDispatchToProps = (dispatch) => {
  bindActionCreators({ increase, decrease }, dispatch);
};

//리덕스와 연결해주는 함수 connect를 호출하면 또 다른 함수를 반환 반환된 함수에 컴포넌트를 파라미터로 넣어 주면
//리덕스와 연동된 컴포넌트가 만들어짐

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

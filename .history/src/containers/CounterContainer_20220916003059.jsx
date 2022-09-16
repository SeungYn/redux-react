import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';

const CounterContainer = ({ number, increase, decrease }) => (
  <Counter number={number} onIncrease={increase} onDecrease={decrease} />
);

export default CounterContainer;

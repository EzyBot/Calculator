import React, { useState } from 'react';
import Display from './Display';
import Calculator from './Calculator';
import './App.css';

const App = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleExpressionChange = (newExpression) => {
    setExpression(newExpression);
  };

  const handleResultChange = (newResult) => {
    setResult(newResult);
  };

  return (
    <div className="app">
      <h1>CALCULATOR</h1>
      <Display expression={expression} result={result} />
      <Calculator
        expression={expression}
        onExpressionChange={handleExpressionChange}
        onResultChange={handleResultChange}
      />
    </div>
  );
};

export default App;
import React from 'react';
import Button from './Button';
import './App.css';

const Calculator = ({ expression, onExpressionChange, onResultChange }) => {
  const handleButtonClick = (value) => {
    let newExpression = expression + value;
    onExpressionChange(newExpression);
  };

  const handleEqualClick = () => {
    try {
      const result = eval(expression);
      onResultChange(result.toString());
    } catch (error) {
      onResultChange('Error');
    }
  };

  const handleClearClick = () => {
    onExpressionChange('');
    onResultChange('');
  };

  return (
    <div className="calculator">
      <div className="row">
        <Button value="7" onClick={handleButtonClick} />
        <Button value="8" onClick={handleButtonClick} />
        <Button value="9" onClick={handleButtonClick} />
        <Button value="/" onClick={handleButtonClick} />
      </div>
      <div className="row">
        <Button value="4" onClick={handleButtonClick} />
        <Button value="5" onClick={handleButtonClick} />
        <Button value="6" onClick={handleButtonClick} />
        <Button value="*" onClick={handleButtonClick} />
      </div>
      <div className="row">
        <Button value="1" onClick={handleButtonClick} />
        <Button value="2" onClick={handleButtonClick} />
        <Button value="3" onClick={handleButtonClick} />
        <Button value="-" onClick={handleButtonClick} />
      </div>
      <div className="row">
        <Button value="0" onClick={handleButtonClick} />
        <Button value="." onClick={handleButtonClick} />
        <Button value="=" onClick={handleEqualClick} />
        <Button value="+" onClick={handleButtonClick} />
      </div>
      <div className="row">
        <Button value="C" onClick={handleClearClick} />
      </div>
    </div>
  );
};

export default Calculator;

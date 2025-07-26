import React from 'react';
import ButtonStyle from './Button.Style';

function Button({ text, size = "medium", variant = "filled", onClick }) {
  return (
      <ButtonStyle.Button size={size} variant={variant} onClick={onClick}>
        {text}
      </ButtonStyle.Button>
  );
}

export default Button;

import React from 'react';
import ButtonStyle from './Button.Style';

function Button({ text, size = "medium", variant = "filled" }) {
  return (
    <ButtonStyle.Button size={size} variant={variant}>
      {text}
    </ButtonStyle.Button>
  );
}

export default Button;

import React, { InputHTMLAttributes } from 'react';
import { Link } from 'react-router-dom';
import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

const Input: React.FC<InputProps> = ({label, name, ...rest}) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  )
}

export default Input;
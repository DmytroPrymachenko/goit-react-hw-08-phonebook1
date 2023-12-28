import { useState } from 'react';
import { ButtonType, FormsDiv, InputName, InputPhone, LabelName, LabelPhone } from './StylesJSX/FormStyles';
import { useDispatch, useSelector } from 'react-redux';
// import { nanoid } from '@reduxjs/toolkit';

import { selectContacts } from 'store/selector';
import { addContactThunk } from 'store/CreateAsyncThunk';

export const Form = () => {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onChangeState = e => {
    const { value, name } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    let isExists = contacts.some(el => el.name.toLowerCase() === name.toLowerCase());

    const newContact = {
      // id: nanoid(),
      name,
      number,
    };
    if (isExists) {
      alert(`${name} is already in contacts`);
    } else {
      dispatch(addContactThunk(newContact));
      setName('');
      setNumber('');
    }
  };

  return (
    <FormsDiv onSubmit={onSubmitForm}>
      <LabelName htmlFor="name">Name</LabelName>
      <InputName onChange={onChangeState} id="name" name="name" type="text" value={name} />
      <LabelPhone htmlFor="phone">Phone</LabelPhone>
      <InputPhone onChange={onChangeState} id="phone" name="number" type="tel" value={number} />
      <ButtonType type="submit">BUTTON</ButtonType>
    </FormsDiv>
  );
};

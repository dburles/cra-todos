import React from 'react';
import Todos from '../components/Todos';

const props = {
  loading: false,
  items: [
    {
      _id: '1',
      createdAt: new Date(),
      text: 'hello',
      isChecked: false,
    },
    {
      _id: '2',
      createdAt: new Date(),
      text: 'hello again',
      isChecked: false,
    },
  ],
  onSubmit(text) {
    console.log(text);
  },
  onRemove(_id) {
    console.log(_id);
  },
};

function TodosWithData() {
  return <Todos {...props} />;
}

export default TodosWithData;

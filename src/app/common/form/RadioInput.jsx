import React from 'react';
import { Form } from 'semantic-ui-react';

const RaioInput = ({ input, width, type, label }) => {
  return (
    <Form.Field>
      <div className="ui radio">
        <input {...input} type={type} /> <label>{label}</label>
      </div>
    </Form.Field>
  );
};

export default RaioInput;

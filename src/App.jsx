import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import PrintForm from './PrintForm';

const Form = (
  <React.StrictMode>
    <PrintForm />
  </React.StrictMode>
);

const root = document.getElementById('root');
const rootInstance = createRoot(root);
rootInstance.render(Form);

export default Form;

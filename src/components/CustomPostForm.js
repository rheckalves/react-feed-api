import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
const CustomPostForm = ({createPost}) => {
const [content, setContent] = useState('');
  return (
    <div style={{ width:"auto", margin:"40px"}}>
    <Form>
      <Form.TextArea onChange={(e) => setContent(e.target.value)} placeholder='O que você está pensando? ( ͡° ͜ʖ ͡°)' />
      <Form.Button onClick={async () => {
          await createPost(content);
          }}>Enviar</Form.Button>
   </Form>
   </div>
  );
};

export default CustomPostForm;
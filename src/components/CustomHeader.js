import React from 'react';
import { Header } from 'semantic-ui-react';

const CustomHeader = ({ message }) => {
  return (
    <Header as="h1" color="red" textAlign="center">
      <img src="https://media-exp3.licdn.com/dms/image/C4D0BAQGiYDKMmGWVNg/company-logo_200_200/0/1580323288437?e=1632960000&v=beta&t=lK_td10rqEzm7zK1onJ4OJ_t0TvJNSelxhfq_lMqYvk" alt="Logo" />
      {message}
    </Header>
  );
};

export default CustomHeader;

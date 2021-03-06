import React from 'react';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Stack from '@mui/material/Stack';

import UsersContainer from '../containers/users';
import Menu from '../containers/menu';
import CreateUserContainer from '../containers/createUser';
import MainContainer from '../containers/main';
import UserDetailContainer from '../containers/userDetail';
import EditUser from '../containers/editUser';

const PrivateRouter: React.FC = () => {
  return (
    <Stack direction="row" mx="auto" maxWidth={1000}>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/usuarios/editar/:id" element={<EditUser />} />
          <Route path="/usuarios/:id" element={<UserDetailContainer />} />
          <Route
            path="/usuarios/novo-usuario"
            element={<CreateUserContainer />}
          />
          <Route path="/usuarios" element={<UsersContainer />} />
          <Route path="/" element={<MainContainer />} />
        </Routes>
      </BrowserRouter>
    </Stack>
  );
};

export default PrivateRouter;

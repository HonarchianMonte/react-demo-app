import {Route, Routes} from 'react-router-dom';
import Error404Screen from '../../pages/error-404-screen';
import ContactScreen from '../../pages/contact-screen';
import HomeScreen from '../../pages/home-screen';
import UserScreen from '../../pages/user-screen';
import UsersScreen from '../../pages/users-screen';
import React from 'react';

const AppRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<HomeScreen/>} />
      <Route exact path="/contact" element={<ContactScreen/>} />
      <Route exact path="/users" element={<UsersScreen/>} />
      <Route exact path="/users/:id" element={<UserScreen/>} />
      <Route exact path="*" element={<Error404Screen/>} />
    </Routes>
  )
}

export default AppRouter;
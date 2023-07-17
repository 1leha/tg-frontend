// import { LoginPage, RegistrationPage } from '../../pages';
// import { Layout } from '../common';
// import { Route, Routes } from 'react-router-dom';
// import { TaskPage } from '../../pages';
import { AppRouter } from '../../Router/Router';

//rest

function App() {
  return (
    <AppRouter />

    // <>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<TaskPage />} />
    //       <Route path="register" element={<RegistrationPage />} />
    //       <Route path="login" element={<LoginPage />} />
    //     </Route>
    //   </Routes>
    // </>
  );
}

export default App;

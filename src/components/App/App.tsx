import { LoginPage, RegistrationPage } from "../../pages";
import { Layout } from "../common";
import { Route, Routes } from "react-router-dom";
import { TaskPage } from "../../pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RegistrationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="tasks" element={<TaskPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

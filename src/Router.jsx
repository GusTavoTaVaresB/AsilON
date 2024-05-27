import { Routes, Route } from "react-router-dom";
import Cadastro from "./Pages/Cadastro/Login";

export function Router() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="cadastro" element={<Cadastro />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}
import styled from '@emotion/styled'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Rainbow from "./pages/Rainbow"
import Layouts from "./pages/Layouts"

function App() {
  return (
    <Routes>
      <Route element={<Layouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Rainbow />} />
        <Route path="/About" element={<Rainbow />} />
        <Route path="/Activity  " element={<Rainbow />} />
      </Route>
    </Routes>
  );
}

const Container = styled.div`
  display: flex;
`;

export default App;


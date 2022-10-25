import Header from "./components/Header.js";
import Anasayfa from "./pages/Anasayfa.js";
import Hakkimda from "./pages/Hakkimda.js";
import {Routes , Route , Link ,NavLink } from "react-router-dom"

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Anasayfa/>}/>
        <Route path="/hakkımda" element={<Hakkimda/>}/>
      </Routes>
      
    </div>
  );
}

export default App;

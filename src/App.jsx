import { NavigationBar } from "./ReusableComponents/NavigationBar";
// import * as bootstrap from 'bootstrap'
import "./styles.scss";

import { FloatingBtn } from "./ReusableComponents/FloatingBtn";
import { FormSection } from "./sections/FormSection";
import { FooterSection } from "./sections/FooterSection";
import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { ServPage } from "./pages/ServPage";
import { ServicesListSection } from "./sections/ServicesListSection";
import { SamosvalPage } from "./pages/SamosvalPage";
import { TruckPage } from "./pages/TruckPage";
import { AviaPage } from "./pages/AviaPage";
import { CargoPage } from "./pages/CargoPage";
import { ContPage } from "./pages/ContPage";
import { MultiPage } from "./pages/MultiPage";
import { VagonPage } from "./pages/VagonPage";
function App() {
  return (
    <>
      <NavigationBar></NavigationBar>

      <FloatingBtn></FloatingBtn>
      <Routes>
        <Route path={"/"} element={<IndexPage></IndexPage>}></Route>
        <Route path={"/serv"} element={<ServPage></ServPage>}></Route>
        <Route
          path={"/samosval"}
          element={<SamosvalPage></SamosvalPage>}
        ></Route>
        <Route path={"/truck"} element={<TruckPage></TruckPage>}></Route>
        <Route path={"/avia"} element={<AviaPage></AviaPage>}></Route>
        <Route path={"/cargo"} element={<CargoPage></CargoPage>}></Route>
        <Route path={"/cont"} element={<ContPage></ContPage>}></Route>
        <Route path={"/multi"} element={<MultiPage></MultiPage>}></Route>
        <Route path={"/vagon"} element={<VagonPage></VagonPage>}></Route>
      </Routes>
      <ServicesListSection></ServicesListSection>

      <FormSection></FormSection>
      <FooterSection></FooterSection>
    </>
  );
}

export default App;

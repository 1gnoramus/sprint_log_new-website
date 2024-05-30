import { NavigationBar } from "./ReusableComponents/NavigationBar";
// import * as bootstrap from 'bootstrap'
import "./styles.scss";

import { FloatingBtn } from "./ReusableComponents/FloatingBtn";
import { FormSection } from "./sections/FormSection";
import { FooterSection } from "./sections/FooterSection";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import main3_img from "./assets/map_bg.png";
import services_serv from "./assets/services_serv.png";
import services_samosval from "./assets/services_samosval.png";
import services_truck from "./assets/services_truck.png";
import services_avia from "./assets/services_avia.png";
import services_cargo from "./assets/services_cargo.png";
import services_cont from "./assets/services_cont.png";
import services_multi from "./assets/services_multi.png";
import services_vagon from "./assets/services_vagon.png";
import { AdvantagesDiagram } from "./ReusableComponents/AdvantagesDiagram";
import { IntroSection } from "./sections/IntroSection";
import { MainSection } from "./sections/MainSection";
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

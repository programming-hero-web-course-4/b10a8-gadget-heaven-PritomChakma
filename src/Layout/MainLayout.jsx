import { Outlet } from "react-router-dom";
import Footer from "./../Components/Footer";
import NavBar from "./../Components/NavBar";
const MainLayout = () => {
  return (
    <div>
      {/* NavBar */}
      <NavBar></NavBar>
      {/* Dynamic section */}
      <div className="min-h-[calc(100vh-200px)]">
        <Outlet />
      </div>
      {/* Footer  */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;

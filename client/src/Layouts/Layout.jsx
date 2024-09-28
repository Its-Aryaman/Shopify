import Footerlayout from "./Footer";
import Navbarlayout from "./Navbarlayout";

const Layout = ({ children }) => {
  return (
    <>
      <Navbarlayout />
      <main>{children}</main>
      <Footerlayout />
    </>
  );
};

export default Layout;

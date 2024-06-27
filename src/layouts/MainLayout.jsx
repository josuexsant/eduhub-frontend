import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const MainLayout = ({ children }) => {
  return (
    <div className="block">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

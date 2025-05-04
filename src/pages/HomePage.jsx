import Activities from "../homeLayout/Activities";
import Header from "../homeLayout/Header";
import TopLayout from "../homeLayout/TopLayout";
import BottomLayout from "../homeLayout/BottomLayout";
import Footer from "../homeLayout/Footer";
import FAQs from "../homeLayout/FAQs";

function HomePage() {
  return (
    <div className="r bg-[#0e0743] px-2 text-center font-jost text-slate-100">
      <Header />
      <TopLayout />
      <Activities />
      <BottomLayout />
      <FAQs />
      <Footer />
    </div>
  );
}

export default HomePage;

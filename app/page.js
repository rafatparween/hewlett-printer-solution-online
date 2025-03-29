



import DataContent from "./Components/DataContent";

import Support from "./Components/Support";
import JivoChat from "./JivoChat";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Slider/>
      {/* <Header/> */}
      <Support/>
      <DataContent/>
      <Footer/>
      <JivoChat/>
     
    </>
  );
}

import Campaigns from "../src/components/Campaigns"
import Cards from "../src/components/Cards"
import Categories from "../src/components/Categories"
import Favorites from "../src/components/Favorites"
import Footer from "../src/components/Footer"
import Header from "../src/components/Header"
import HeroSection from "../src/components/HeroSection"
import MobileApp from "../src/components/MobileApp"
import { useWindowWidth } from '@react-hook/window-size'

function App() {

  const windowWidth = useWindowWidth()

  return (
    <div>
      <Header />
      {windowWidth <= 768 && <Campaigns />}
      <HeroSection />
      <Categories />
      <div className='container mx-auto'>
        {windowWidth > 768 && <Campaigns />}
        <Favorites />
        <MobileApp />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}

export default App;

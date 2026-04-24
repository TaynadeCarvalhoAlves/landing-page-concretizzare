
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Home from './pages/Home';
import { PageScroll } from './App.styles';
import OurServices from './components/OurServices';
import Carousel from './components/Carousel';
import 'swiper/css';
import Footer from './components/Footer';
import Depoiments from './components/Depoiments';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <PageScroll>
        <Home />
        <OurServices />
        <Carousel />
        <Depoiments />
        <Footer />
      </PageScroll>
    
    </ThemeProvider>
  )
}

export default App

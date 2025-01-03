import RoutesAplication from './routes';

import BackToTop from './components/back-to-top';
import Footer from './components/footer';

import './global.css'
import Header from './components/nav-bar';
import Whatsapp from './components/whatsapp';

export default function App() {
    return (
        <> 
            <div className='bg-[#f0cca8] '>
                <Header />
            </div>
            
            <main>
                <RoutesAplication />
                <BackToTop/>
                <Whatsapp />
            </main>
            <Footer />
        </>
    )
}
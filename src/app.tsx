import { lazy, Suspense } from 'react';
import RoutesAplication from './routes';
import Header from './components/nav-bar';
import Footer from './components/footer';
import './global.css'

const BackToTop = lazy(() => import('./components/back-to-top'));
const Whatsapp = lazy(() => import('./components/whatsapp'));

export default function App() {
    return (
        <> 
            <div className='bg-[#f0cca8] '>
                <Header />
            </div>
            
            <main>
                <RoutesAplication />
                <Suspense fallback={null}>
                    <BackToTop/>
                    <Whatsapp />
                </Suspense>
            </main>
            <Footer />
        </>
    );
}

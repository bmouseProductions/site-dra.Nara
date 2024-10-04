import RoutesAplication from './routes';

import BackToTop from './components/back-to-top';
import Footer from './components/footer';

import './global.css'

export default function App() {
    return (
        <>
            <main>
                <RoutesAplication />
                <BackToTop/>
            </main>
            <Footer />
        </>
    )
}
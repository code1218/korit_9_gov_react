import { createRoot } from 'react-dom/client'
import App01 from './ch01/App01';
import App02 from './ch02/App02';

const appObj = {
    ch01: <App01 />,
    ch02: <App02 />,
}

createRoot(document.getElementById('root')).render(appObj.ch02);
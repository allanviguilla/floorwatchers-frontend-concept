import { useState } from 'react'

import Accents from './components/Accents.jsx';
import Main from './components/Main.jsx';
import Navbar from './components/Navbar.jsx';
import Mobile from './components/Mobile.jsx';

export default function App() {

  const [showMobile, setShowMobile] = useState(false);

  return (
    <>
    {showMobile && <Mobile setShowMobile={setShowMobile} />}
    <Accents />
    <Navbar setShowMobile={setShowMobile} />
    <Main />
    </>
  )
}


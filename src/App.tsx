import { useState } from 'react';
import './App.css'
import Footer from './components/Footer.component'
import Header from './components/Header.component'
import MainContainer from './components/MainContainer.component'
import { languageContext, LanguageContextType } from './languageContext';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

function App() {
  const [language, setLanguage] = useState<LanguageContextType>("fr");
  const changeLanguage = (
    _event: React.MouseEvent<HTMLElement>,
    lang: LanguageContextType
  ) => {
    setLanguage(lang);
  };

  return (
    <>
      <div className="page_container">
        <ToggleButtonGroup
          color='primary'
          value={language}
          exclusive
          onChange={changeLanguage}
          aria-label="language"
          style={{ position: 'absolute', top: 10, right: 10, zIndex: 1000, backgroundColor: 'white' }}
        >
          <ToggleButton value="fr" aria-label="french">
            Fr
          </ToggleButton>
          <ToggleButton value="en" aria-label="english">
            En
          </ToggleButton>
        </ToggleButtonGroup>
        <languageContext.Provider value={language}>
          <Header />
          <MainContainer />
          <Footer />
        </languageContext.Provider>
        
      </div>
    </>
  )
}

export default App

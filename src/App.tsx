import { useState } from 'react';
import './App.css'
import Footer from './components/Footer.component'
import Header from './components/Header.component'
import MainContainer from './components/MainContainer.component'
import { languageContext, LanguageContextType } from './languageContext';
import useWindowWidthChange from './util/hooks/useWindowWidthChange';
import CustomFab from './util/ui/CustomFab';
import SEOHead from './seo/SEOHead.component';

function App() {
  const [language, setLanguage] = useState<LanguageContextType>("fr");
  const changeLayout = useWindowWidthChange();
  const changeLanguage = (
    _event: React.MouseEvent<HTMLElement>,
    lang: LanguageContextType
  ) => {
    setLanguage(lang);
  };
  const [footerIsVisible, setFooterIsVisible] = useState<boolean>(false);

  return (
    <>
      <languageContext.Provider value={language}>
        <SEOHead />
        <div className="page_container">
          <Header />
          <MainContainer />
          {!footerIsVisible &&
            <CustomFab changeLayout={changeLayout} changeLanguage={changeLanguage} language={language} />
          }
          <Footer setFooterIsVisible={setFooterIsVisible} />
        </div>
      </languageContext.Provider>
    </>
  )
}

export default App

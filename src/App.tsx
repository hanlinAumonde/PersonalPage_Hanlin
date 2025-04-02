import './App.css'
import Footer from './components/Footer.component'
import Header from './components/Header.component'
import MainContainer from './components/MainContainer.component'

function App() {
  return (
    <>
      <div className="page_container">
        <Header />
        <MainContainer />
        <Footer />
      </div>
    </>
  )
}

export default App

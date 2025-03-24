import { Fab, SxProps } from '@mui/material'
import './App.css'
import Footer from './components/Footer.component'
import Header from './components/Header.component'
import MainContainer from './components/MainContainer.component'
import { blue } from '@mui/material/colors'
import UpIcon from '@mui/icons-material/KeyboardArrowUp';

function App() {
  const fabStyle = {
    position: 'fixed',
    bottom: 16,
    right: 16,
  };
  
  const fabGreenStyle = {
    color: 'common.white',
    bgcolor: blue[500],
    '&:hover': {
      bgcolor: blue[600],
    },
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <>
      <div className="page_container">
        <Header />
        <MainContainer />
        <Footer />
      </div>
      <Fab sx={{...fabStyle, ...fabGreenStyle} as SxProps}  
           aria-label='Expand' color={'primary' as 'primary'}
           onClick={handleClick}>
            <UpIcon />
      </Fab>
    </>
  )
}

export default App

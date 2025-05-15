import { useEffect, useState } from "react";

const useWindowWidthChange = () => {
    const [changeLayout, setChangeLayout] = useState(false);
    
    useEffect(() => {
        const handleResizeWidth = () => {
        const width = window.innerWidth;
        if(width < 1400){
            setChangeLayout(true);
        }else{
            setChangeLayout(false);
        }
      }
      handleResizeWidth();
      window.addEventListener('resize', handleResizeWidth);
      return () => {
        window.removeEventListener('resize', handleResizeWidth);
      }
    }, []);
    
    return changeLayout;
}

export default useWindowWidthChange;
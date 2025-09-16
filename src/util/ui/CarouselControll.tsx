import styles from '../../styles/CarouselControll.module.css'
import { IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

export default function CarouselControl(
    {goToPrevious, goToNext, currentIndex, isTransitioning, changeItem, totalItems}
    :
    {
        goToPrevious: () => void,
        goToNext: () => void,
        currentIndex: number,
        isTransitioning: boolean,
        changeItem: (index: number) => void,
        totalItems: number
    }
) {
    return (
        <>
            <div className={styles.carouselControls}>
                <IconButton 
                    className={styles.carouselArrow} 
                    onClick={goToPrevious}
                    disabled={isTransitioning}
                    aria-label="previous item"
                >
                    <ChevronLeft />
                </IconButton>
                
                <div className={styles.indicators}>
                    {Array.from({ length: totalItems }).map((_, index) => (
                        <button 
                            key={index}
                            className={`${styles.indicator} ${index === currentIndex ? styles.activeIndicator : ''}`}
                            onClick={() => changeItem(index)}
                            aria-label={`${index + 1}`}
                        />
                    ))}
                </div>
                
                <IconButton 
                    className={styles.carouselArrow} 
                    onClick={goToNext}
                    disabled={isTransitioning}
                    aria-label="next item"
                >
                    <ChevronRight />
                </IconButton>
            </div>
        </>
    )
}
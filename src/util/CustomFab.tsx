import { Fab, SpeedDial, SpeedDialAction, SpeedDialIcon, SxProps } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { blue } from '@mui/material/colors'
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Code, DeveloperMode, Person, WorkHistory } from "@mui/icons-material";
import { useEffect, useRef, useState } from 'react';

type handleClickFunction = () => void
type CustomFabProps = {
    changeLayout: boolean
}

const CustomFab:React.FC<CustomFabProps> = ({changeLayout}) => { 
    const baseUrl = import.meta.env.BASE_URL || '/';
    const [tooltipId, setTooltipId] = useState(-1);
    const timeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current as number);
            }
        }
    }, []);

    const fabBlueStyle = {
        color: 'common.white',
        bgcolor: blue[500],
        '&:hover': {
            bgcolor: blue[600],
        },
    };

    const handleScroll2TopClick: handleClickFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const actions = [
        { id:5, icon: <Person/>, name: 'Profils' },
        { id:4, icon: <Code />, name: 'Skills' },
        { id:3, icon: <WorkHistory />, name: 'Experience' },
        { id:2, icon: <DeveloperMode />, name: 'Projects' },
        { id:1, icon: <img src={`${baseUrl}assets/LinkedIn_icon.svg`} alt="LinkedIn"
                            style={{ width: '24px', height: '24px' }}/>, name: 'LinkedIn', 
                link: 'https://www.linkedin.com/in/hanlin-wu-559552213/' },
        { id:0, icon: <img src={`${baseUrl}assets/github.png`} alt="GitHub"
                            style={{ width: '24px', height: '24px' }}/>, name: 'GitHub',
                link: 'https://github.com/hanlinAumonde'
                        },
    ];

    const handleScroll = (id: number) => {
        if(id >= 2){
            const element = document.getElementById(actions[id].name);
            if (element) {
                element.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }else{
            const link = actions[id].link;
            if (link) {
                window.open(link, '_blank');
            }
        }
        if(timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (tooltipId !== -1) {
            timeoutRef.current = window.setTimeout(() => {
                setTooltipId(-1);
            }, 1000); // 1 second delay before hiding the tooltip
        }
    };

    return (
        <Grid container direction="column" spacing={2} justifyContent="flex-end" alignItems="flex-end"
             sx={{ position: 'fixed', bottom: 16, right: 12 }}>
            {changeLayout &&
                <Grid size={{xs:12}}>
                    <SpeedDial
                        ariaLabel="SpeedDial menu"
                        onMouseLeave={() => setTooltipId(-1)}
                        icon={<SpeedDialIcon />}
                    >
                        {actions.reverse().map((action) => (
                        <SpeedDialAction
                            key={action.name}
                            icon={action.icon}
                            slotProps={{
                                tooltip:{
                                    title: action.name,
                                    placement: 'left',
                                    open: tooltipId === action.id? true : false,
                                    onTouchStart: () => {
                                        setTooltipId(action.id);
                                        handleScroll(action.id);
                                    },
                                    onMouseOver: () => {
                                        setTooltipId(action.id);
                                    },
                                }
                            }}
                            onClick={() => handleScroll(action.id)}
                        />
                        ))}
                    </SpeedDial>
                </Grid>
            }
            <Grid size={{xs:12}}>
                <Fab   
                    sx={fabBlueStyle as SxProps}
                    aria-label='Expand' color={'primary' as 'primary'}
                    onClick={handleScroll2TopClick}>
                    <UpIcon />
                </Fab>
            </Grid>
        </Grid>
    );
}

export default CustomFab;
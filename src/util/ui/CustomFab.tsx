import { SpeedDial, SpeedDialAction, SpeedDialIcon, SxProps } from '@mui/material'
import Grid from '@mui/material/Grid2'
import { blue } from '@mui/material/colors'
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Code, DeveloperMode, Person, WorkHistory } from "@mui/icons-material";
import { useEffect, useRef, useState } from 'react';
import { LanguageContextType } from '../../config/languageContext.ts';
import SendMessageDialog from './SendMessageDialog';
import {getMenuItem} from "../TextContent/NavBarText.ts";

type handleClickFunction = () => void
type CustomFabProps = {
    changeLayout: boolean;
    changeLanguage: (_event: React.MouseEvent<HTMLElement>, lang: LanguageContextType) => void;
    language: LanguageContextType;
}

const CustomFab:React.FC<CustomFabProps> = ({changeLayout, changeLanguage, language}) => { 
    const baseUrl = import.meta.env.BASE_URL || '/';
    const [tooltipId, setTooltipId] = useState(-1);
    const timeoutRef = useRef<number | null>(null);
    const [openSendMessage, setOpenSendMessage] = useState(false);

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current as number);
            }
        }
    }, []);

    const fabBlueStyle = {
        color: 'common.white',
        bgcolor: blue[300],
        '&:hover': {
            bgcolor: blue[400],
        },
    };

    const handleScroll2TopClick: handleClickFunction = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    const actions = [
        { id:5, icon: <Person/>, name: getMenuItem(language)[0] },
        { id:4, icon: <Code />, name: getMenuItem(language)[1] },
        { id:3, icon: <WorkHistory />, name: getMenuItem(language)[2] },
        { id:2, icon: <DeveloperMode />, name: getMenuItem(language)[3] },
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
        <>
            <Grid container direction="column"  justifyContent="flex-end" alignItems="flex-end"
                 sx={{ position: 'fixed', bottom: 16, right: 12, zIndex: 2 }}>
                {changeLayout &&
                    <Grid size={{xs:12}}>
                        <SpeedDial
                            FabProps={{ sx: fabBlueStyle as SxProps }}
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
                                        open: tooltipId === action.id,
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
                    <SpeedDial
                        FabProps={{ sx: fabBlueStyle as SxProps }}
                        ariaLabel='ChangeLanguage'
                        onClick={(event) => changeLanguage(event, language === "fr" ? "en" : "fr")}
                        icon={
                            <img
                                src={language === "fr" ? `${baseUrl}assets/france_flag.png` : `${baseUrl}assets/uk_flag.png`}
                                style={{ width: '24px', height: '24px' }}
                                alt={"language_flag"}
                            >
                            </img>
                        }
                    >
                    </SpeedDial>
                </Grid>
                <Grid size={{xs:12}}>
                    <SpeedDial
                        FabProps={{ sx: fabBlueStyle as SxProps }}
                        ariaLabel='SendMessage'
                        onClick={() => setOpenSendMessage(true)}
                        icon={
                            <img
                                src={`${baseUrl}assets/email.svg`}
                                style={{ width: '24px', height: '24px' }}
                                alt={'SendMessage'}
                            >
                            </img>
                            }
                    >
                    </SpeedDial>
                </Grid>
                <Grid size={{xs:12}}>
                    <SpeedDial
                        FabProps={{ sx: fabBlueStyle as SxProps }}
                        ariaLabel='ScrollUp'
                        onClick={handleScroll2TopClick}
                        icon={<UpIcon />}
                    >
                    </SpeedDial>
                </Grid>
            </Grid>
            <SendMessageDialog open={openSendMessage} setOpen={setOpenSendMessage}/>
        </>
    );
}

export default CustomFab;

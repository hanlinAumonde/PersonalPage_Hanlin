import { Code, DeveloperMode, Person, Portrait, WorkHistory } from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import {useContext, useState} from "react";
import useScrollSpy from "../util/hooks/useScrollSpy";
import {getMenuItem} from "../util/TextContent/NavBarText.ts";
import {languageContext} from "../config/languageContext.ts";

export default function NavBar() {
    const [open, setOpen] = useState(true);
    const [activeLink, setActiveLink] = useState(0); 
    const baseUrl = import.meta.env.BASE_URL || '/';
    const language = useContext(languageContext);

    const handleClick = () => {
        setOpen(!open);
    };

    useScrollSpy(setActiveLink,language);

    const handleScroll = (id: number) => {
        const element = document.getElementById(getMenuItem(language)[id]);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const handleMenuClick = (index:number) => {
        setActiveLink(index);  
        handleScroll(index); 
    };

    return (
        <List
            sx={{ width: '100%',  bgcolor: 'rgb(249, 246, 246)' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader sx={{ bgcolor: 'rgb(221, 219, 219)' }}
                    component="div" id="nested-list-subheader">
                    Menu
                </ListSubheader>
            }
    >
        <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <Portrait />
            </ListItemIcon>
            <ListItemText primary="Menu" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4, ":hover":{color:'black'} }} href={'#'+getMenuItem(language)[0]}
                    selected={activeLink === 0}
                    onClick={() => handleMenuClick(0)}>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary={getMenuItem(language)[0]} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, ":hover":{color:'black'} }} href={'#'+getMenuItem(language)[1]}
                    selected={activeLink === 1}
                    onClick={() => handleMenuClick(1)}>
                    <ListItemIcon>
                        <Code />
                    </ListItemIcon>
                    <ListItemText primary={getMenuItem(language)[1]} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, ":hover":{color:'black'} }} href={'#'+getMenuItem(language)[2]}
                    selected={activeLink === 2}
                    onClick={() => handleMenuClick(2)}>
                    <ListItemIcon>
                        <WorkHistory />
                    </ListItemIcon>
                    <ListItemText primary={getMenuItem(language)[2]} />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4, ":hover":{color:'black'} }} href={'#'+getMenuItem(language)[3]}
                    selected={activeLink === 3}
                    onClick={() => handleMenuClick(3)}>
                    <ListItemIcon>
                        <DeveloperMode/>
                    </ListItemIcon>
                    <ListItemText primary={getMenuItem(language)[3]} />
                </ListItemButton>
            </List>
        </Collapse>
        <ListItemButton sx={{":hover":{color:'black'}}} href="https://www.linkedin.com/in/hanlin-wu-559552213/" target="_blank">
            <ListItemIcon >
                <img src={`${baseUrl}assets/LinkedIn_icon.svg`} alt="LinkedIn"
                     style={{ width: '24px', height: '24px' }}/>
            </ListItemIcon>
            <ListItemText primary="LinkedIn" />
        </ListItemButton>
        <ListItemButton sx={{":hover":{color:'black'}}} href="https://github.com/hanlinAumonde" target="_blank">
            <ListItemIcon>
                <img src={`${baseUrl}assets/github.png`} alt="GitHub" 
                     style={{ width: '24px', height: '24px' }}/>
            </ListItemIcon>
            <ListItemText primary="Github" />
        </ListItemButton>
    </List>
    );
}
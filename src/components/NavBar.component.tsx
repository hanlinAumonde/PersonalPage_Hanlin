import { Code, DeveloperMode, Person, Portrait, WorkHistory } from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import { useState } from "react";

export default function NavBar() {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'rgb(249, 246, 246)' }}
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
            <ListItemText primary="Portfolio" />
            {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Profils" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <Code />
                    </ListItemIcon>
                    <ListItemText primary="Skills" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <WorkHistory />
                    </ListItemIcon>
                    <ListItemText primary="Experience" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                    <ListItemIcon>
                        <DeveloperMode/>
                    </ListItemIcon>
                    <ListItemText primary="Projets" />
                </ListItemButton>
            </List>
        </Collapse>
        <ListItemButton href="https://www.linkedin.com/in/hanlin-wu-559552213/">
            <ListItemIcon >
                <img src="src/assets/LinkedIn_icon.svg" alt="LinkedIn"
                     style={{ width: '24px', height: '24px' }}/>
            </ListItemIcon>
            <ListItemText primary="LinkedIn HomePage" />
        </ListItemButton>
        <ListItemButton href="https://github.com/hanlinAumonde">
            <ListItemIcon>
                <img src="src/assets/gitHub.png" alt="GitHub" 
                     style={{ width: '24px', height: '24px' }}/>
            </ListItemIcon>
            <ListItemText primary="Github HomePage" />
        </ListItemButton>
    </List>
    );
}
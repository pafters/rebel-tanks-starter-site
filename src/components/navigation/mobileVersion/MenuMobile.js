import { Drawer, IconButton, Container } from '@mui/material';
import { Menu as MenuIcon, ArrowBackIos } from "@mui/icons-material";
import * as React from 'react';

import './menuMobile.css';
const links = [
    '/',
    '/contacts',
    // '/help'
];

const names = [
    'Главная',
    'Контакты',
    // 'Помочь'
];

function MenuMobile() {
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton edge="start"
                color="inherit"
                onClick={handleDrawerOpen}
                className='menuIcon'
            ><MenuIcon sx={{
                height: '4vh',
                width: '4vh'
            }} />
            </IconButton>

            <Container>

                <Drawer open={open}
                    type='temporary'
                    PaperProps={{
                        sx: {
                            backgroundColor: "#352DFF",
                            width: `60%`
                        }
                    }}
                    onClose={handleDrawerClose}
                >
                    <div className='iconBtn'>
                        <IconButton
                            color="inherit"
                            aria-label="arrow-back"
                            onClick={handleDrawerClose}
                            sx={{ width: '100%' }}
                        >
                            <ArrowBackIos sx={{ color: '#F0F8FF', height: '5vh', width: '5vw' }} />
                        </IconButton>
                    </div>

                    {links.map((option) => (
                        <a className='menuItem'
                            href={`${option}`}
                            key={option}
                            onClick={handleDrawerClose}>

                            <p className='textItem'>{names[links.indexOf(option)]}</p>
                        </a>
                    ))}
                </Drawer>
            </Container>

        </div>
    )

}


export default MenuMobile;
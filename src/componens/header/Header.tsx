import { Component } from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import SearchIcon from '@mui/icons-material/Search';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
// import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';
import DehazeOutlinedIcon from '@mui/icons-material/DehazeOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Divider from '@mui/material/Divider';
import AmenitiesBar from './amenitiesBar/AmenitiesBar';

import { Button } from 'primereact/button';
// import IconButton from '@mui/material/IconButton';
import { InputText } from "primereact/inputtext";

const ImageContainer = styled(Box)({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'top',
    height: '100%',
});

const Image = styled('img')({
    maxWidth: '50%',
    maxHeight: '50%',
    objectFit: 'contain',
});

export default class Body extends Component {

    render() {
        return (
            <div>
                <Grid container xs={12}>
                    <Grid item xs>
                        <ImageContainer sx={{ marginLeft: '10%', top: '0' }}>
                            <Image src='https://vnnthailand.com/wp-content/uploads/2023/10/1697444951777.jpg' />
                        </ImageContainer>
                    </Grid>
                    <Grid item xs={4} sx={{ margin: '10px', justifyContent: 'center', }}>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item>ตั้งกระทู้</Grid>
                            <Grid item>คอมมูนิตี้</Grid>
                        </Grid>
                        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item>
                                <div className="p-input-icon-left" style={{ position: 'relative', marginTop: '1rem', width: '100%' }}>
                                    <InputText placeholder="Search" className="p-inputtext-sm" style={{ borderRadius: '30px', width: '30rem' }} />
                                    <Avatar
                                        sx={{
                                            bgcolor: '#662C91',
                                            position: 'absolute',
                                            left: '0.3rem',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                        }}
                                    >
                                        <SearchIcon />
                                    </Avatar>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs>
                        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 1 }} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Grid item xs={2}>
                                <EmailOutlinedIcon />
                            </Grid>
                            <Grid item xs={2}>
                                <NotificationsNoneOutlinedIcon />
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    severity="secondary"
                                    outlined
                                    rounded
                                    icon={<DehazeOutlinedIcon sx={{ width: 24, height: 24, mr: 1.5 }} />}
                                    style={{ display: 'flex', justifyContent: 'space-between', width: '5rem', height: '2.5rem', marginRight: 2 }}
                                >
                                    <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
                                        <AccountCircleIcon />
                                    </Avatar>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container xs={12} sx={{ mt: '10px', justifyContent: 'center' }}>
                    <Grid item xs={7} sx={{ display: 'flex', margin: '5px', justifyContent: 'center', }}>
                        <Grid container columnSpacing={{ xs: 6, sm: 6, md: 6 }}>
                            <Grid item>
                                <AmenitiesBar />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1.5} sx={{ margin: '5px', justifyContent: 'center', }}>
                        <Grid container columnSpacing={{ xs: 1, sm: 1, md: 3 }} >
                            <Grid item>
                                <Button icon="pi pi-star" style={{ color: '#662C91' }} label="แลกพอยต์" severity="secondary" size='small' outlined />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} sx={{ margin: '5px' }}>
                        <Grid container columnSpacing={{ xs: 2, sm: 2, md: 3 }} >
                            <Grid item>
                                <Button icon="pi pi-users" style={{ color: '#662C91' }} label="กิจกรรมพันทิป" severity="secondary" size='small' outlined />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

import React from 'react';
import Grid from '@material-ui/core/Grid';
import NavbarComponent from './Navbar';
import {
    Card,
    CardMedia,
    CardContent,
    TextField,
    Typography,
    makeStyles,
    Switch,
    } from '@material-ui/core';
import Button from 'react-bootstrap/Button';
import { 
    AiOutlineArrowRight,
    AiOutlineHdd,
    AiOutlineForm,
    AiOutlineLayout,
    AiOutlineCheck,
    } from "react-icons/ai";
import airbnb from '../img/airbnb.png'
import image from '../img/image.png'


const useStyles = makeStyles((theme) => ({
containerGrid: {
    marginTop: 90
},
textTitle: {
    fontSize: 40
},
textSubTitle: {
    fontSize: 20,
    color: '#869ab8',
},
buttonDiv: {
    marginTop: 40,
},
featuresTitle: {
    fontSize: 20,    
},
featuresSubTitle: {
    marginTop: 10,
    fontSize: 18,
    color: '#869ab8',
},
iconStyle:{
    fontSize: 30,
    marginBottom: 15
},
airbnbLogo: {
    width: 130,
    color: '#869ab8',
},
cardContainerGrid: {
    marginTop: 90,
    display: 'flex',
    justifyContent: 'center',
    alignItem: 'center'
},
cardRoot: {
    maxWidth: 345,
  },
  resourceList: {
      color: '#42ba96',
      '& svg':{
          marginRight: 15,
      },
  },
  resourceTitle: {
       fontSize: 30,
  },
    resourceSubTitle: {
       fontSize: 30,
       color: '#42ba96',
  },
  bannerImage: {
      width: '100%',
      height: 400,
  },
  themeSubtitle: {
      color: '#335eea',
      fontSize: 28
  },
  custemerTextDiv: {
      marginTop: 90,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
  },
bootstrapTitle: {
       fontsize: 15,
    '& svg':{
        marginRight: 15,
    },
},
bootstrapThemeTitle: {
    fontSize: 20,
},
bootstrapThemeSubTitle: {
    fontSize: 18,
     color: '#869ab8',
},
CardContainerGrid: {
    marginTop: 90,
    padding: '0 200px 0 200px'
},
cardImage: {
    width: '100%',
    height: 300,
},
textMargin: {
    marginTop: 15,
    marginBottom: 15,
},
ContainerMargin: {    
    padding: '0 0 0 200px'
},
  media: {
    height: 0,
    paddingTop: '56.25%',
  },
  content: {
      '.MuiFormControl-root': {
      width: '100%'
      },
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
   button: {
    margin: theme.spacing(1),
  },
}));


function Home() {
    const classes = useStyles();

    return (
        <>
            <NavbarComponent />
            <div>
                <Grid container spacing={2} className={`${classes.containerGrid} ${classes.ContainerMargin}`}>
                    <Grid item xs={6}>
                        <Typography className={classes.textTitle}>Welcome to 
                            <span style={{color: '#335eea'}}>Landkit</span>.
                        </Typography>
                        <Typography className={classes.textTitle}>Develop anything.</Typography>
                        <Typography className={classes.textSubTitle}>
                            Build a beautiful, modern website with flexible <br></br> Bootstrap components built from scratch.
                        </Typography>
                        <div className={classes.buttonDiv}>
                            <Button variant="primary" mr={20} size="lg" style={{marginRight:15}}> View all pages <AiOutlineArrowRight /></Button>
                            <Button variant="light" size="lg">Documentation</Button>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                    <img  style={{width: 550}}src={'https://landkit.goodthemes.co/assets/img/illustrations/illustration-2.png'} alt='image' />
                    </Grid>
                </Grid>

                <Grid container spacing={2} className={`${classes.containerGrid} ${classes.CardContainerGrid}`} >
                    <Grid item xs={4}>
                        <AiOutlineHdd className={classes.iconStyle}/>
                        <Typography className={classes.featuresTitle}>Built for developers</Typography>
                        <Typography className={classes.featuresSubTitle}>Landkit is built to make your life easier. Variables, build tooling, documentation, and reusable components.</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <AiOutlineForm className={classes.iconStyle}/>
                        <Typography className={classes.featuresTitle}>Designed to be modern</Typography>
                        <Typography className={classes.featuresSubTitle}>Designed with the latest design trends in mind. Landkit feels modern, minimal, and beautiful.</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <AiOutlineLayout className={classes.iconStyle}/>
                        <Typography className={classes.featuresTitle}>Documentation for everything</Typography>
                        <Typography className={classes.featuresSubTitle}>We've written extensive documentation for components and tools, so you never have to reverse engineer anything.</Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={4} className={`${classes.containerGrid} ${classes.CardContainerGrid}`} >
                    <Grid item>
                        <img src={airbnb} className={classes.airbnbLogo}/>
                    </Grid>  
                    <Grid item>
                        <img src={airbnb} className={classes.airbnbLogo}/>
                    </Grid>    
                    <Grid item>
                        <img src={airbnb} className={classes.airbnbLogo}/>
                    </Grid>  
                    <Grid item>
                        <img src={airbnb} className={classes.airbnbLogo}/>
                    </Grid> 
                    <Grid item>
                        <img src={airbnb} className={classes.airbnbLogo}/>
                    </Grid>  
                    <Grid item>
                        <img src={airbnb} className={classes.airbnbLogo}/>
                    </Grid>              
                </Grid>

                <Grid container spacing={1} className={`${classes.containerGrid} ${classes.CardContainerGrid}`}>
                    <Grid item xs={6}>
                        <Card className={classes.cardRoot}>
                            <CardMedia
                                className={classes.media}
                                image="https://picsum.photos/200/300"
                                title="Paella dish"
                            />
                            <CardContent className={classes.content}>
                                <div className="d-grid gap-2">
                                    <TextField id="standard-basic" label="Name" />
                                    <TextField id="standard-basic" label="Email" />
                                    <TextField id="standard-basic" label="Password" />
                                </div>                            
                                <div className="d-grid gap-2" style={{marginTop:40}}>
                                    <Button variant="success"  size="lg">Dowmload a sample</Button>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>  
                    <Grid item xs={6} style={{marginTop: 70}}>
                    <Typography className={classes.resourceTitle}>The most useful resource</Typography>
                    <Typography className={classes.resourceSubTitle}>ever created for dev.</Typography>
                    <Typography className={classes.featuresSubTitle}>
                            Using Landkit to build your site means never worrying about designing another page or cross browser compatibility. Our ever-growing library of components and pre-designed layouts will make your life easier.
                    </Typography>

                        <Grid container spacing={2} style={{marginTop: 20}}>
                            <Grid item xs={6}>                                            
                            <Typography  className={classes.resourceList}> 
                                <AiOutlineCheck />
                                Lifetime updates
                            </Typography>
                            </Grid>  
                            <Grid item xs={6}>
                                <Typography className={classes.resourceList}>
                                    <AiOutlineCheck /> 
                                    Tech support
                                </Typography>
                            </Grid>    
                            <Grid item xs={6}>
                                <Typography className={classes.resourceList}>
                                    <AiOutlineCheck /> 
                                    Tons of assets
                                </Typography>
                            </Grid>  
                            <Grid item xs={6}>
                                <Typography className={classes.resourceList}>
                                    <AiOutlineCheck /> 
                                    Integration ready
                                </Typography>
                            </Grid>                        
                        </Grid>                   
                    </Grid>    
                </Grid>

                <Grid container spacing={2} className={`${classes.containerGrid} ${classes.ContainerMargin}`}>
                    <Grid item xs={6}>
                        <Typography className={classes.resourceTitle}>We have lots of experience</Typography>
                        <Typography className={classes.themeSubtitle}>building Bootstrap themes.</Typography>
                        <Typography className={classes.featuresSubTitle}>
                            We've built well over a dozen Bootstrap themes and sold tens of thousands of copies.
                        </Typography>

                         <Grid container style={{marginTop: 20}}> 
                            <Grid item xs={1}>
                                <AiOutlineCheck />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography className={classes.bootstrapThemeTitle} >                            
                                    Bootstrap users since the beginning
                                </Typography>
                                <Typography className={classes.bootstrapThemeSubTitle}>
                                    We've been developing with Bootstrap since it was publicly released in 2011.
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container style={{marginTop: 20}}> 
                            <Grid item xs={1}>
                                <AiOutlineCheck />
                            </Grid>
                            <Grid item xs={11}>
                                <Typography className={classes.bootstrapThemeTitle}>                            
                                    Deep understanding of Bootstrap
                                </Typography>
                                <Typography className={classes.bootstrapThemeSubTitle}>
                                    We've watched Bootstrap grow up over the years and understand it better than almost anyone.
                                </Typography>
                            </Grid>
                        </Grid> 
                    </Grid>
                    <Grid item xs={6}>
                        <img src={'https://picsum.photos/seed/picsum/200/300'} className={classes.bannerImage}/>
                    </Grid>                   
                </Grid>

                <Grid 
                    container 
                    direction="column" 
                    justify="center" a
                    lignItems="center" 
                    className={classes.custemerTextDiv}
                > 
                    <Grid item xs={12}> 
                        <Typography className={classes.bootstrapThemeTitle}>
                            Our customers are our biggest fans.
                        </Typography>
                    </Grid>
                    <Grid item> 
                    <Typography className={classes.bootstrapThemeSubTitle}>
                        We don't like to brag, but we don't mind letting our customers do it for us.
                    </Typography>
                    </Grid>
                    <Grid item> 
                    <Typography className={classes.bootstrapThemeSubTitle}>
                        Here are a few nice things folks have said about our themes over the years.
                    </Typography>
                    </Grid>
                </Grid>

                
                <Grid container spacing={5} className={classes.CardContainerGrid}> 
                    <Grid item xs={6}> 
                        <Typography className={classes.resourceTitle}>
                        Stay focused on your business.
                    </Typography>
                    <Typography className={classes.themeSubtitle}>
                        Let us handle the design.
                    </Typography> 
                    <Typography className={classes.bootstrapThemeSubTitle}>
                        You have a business to run. Stop worring about cross-browser bugs, designing new pages, keeping your components up to date. Let us do that for you.
                    </Typography>
                    <Grid container style={{marginTop: 20}}>
                        <Grid item xs={4}>
                            <Typography>100%</Typography>
                            <Typography>Satisfaction</Typography>
                        </Grid>
                        <Grid item xs={4}>
                                <Typography>24/7</Typography>
                            <Typography>Support</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>100k+</Typography>
                            <Typography>Sales</Typography>
                        </Grid>
                    </Grid>
                    </Grid> 
                    <Grid item xs={6} >
                        <img src={image} className={classes.cardImage}/>
                    </Grid> 
                </Grid>

                <Grid 
                    container 
                    direction="column" 
                    justify="center" a
                    lignItems="center" 
                    className={`${classes.CardContainerGrid} ${classes.custemerTextDiv}`}
                > 
                    <Grid item xs={12}> 
                        <Typography className={classes.resourceTitle}>
                            Fair, simple pricing for all.
                        </Typography>
                    </Grid>
                    <Grid item> 
                        <Typography className={`${classes.bootstrapThemeSubTitle} ${classes.textMargin}`}>
                            All types of businesses need access to development resources, so we<br></br> give you the option to decide how much you need to use.
                        </Typography>                    
                    </Grid> 
                    <Grid item> 
                        <Typography className={classes.bootstrapThemeSubTitle}>
                            Annual
                        <Switch
                            checked={false}                        
                            name="checkedB"
                            color="primary"
                        />
                        Monthly
                        </Typography>

                    </Grid>                   
                </Grid>
            </div>           
        </>
    );
}

export default Home;

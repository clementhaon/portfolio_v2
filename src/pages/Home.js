import React, { useRef } from 'react';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import './style/HomeStyle.css';
import '../App.css';
import avatar from '../assets/avatar-min.png';
import avatarLight from '../assets/avatar-light-min.png';
import {Avatar} from "@mui/material";
import Header from "./components/Header";
import Lights from "./components/Light";
import Deck from './components/Deck';
import {TypeAnimation} from "react-type-animation";
import { useTheme } from '@mui/material/styles';
import Lottie from "lottie-react";
import dataAnimation from '../assets/animation_lmgih2ab.json';
import '@dotlottie/player-component';
import CloudLottie from '../assets/animation_ln1kmzxp.lottie';

const url = (name, wrap = false) =>
    `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function Home() {
    const theme = useTheme();
    const parallax = useRef(null);

    return (
        <div style={{ width: '100%', height: '100%', background: '#262626' }}>
            <Parallax ref={parallax} pages={3}>
                <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
                <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />

                <ParallaxLayer
                    offset={0}
                    speed={0}
                    factor={3}
                    className={theme.palette.mode === 'light' ?'background-light' : 'background-dark'}
                >
                    <Lights />
                </ParallaxLayer>

                <ParallaxLayer offset={1.8} speed={-0.3} style={{ pointerEvents: 'none' }}>
                    <Lottie
                        animationData={dataAnimation}
                        style={{
                            height: "200px",
                            transform: "translate(0, -50%) rotate(-0.03turn)",
                            marginLeft: '55%',
                            zIndex:9000
                        }}
                        loop={true}
                    />
                </ParallaxLayer>

                {/*<ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />*/}
                {/*</ParallaxLayer>*/}

                {/*<ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />*/}
                {/*</ParallaxLayer>*/}

                {/*<ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />*/}
                {/*</ParallaxLayer>*/}

                {/*<ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />*/}
                {/*</ParallaxLayer>*/}

                {/*<ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />*/}
                {/*    <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />*/}
                {/*</ParallaxLayer>*/}

                <ParallaxLayer
                    offset={2.5}
                    speed={-0.4}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        pointerEvents: 'none',
                    }}>
                    <img src={url('earth')} style={{ width: '60%' }} />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0.3}
                    style={{
                        backgroundSize: '80%',
                        backgroundPosition: 'center',
                        backgroundImage: url('clients', true),
                    }}
                />

                <ParallaxLayer
                    offset={0}
                    speed={0.1}
                    className={theme.palette.mode === 'light' ?'first-screen-light' : 'first-screen-dark'}
                >

                    {theme.palette.mode === 'light' ? (
                        <>
                        <ParallaxLayer
                            offset={0}
                            speed={-0.6}
                            style={{position:'absolute', opacity: 0.8}}>
                            <dotlottie-player
                                autoplay={true}
                                loop={true}
                                mode="normal"
                                src={CloudLottie}
                                style={{position: "relative",width: "30%",top:100, left:1300}}
                            />

                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0}
                            speed={-0.5}
                            style={{position:'absolute',opacity: 0.6}}>
                            <dotlottie-player
                                autoplay={true}
                                loop={true}
                                mode="normal"
                                src={CloudLottie}
                                style={{position: "relative",width: '35%',bottom:350, left: 1000}}
                            />
                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0}
                            speed={-0.3}
                            style={{position:'absolute', opacity: 0.4}}>
                            <dotlottie-player
                                autoplay={true}
                                loop={true}
                                mode="normal"
                                src={CloudLottie}
                                style={{position: "relative",width: '25%',bottom:400, right: 0}}
                            />

                        </ParallaxLayer>

                        <ParallaxLayer
                            offset={0}
                            speed={-0.1}
                            style={{position:'absolute',width:"100%", height:"100%", opacity: 0.5}}>
                            <dotlottie-player
                                autoplay={true}
                                loop={true}
                                mode="normal"
                                src={CloudLottie}
                                style={{position: "relative",width: "30%",top:300, right:20 }}
                            />

                        </ParallaxLayer>
                        <ParallaxLayer
                            offset={0}
                            speed={-0.1}
                            style={{position:'absolute',width:"100%", height:"100%", opacity: 0.3}}>
                            <dotlottie-player
                                autoplay={true}
                                loop={true}
                                mode="normal"
                                src={CloudLottie}
                                style={{position: "relative",width: "30%",top:0, left:150 }}
                            />

                        </ParallaxLayer>

                        </>
                        ) : null
                    }

                    <Header/>

                    {theme.palette.mode === 'light' ? (
                        <Avatar
                            sx={{ width:"100%", height:'auto', aspectRatio:"1/1", maxHeight:250, maxWidth:250}}

                            src={avatarLight}
                        />
                    ) : (
                        <Avatar
                            sx={{ width:"100%", height:'auto', aspectRatio:"1/1", maxHeight:250, maxWidth:250}}

                            src={avatar}
                        />
                    )}

                    <TypeAnimation
                        style={{ whiteSpace: 'pre-line', height: '195px', fontSize: '3em', fontWeight:600, zIndex: 9000 }}
                        sequence={[
                            `Clément Haon Développeur\nFullStack Web Mobile`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                            2000,
                            '',
                        ]}
                        repeat={Infinity}
                    />
                </ParallaxLayer>

                <ParallaxLayer
                    offset={1}
                    speed={0.1}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {/*<div className={'container'}>*/}
                    {/*    <Deck/>*/}
                    {/*</div>*/}
                </ParallaxLayer>

                <ParallaxLayer
                    offset={2}
                    speed={-0}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    onClick={() => parallax.current.scrollTo(0)}>
                    <img src={url('clients-main')} style={{ width: '40%' }} />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}
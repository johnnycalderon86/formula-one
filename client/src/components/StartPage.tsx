import React, { useState } from 'react'
import '../styles/StartPage.css'
import useSound from 'use-sound';
import { Link } from 'react-router-dom'

import { motion } from 'framer-motion'
const f1Sound = require("../sounds/f1pass.mp3")

export const StartPage = () => {
    const [play, { pause }] = useSound(
        f1Sound,
        { volume: 0.1 }
    );
    const [isHovering, setIsHovering] = useState(
        false
    );
    const onHoverHome = () => {
        setIsHovering(true);
        play();
    }
    const unHoverHome = () => {
        setIsHovering(false);
        pause();
    }
    const containerVariantsLeft = {

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring', delay: 0.5
            }
        },
        exit: {
            x: '-100vw',
            transition: {
                delay: 0.5,
                duration: 1,
                ease: 'easeOut'
            }
        }
    }
    const containerVariantsRight = {

        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: 'spring', delay: 0.5
            }

        },
        exit: {
            x: '100vw',
            transition: {
                delay: 0.5,
                duration: 1,
                ease: 'easeOut'
            }
        }
    }
    return (
        <Link to="/home"

            onMouseEnter={onHoverHome}
            onMouseLeave={unHoverHome}
        >
            <div className="Startpage-div"

            >
                <motion.div className="left-side"
                    variants={containerVariantsLeft}
                    animate="visible"
                    exit="exit"
                >

                    <h1 className="glitch">
                        F1
                </h1>
                </motion.div>
                <motion.div className="right-side"
                    variants={containerVariantsRight}
                    animate="visible"
                    exit="exit"
                >


                    <h1 className="glitch">Fans</h1>
                </motion.div>

            </div>
        </Link>
    )
}

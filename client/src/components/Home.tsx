import React from 'react'
import '../styles/Home.css'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
const containerVariants = {
    hidden: {
        opacity: 0,
        y: '-100vh',
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            ease: 'easeInOut', 
        }
    },
    exit: {
        y: '-100vh',
        transition: {
            ease: 'easeInOut'
        }
    }
}

export const Home = () => {

    return (
        <motion.div className="Home-div"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <nav className="Home-nav">
                <Link className="Home-Link" to='/about'>About</Link>
                <Link className="Home-Link" to='/circuits'>Circuits</Link>
                <Link className="Home-Link" to='/teams'>Teams</Link>
                <Link className="Home-Link" to='/drivers'>Drivers</Link>
            </nav>
        </motion.div>
    )
}

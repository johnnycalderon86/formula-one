import React from 'react'
import '../styles/About.css'
import { motion } from 'framer-motion'
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

export const About = () => {
    return (
        <motion.div className="About-div"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="card">
                <p>I built this site to teach myself GraphQL using NodeJS, Apollo, React and MongoDB.</p>
                <p>I created a GraphQL server that has a 'Circuits' object type. For the moment this is the only RootQuery.</p>
                <p>The plan is to add 2 more object types: 'Teams' and 'Drivers'.</p>
                <p>I am an avid fan of Formula 1 and wanted to create an informative site where all information concerning drivers teams and circuits is continuously updated.  </p>
            </div>
        </motion.div>
    )
}

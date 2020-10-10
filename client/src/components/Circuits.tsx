import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { CircuitsCard } from './CircuitsCard'
import '../styles/Circuits.css'
import { motion } from 'framer-motion'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
const getCircuitsQuery = gql`
{
    circuits{
        name
        city
        fastestLap
        fastestLapDriver
        fastestLapYear
        fastestLapTeam
        fastestLapCar
        length
        country
        id
        trackImage
        weekendDate
        month
    }
}
`

export interface ICircuit {
    name: string,
    city: string,
    fastestLap: string,
    fastestLapDriver: string,
    fastestLapYear: string,
    fastestLapTeam: string,
    fastestLapCar: string,
    length: string,
    country: string,
    id: string,
    trackImage: string,
    weekendDate:string
    month:string
}
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
const element = <FontAwesomeIcon icon={faArrowCircleLeft} />

const Circuits = () => {



    const { loading, error, data } = useQuery(getCircuitsQuery);
    console.log(data);
    const displayCircuits = () => {
        const circuitsData = data;
        if (loading) {
            return <p>Loading....</p>
        } else if (error) {
            return <p>Error Fetching Data</p>
        }
        else {
            return circuitsData.circuits.map((circuit: ICircuit) => {
                return <CircuitsCard key={circuit.id} circuit={circuit} />
            })
        }


    }

    return (
        <motion.div className="Circuits-div"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        >

    <h1 className="Circuits-h1"> <Link to='/home'>{element}</Link> Circuits</h1>
    
            <div className="Circuits-cards-div">
            {displayCircuits()}

            </div>
        </motion.div>
    )
}

export default Circuits

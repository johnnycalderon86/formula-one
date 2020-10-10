import React from 'react'
import { ICircuit } from './Circuits'
import '../styles/CircuitsCard.css'
import { motion } from 'framer-motion'

type Tcircuits = {
    circuit: ICircuit
}


export const CircuitsCard = ({ circuit }: Tcircuits) => {
    return (
        <motion.div className="CircuitsCard-div"
       
        whileHover={{ scale: 1.1 }}
        >
            <h1 className="CircuitsCard-h1">{circuit.name}</h1>
            <h3 className="CircuitsCard-city-country">{circuit.city} - {circuit.country}</h3>

            <h3 className="CircuitsCard-fastestLap">Fastest Lap: <span className="fastestLap-span">{circuit.fastestLap}</span></h3>
            <h3 className="CircuitsCard-fastestLapDriver">{circuit.fastestLapDriver}({circuit.fastestLapYear})</h3>
            <h3 className="length">Length: {circuit.length}</h3>
            <motion.img className="card-img" src={circuit.trackImage} alt="circuit" 
            whileHover={{ scale: 1.9 }}
            whileTap={{ scale: 2 }}
            />

        </motion.div>
    )
}

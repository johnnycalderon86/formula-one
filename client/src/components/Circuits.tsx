import React from 'react'
import { useQuery, gql } from '@apollo/client';


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
    }
}
`

const Circuits = () => {
    const { loading, error, data } = useQuery(getCircuitsQuery);

    console.log(data);

    if(loading) return <p>Loading....</p>

    if(error) return <p>Ops! Something went wrong</p>

    return (
        <>
            <h1>All good, got'em Data!</h1>
        </>
    )
}

export default Circuits

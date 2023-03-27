import React, { useEffect, useState } from 'react'

const Grid = ({ countryDetails }) => {

    const [countryData, setCountryData] = useState([])

    useEffect(() => {
        setCountryData(countryDetails)
    }, [countryDetails]);

    

    const colors = ['#FF738E', '#A548FF', '#FFA53B', '#6422B8', '#FFD93B', '#6c5656']
    return (
        <>
            {
                countryData?.map((obj, index) => {
                    return <div key={obj.country_id} className='item' style={{ background: colors[index] }}>
                        {obj.probability ? obj.country_id + '-' + obj.probability : ''}
                    </div>
                })
            }

        </>

    )
}

export default Grid
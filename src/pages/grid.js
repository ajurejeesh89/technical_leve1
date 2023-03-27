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

                   // return numb.toString().split('.')[1].length;
                    let prob =  parseFloat(obj.probability * 100).toFixed(1)+"%"
                    //let  converString = prob.toString().split('.')[1].length;


                    //`${parseFloat(num * 100).toFixed(2)}%`;
                   // let probability = obj.probability * 100 
                    //let fixedLength = probability.toFixed(1)
                    return <div key={obj.country_id} className='item' style={{ background: colors[index] }}>
                        {obj.probability ? obj.country_id + '-' + prob : ''}
                    </div>
                })
            }

        </>

    )
}

export default Grid
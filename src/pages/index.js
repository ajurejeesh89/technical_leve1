import React from 'react'
import Grid from './grid'
import SearchBox from './searchBox'
import { useState } from 'react'
import ErrorPage from './error'

const IndexPage = () => {

    let initailCountryDetails = [
        {
            "country_id": "0",
            "probability": null
        }, {
            "country_id": "1",
            "probability": null
        }, {
            "country_id": "2",
            "probability": null
        }, {
            "country_id": "3",
            "probability": null
        }, {
            "country_id": "4",
            "probability": null
        }, {
            "country_id": "5",
            "probability": null
        }];

    const [textValue, setTextValue] = useState('')
    const [countryDetails, setcountryDetails] = useState(initailCountryDetails);


    const onButtonClick = async (e) => {


        if (textValue) {
            console.log("Clicked")
             e.preventDefault();
            try {
                const res = await fetch(`https://api.nationalize.io/?name=${textValue}`)
                const data = await res.json()
                console.log("Data from api", data);
                setcountryDetails(data.country)
            }
            catch (err) {
                console.log(err.message)
                setcountryDetails([])
            }
        }
        else {
            alert("Please enter name")
            return
        }
    }

    const onTextBoxChange = (e) => {
        const { value } = e.target;
        const result = /^[A-Za-z]+$/;
        if (value === "" || result.test(value)) {
            setTextValue(value);
        }
    }


    const onCloseButtonClick = () => {
       setTextValue("");
        setcountryDetails(initailCountryDetails)
    }

    return (
        <>
            <main id="main">
                <section id="why-us" className="why-us blog">
                    <div className="container">
                        <div className="row g-0">
                            <div className="col-xl-6 img-bg backImage">

                                <div>
                                    <img src="assets/img/logonew.png" width="40%" alt='logo' />
                                </div>

                                <div className="col-xl-6 searchPadding">
                                    <div className="sidebar ps-lg-4">

                                        <div className="sidebar-item search-form">
                                            <SearchBox
                                                initialTextBoxValue={textValue}
                                                onButtonClick={onButtonClick}
                                                onTextBoxChange={onTextBoxChange}
                                                onCloseButtonClick={onCloseButtonClick}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 slides">

                                <div className="grid-container" id="countryDetails">
                                    {
                                        (countryDetails.length > 0 ? <Grid countryDetails={countryDetails} /> : <ErrorPage />)
                                    }
                                </div>


                            </div>
                        </div>
                    </div>
                </section>

            </main>


            <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/search.js"></script>

        </>

    )
}



export default IndexPage
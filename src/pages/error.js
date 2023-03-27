import React from 'react'

const ErrorPage = () => {
    console.log("sd,fj");
    return (

        <div id="error" className="grid-container">
            <div className="containerError">
                <div className="imageError">
                    <img src="assets/img/boy-error.png" width="200%" alt='error' />
                </div>
                <div className="errorMessage">
                    <p>Sorry</p>
                    <p>Can't predict your Nationality</p>
                </div>
            </div>
        </div>


    )
}

export default ErrorPage
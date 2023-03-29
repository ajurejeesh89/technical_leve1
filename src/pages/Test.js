import React from 'react'

const Test = () => {
    let teams = 
        {
            "comembers": [
                { "comemberName": "Mahmoud El Meligy", "designation": "Chief Operating Officer" , "imageName": '1.jpg'},
                { "comemberName": "Wael Nehme", "designation": "VP, Supply Chain & Projects" , "imageName": '2.jpg'},
                { "comemberName": "Nassif Bazouzi", "designation": "VP & Chief Financial Officer" , "imageName": '3.jpg'},
                { "comemberName": "Mahmoud El Meligy", "designation": "Chief Operating Officer" , "imageName": '4.jpg'},
                { "comemberName": "Wael Nehme", "designation": "VP, Supply Chain & Projects" , "imageName": '5.jpg'},
                { "comemberName": "Mahmoud El Meligy", "designation": "Chief Operating Officer" , "imageName": '6.jpg'},
                { "comemberName": "Wael Nehme", "designation": "VP, Supply Chain & Projects" , "imageName": '7.jpg'},
            ],
            "teamName": "EXECUTIVE MANAGEMENT",
            "chief": {
                "chiefName": "John",
                "chiefDesg": "CEO",
                
            }
        }
    return (
        <>

           <div className="min-h-screen bg-yello-300 p-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 gap-12">
                    <div className="md:flex md:flex-col md:justify-center">
                        <h2 className="text-black text-2xl md:text-4xl lg:text-6xl font-bold mb-4">
                            welcome
                        </h2>
                        <p className="md:text-lg text-grey-900">Responsive </p>
                    </div>
                  
                    <FirstLevel teams={teams} />
                    {/* <FirstLevel teams={teams} /> */}
                    

                </div>
            </div>
          
            
        </>
    )
    }

const FirstLevel = ({ teams }) => {
    const coMembersArray = teams.comembers
    console.log("coMembersArray",coMembersArray.length);

    return (
        <>
                           
                           <div className="w-full rounded-lg shadow-2xl bg-white md:bg-purple-200 p-10 md:text-center">
                           {teams.teamName}
                           {teams.chief.chiefName && <img className="rounded w-36 h-36 mx-auto" src="assets/images/team/1.jpg" alt="Extra large avatar"></img> }
                                                        
                                <p>{teams.chief.chiefName}</p><p>{teams.chief.chiefDesg}</p>

                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 bg-yellow-400">
                                    { 
                                    
                                    coMembersArray.length > 0 && teams.comembers.map((membersObj, index) => {
                                            let imageSrc = membersObj.imageName
                                            let path = `assets/images/team/${imageSrc}`
                                            return (
                                                <div className='mb-4 py-2 px-10' key={index}>
                                                     <img className="rounded w-36 h-36 " src={path} alt="Extra large avatar"></img>
                                                    
                                                   <p>{membersObj.comemberName}</p> 
                                                   <p> {membersObj.designation}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                </div>

                            
        </>
    )
}

export default Test
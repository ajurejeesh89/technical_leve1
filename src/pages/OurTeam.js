import React from 'react'
import Team from './Team'




const OurTeam = () => {

  let teams = [

    {
      "comembers": [
        { "comemberName": "Mahmoud El Meligy", "designation": "Chief Operating Officer" , "imageName": '1.jpg'},
        { "comemberName": "Wael Nehme", "designation": "VP, Supply Chain & Projects" , "imageName": '2.jpg'},
        { "comemberName": "Nassif Bazouzi", "designation": "VP & Chief Financial Officer" , "imageName": '3.jpg'},
        { "comemberName": "Mahmoud El Meligy", "designation": "Chief Operating Officer" , "imageName": '4.jpg'}
         

      ],
      "teamName": "EXECUTIVE MANAGEMENT",
      "chief": {
        "chiefName": "Tarek Elsakka",
        "chiefDesg": "Chief Executive Officer",
        "imageName" : "ceo.png"
      }
    },

    {
      "comembers": [
        { "comemberName": "Mahmoud El Meligy", "designation": "Chief Operating Officer" , "imageName": '1.jpg'},
        { "comemberName": "Wael Nehme", "designation": "VP, Supply Chain & Projects" , "imageName": '2.jpg'},
        { "comemberName": "Nassif Bazouzi", "designation": "VP & Chief Financial Officer" , "imageName": '3.jpg'},
        { "comemberName": "Mahmoud El Meligy", "designation": "Chief Operating Officer" , "imageName": '4.jpg'}
        

      ],
      "teamName": "SALES AND MARKETING",
      "chief": {
        "chiefName": "",
        "chiefDesg": "",
        "imageName" : ""
      }
    },
    {
      "comembers": [
       
    ],
      "teamName": "LEGAL",
      "chief": {
        "chiefName": "Tarek Elsakka",
        "chiefDesg": "Chief Executive Officer",
        "imageName" : "ceo.png"
      }
    },
    {
      "comembers": [
        { "comemberName": "Mahmoud El Meligy", "designation": "Chief Operating Officer" , "imageName": '1.jpg'},
        { "comemberName": "Wael Nehme", "designation": "VP, Supply Chain & Projects" , "imageName": '2.jpg'}
      ],
      "teamName": "HUMAN RESOURCES",
      "chief": {
       
      }
    }
    
    
  ]
  return (
    <>
    
       <div className="min-h-screen bg-yello-300 p-10">
                <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 gap-7">
                    <div className="md:flex md:flex-col md:justify-center">
                        <h2 className="text-black text-lg md:text-2xl lg:text-4xl font-bold mb-4 md:text-center">
                            MEET OUR TEAM
                        </h2>
                        <p className="md:text-lg text-grey-900"> </p>
                    </div>
                  
                    <Team teams={teams} />
                    {/* <FirstLevel teams={teams} /> */}
                    
               </div>
            </div>


            
          

    </>
  )

}





export default OurTeam
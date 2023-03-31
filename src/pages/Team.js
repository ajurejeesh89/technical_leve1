
const Team = ({ teams }) => {
    return (
        <>
            {
               
                teams.map((item, index) => {
                    const coMembersArray = item.comembers
                    let chiefimageSrc = item.chief.imageName
                    let imagepath = `assets/images/team/${chiefimageSrc}`
                  
                    return (

                        <>
                            <div key={index} className="w-full rounded-lg bg-white md:text-center card"  >
                                <div className="container mx-auto p-5 text-lg font-bold text-black md:text-center sm:text-center">
                                    {item.teamName}
                                </div>
                                 {item.chief.chiefName && <div className="w-60 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mx-auto border-2 border-blue">

                                 <div className="px-4 py-3 w-60">
                                        <img src={imagepath} alt="Product" className="h-70 w-60 object-cover rounded-t-xl" />
                                        <span className="text-base font-bold text-black">{item.chief.chiefName}</span>
                                        <p className="text-sm font-bold text-gray-400">{item.chief.chiefDesg}</p>
                                    </div>

                                </div>
                                }
                             
                                <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                                    {

                                        coMembersArray.length > 0 && item.comembers.map((membersObj, index) => {
                                            let imageSrc = membersObj.imageName
                                            let path = `assets/images/team/${imageSrc}`
                                            return (
                                                <div className="w-60 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl border-2 border-blue" key={index}>
                                                    <img src={path} alt="team" className="h-70 w-60 object-cover rounded-t-xl" />

                                                    <div className="px-4 py-3 w-60">
                                                        <span className="text-base font-bold text-black">{membersObj.comemberName}</span>
                                                        <p className="text-sm font-bold text-gray-400">{membersObj.designation}</p>

                                                    </div>
                                                </div>
                                            )
                                        })
                                    }

                                </section>
                            </div>
                        </>
                    )

                })

            }
        </>
    )
}

export default Team
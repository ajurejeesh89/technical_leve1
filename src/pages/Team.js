

const Team = ({ teams }) => {
    return (
        <>
            {
                teams.map((item,index) => {
                    const coMembersArray = item.comembers

                    return (

                        <div className="w-full rounded-lg shadow-2xl bg-white md:bg-purple-200 p-10 md:text-center" key={index}>
                            {item.teamName}
                            {item.chief.chiefName && <img className="rounded w-36 h-36 mx-auto" src="assets/images/team/1.jpg" alt="Extra large avatar"></img>}

                            <p>{item.chief.chiefName}</p><p>{item.chief.chiefDesg}</p><br />


                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 bg-yellow-400 py-6">
                                {

                                    coMembersArray.length > 0 && item.comembers.map((membersObj, index) => {
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
                    )

                })

            }
        </>


    )
}

export default Team
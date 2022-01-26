import { useEffect, useState } from "react";
import { fetchMembers } from "../api";

import { Member } from "../types/Members";

import generateRandomString from '../util/generateRandomString'

const MemberProfile: React.FC<{member: Member}> = ({member}) => {
    return (
        <div className="w-1/2 p-5">
            <img className="h-20 w-20 rounded-full object-cover object-top" src={member.img} alt="" />
            <p className="mt-6 mb-2 text-xl">{member.name}</p>
        </div>
    );
}

const Team: React.FC = () => {

    const [ members, setMembers ] = useState<null | Member[]>(null)

    useEffect(() => {

        const getMembers = async () => {

            const response = await fetchMembers()
            if (!response) {
                return
            }
            setMembers(response)
        }

        getMembers()

    }, [])

    return (
        <section className="py-20" id='team'>
            <div className="container px-4 mx-auto">
                <div className="flex flex-col md:flex-row justify-around">

                    <div className="max-w-md md:mr-10 mb-10 md:mb-0">

                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl">
                            Our Team
                        </span>

                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                        </h2>

                        <p className="text-blueGray-400 leading-loose">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                            Veritatis quisquam cum aliquam rem.
                        </p>

                    </div>

                    <div className="flex flex-wrap">
                        {

                            members ?

                            members.map((member) => {
                                return (
                                    <MemberProfile key={generateRandomString(5)} member={member} />
                                );
                            })

                            :

                            <div>loading...</div>

                        }
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Team;

import { useEffect, useState } from "react";
import { fetchMembers } from "../api";
import { SECTIONS } from "../constants/sections";

import { Member } from "../types/Members";

import generateRandomString from '../util/generateRandomString'

const MemberProfile: React.FC<{ member: Member }> = ({ member }) => {
    return (
        <div className="mb-6 w-full md:w-1/2 lg:w-1/3 px-3">
            <div className="py-24 bg-blue-200 rounded text-center">
                <img className="mx-auto mb-8 w-24 h-24 rounded-full object-cover" src={member.img} alt=""/>
                    <h4 className="mb-2 text-2xl font-bold font-headig text-gray-900">{member.name}</h4>
            </div>
        </div>
    );
}

const Team: React.FC = () => {

    const [members, setMembers] = useState<null | Member[]>(null)

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
        <section id={SECTIONS.TEAM}>
            <div className="flex flex-center flex-col py-20 bg-gray-900 radius-for-skewed min-h-screen justify-center items-center">
                <div className="container mx-auto px-4">
                    <div className="max-w-xl mx-auto mb-10 text-center">
                        <span className="text-blue-600 font-bold">That Would be Optimal</span>
                        <h2 className="text-4xl lg:text-5xl font-bold font-heading text-blue-200">Check our awesome team members</h2>
                    </div>
                    <div className="flex flex-wrap">

                        {
                            members ?

                            members.map((member) => {
                                return (
                                    <MemberProfile member={member} key={generateRandomString(5)}/>
                                )
                            })
                            :
                            <div/>
                        }
                        
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Team;

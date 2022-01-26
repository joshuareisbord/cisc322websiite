import { TEAM_MEMBERS } from "../constants/team_members";

import generateRandomString from '../util/generateRandomString'

const MemberProfile: React.FC<{img: string, name: string}> = ({img, name}) => {
    return (
        <div className="w-1/2 p-5">
            <img className="h-20 w-20 rounded-full object-cover object-top" src={img} alt="" />
            <p className="mt-6 mb-2 text-xl">{name}</p>
        </div>
    );
}

const Team: React.FC = () => {

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
                            TEAM_MEMBERS.map((member) => {
                                return (
                                    <MemberProfile key={generateRandomString(5)} img={member.img} name={member.name} />
                                );
                            })
                        }
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Team;

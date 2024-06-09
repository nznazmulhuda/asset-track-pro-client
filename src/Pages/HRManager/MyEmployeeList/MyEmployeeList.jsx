import { useContext, useEffect, useState } from "react";
import Team from "../../../Components/MyEmployee/Team";
import Heading from "../../../Components/Shared/Heading";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";

function MyEmployeeList() {
    const [members, setMembers] = useState([]);
    const { user } = useContext(AuthContext);
    const { data } = useQuery({
        queryKey: ["employees"],
        queryFn: async () => {
            return await axios.get(`/user?email=${user.email}`);
        },
    });

    useEffect(() => {
        const datas = data?.data?.employee;
        setMembers(datas);
    }, [data]);

    return (
        <div className="container mx-auto">
            <Heading
                title={"Your Employee List"}
                subTitle={"all of your team member"}
            />

            <div className="flex items-center md:gap-16 justify-center flex-wrap mt-5">
                {members &&
                    members?.map((member) => {
                        return (
                            <Team
                                key={member._id}
                                memberName={member.name}
                                memberPic={member.photo}
                                memberType={member.role}
                                member={member}
                            />
                        );
                    })}
            </div>
        </div>
    );
}

export default MyEmployeeList;

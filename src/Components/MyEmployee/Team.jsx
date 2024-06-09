import PropType from "prop-types";
import { Button } from "@mui/material";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import toast from "react-hot-toast";

function Team({ memberName, memberPic, memberType, member }) {
    const { user } = useContext(AuthContext);
    const handleRemoveMember = (_id) => {
        axios.get(`/user?email=${user.email}`).then((res) => {
            if (res.data) {
                const oldData = res?.data?.employee;
                const newData = oldData.filter((item) => item._id === _id);
                console.log({ newData, oldData });
                axios
                    .put(`/user?email=${user.email}&modify=${true}`, newData)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => toast.error(err.message));
            }
        });
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full border-2 border-primary p-1 lg:p-2">
                    <img
                        className="rounded-full w-full h-full"
                        src={memberPic}
                        alt={memberName}
                    />
                </div>

                <h1 className="mt-1 md:mt-2 lg:mt-3 font-bold text-lg md:text-xl lg:text-2xl">
                    {memberName}
                </h1>

                <div className="flex items-center justify-center gap-3 flex-wrap">
                    <h3 className="mt-2 md:mt-3 bg-primary text-secondary font-bold p-1 md:p-2 rounded-md text-lg cursor-pointer">
                        {memberType}
                    </h3>

                    {memberType === "employee" && (
                        <Button
                            variant="contained"
                            color="secondary"
                            style={{ marginTop: 10 }}
                            onClick={() => handleRemoveMember(member._id)}
                        >
                            Remove From Team
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
}

Team.propTypes = {
    memberName: PropType.string,
    memberPic: PropType.string,
    memberType: PropType.string,
    member: PropType.object,
};

export default Team;

import Team from "../../../Components/MyEmployee/Team";
import Heading from "../../../Components/Shared/Heading";

function MyEmployeeList() {
    return (
        <div className="container mx-auto">
            <Heading
                title={"Your Employee List"}
                subTitle={"all of your team member"}
            />

            <div className="flex items-center md:gap-16 justify-center flex-wrap mt-5">
                <Team
                    memberName={"Nazmul Huda"}
                    memberPic={"https://i.ibb.co/HGMZbc7/4.jpg"}
                    memberType={"Employee"}
                />

                <Team
                    memberName={"Nazmul Huda"}
                    memberPic={"https://i.ibb.co/HGMZbc7/4.jpg"}
                    memberType={"Admin"}
                />
            </div>
        </div>
    );
}

export default MyEmployeeList;

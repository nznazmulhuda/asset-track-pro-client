import { useContext } from "react";
import Heading from "../../../Components/Shared/Heading";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase.config";
import { toast } from "react-hot-toast";

function Profile() {
    const { user } = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;

        updateProfile(auth.currentUser, {
            displayName: name,
        })
            .then(() => {
                toast.success("Profile updated successfully");
            })
            .catch((err) => {
                toast.error(err.message);
            });
    };

    return (
        <>
            <div>
                <Heading
                    title={"Profile"}
                    subTitle={"you can update your profile"}
                />

                {/* profile section */}
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-center flex-col gap-5">
                        <input
                            className="border-b-2 rounded-lg border-primary md:w-2/5 py-2 px-4"
                            defaultValue={user.displayName}
                            name="name"
                            type="text"
                            required
                        />

                        <input
                            className="border-b-2 rounded-lg border-primary md:w-2/5 py-2 px-4"
                            readOnly
                            defaultValue={user.email}
                            type="email"
                        />

                        <input
                            className="border py-2 px-4 rounded-md cursor-pointer font-bold"
                            type="submit"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default Profile;

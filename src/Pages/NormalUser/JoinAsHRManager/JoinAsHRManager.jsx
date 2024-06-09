import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase.config";

function JoinAsHRManager() {
    const { register: registerEmail, setRole } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const email = data.email;
        const role = "hrManager";
        const companyPhoto = data.companyLogo;
        const companyName = data.companyName;
        const employee = [];
        const user = { email, role, companyPhoto, companyName, employee };

        // const image_hosting_api = `https://api.imgbb.com/1/upload?key=${
        //     import.meta.env.VITE_IMGBB_KEY
        // }`;

        // axios
        //     .post(image_hosting_api, data.photo[0], {
        //         headers: {
        //             "Content-Type": "multipart/form-data",
        //         },
        //     })
        //     .then((res) => console.log(res.data))
        //     .catch((err) => console.error(err.message));

        registerEmail(data.email, data.password)
            .then((res) => {
                if (res) {
                    axios.post("/user", user).then((res) => {
                        if (res.data.insertedId) {
                            updateProfile(auth.currentUser, {
                                displayName: data.fullName,
                                photoURL: data.photo,
                            })
                                .then(() => {
                                    toast.success("Register Success!");
                                    axios
                                        .get(`/role?email=${user.email}`)
                                        .then((res) =>
                                            setRole(res?.data?.role),
                                        );
                                    navigate("/");
                                })
                                .catch((e) => toast.error(e.message));
                        }
                    });
                }
            })
            .catch((e) => toast.error(e.message));
    };
    return (
        <>
            <div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="container mx-auto mt-52 text-center border p-10 rounded-xl border-primary"
                >
                    <h1 className="mb-10 text-xl md:text-2xl lg:text-3xl font-bold">
                        Join As HR Manager
                    </h1>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="text"
                            placeholder="Enter full name"
                            {...register("fullName", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="text"
                            placeholder="Enter company name"
                            {...register("companyName", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="url"
                            placeholder="Company photo url"
                            {...register("companyLogo", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="url"
                            placeholder="Your photo URL"
                            {...register("photo", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="date"
                            placeholder="Your date of birth"
                            {...register("dateOfBirth", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <input
                        className="mt-2 md:mt-3 lg:mt-4 border border-primary py-2 px-5 rounded-lg text-lg font-bold text-primary hover:bg-primary hover:text-secondary transition-all ease-in cursor-pointer"
                        type="submit"
                        value={"Register"}
                    />
                </form>
            </div>
        </>
    );
}

export default JoinAsHRManager;

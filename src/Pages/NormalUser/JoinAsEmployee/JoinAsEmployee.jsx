import { useForm } from "react-hook-form";
import { Divider } from "@mui/material";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { auth } from "../../../Firebase/Firebase.config";
import { useNavigate } from "react-router-dom";

function JoinAsEmployee() {
    const {
        register: registerEmail,
        googleLogin,
        githubLogin,
    } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const email = data.email;
        const role = "employee";
        const company = "notAffiliated";
        const photo = data.photo;
        const name = data.fullName;
        const user = { email, role, company, photo, name };

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
                                    navigate("/");
                                })
                                .catch((e) => toast.error(e.message));
                        }
                    });
                }
            })
            .catch((e) => toast.error(e.message));
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                const email = res.user.email;
                const role = "employee";
                const company = "notAffiliated";
                const photo = res.user.photoURL;
                const name = res.user.displayName;
                const user = { email, role, company, photo, name };
                if (res) {
                    axios.post("/user", user).then((res) => {
                        if (res.data.insertedId) {
                            toast.success("Register Success!");
                            navigate("/");
                        }
                    });
                }
            })
            .catch((e) => toast.error(e.message));
    };

    const handleGithubLogin = () => {
        githubLogin()
            .then((res) => {
                const email = res.user.email;
                const role = "employee";
                const company = "notAffiliated";
                const photo = res.user.photoURL;
                const name = res.user.displayName;
                const user = { email, role, company, photo, name };
                if (res) {
                    axios.post("/user", user).then((res) => {
                        if (res.data.insertedId) {
                            toast.success("Register Success!");
                            navigate("/");
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
                        Join As Employee
                    </h1>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="text"
                            placeholder="fullName"
                            {...register("fullName", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="email"
                            placeholder="email"
                            {...register("email", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="password"
                            placeholder="password"
                            {...register("password", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="date"
                            placeholder="dateOfBirth"
                            {...register("dateOfBirth", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    {/* <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="file"
                            placeholder="Your Image"
                            accept="image/*"
                            {...register("photo", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div> */}

                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="url"
                            placeholder="Your Image Link"
                            accept="image/*"
                            {...register("photo", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <input
                        className="mt-2 md:mt-3 lg:mt-4 border border-primary py-2 px-5 rounded-lg text-lg font-bold text-primary hover:bg-primary hover:text-secondary transition-all ease-in cursor-pointer"
                        type="submit"
                        value={"Register"}
                    />

                    <Divider
                        style={{ marginTop: "10px", marginBottom: "10px" }}
                    >
                        or Login with
                    </Divider>

                    <div className="flex items-center justify-center gap-5">
                        <button type="button" onClick={handleGoogleLogin}>
                            <FaGoogle className="text-xl md:text-2xl lg:text-3xl" />
                        </button>

                        <button type="button" onClick={handleGithubLogin}>
                            <FaGithub className="text-xl md:text-2xl lg:text-3xl" />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default JoinAsEmployee;

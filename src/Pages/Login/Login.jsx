import { useForm } from "react-hook-form";
import { Divider } from "@mui/material";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
    const { login, googleLogin, githubLogin } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        login(data.email, data.password)
            .then((res) => {
                if (res.user) {
                    toast.success("Login Success!");
                    navigate("/");
                }
            })
            .catch((e) => toast.error(e.message));
    };

    const handleGoogleLogin = () => {
        googleLogin()
            .then((res) => {
                if (res.user) {
                    toast.success("Google Login Success!");
                    navigate("/");
                }
            })
            .catch((e) => toast.error(e.message));
    };

    const handleGithubLogin = () => {
        githubLogin()
            .then((res) => {
                if (res.user) {
                    toast.success("Github Login Success!");
                    navigate("/");
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
                        Login
                    </h1>
                    <div className="mb-3 md:mb-7 flex items-center justify-center">
                        <input
                            type="email"
                            placeholder="Enter your email address"
                            {...register("email", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            {...register("password", { required: true })}
                            className="outline-none border-b-2 py-2 px-4 border-primary rounded-xl md:text-lg w-full md:w-[50%]"
                        />
                    </div>

                    <input
                        className="mt-2 md:mt-3 lg:mt-4 border border-primary py-2 px-5 rounded-lg text-lg font-bold text-primary hover:bg-primary hover:text-secondary transition-all ease-in cursor-pointer"
                        type="submit"
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

export default Login;

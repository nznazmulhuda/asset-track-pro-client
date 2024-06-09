import { useContext } from "react";
import Heading from "../../../Components/Shared/Heading";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function AddAnAsset() {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const { user } = useContext(AuthContext);
    const { data: userData } = useQuery({
        queryKey: ["assets"],
        queryFn: async () => {
            const response = await axios.get(`/role?email=${user.email}`);
            return response.data;
        },
    });

    const onSubmit = (data) => {
        const date = new Date();
        const email = userData.email;
        const companyName = userData.companyName;
        const companyPhoto = userData.companyPhoto;
        const relaseDate = date.toLocaleDateString();
        const productName = data.productName;
        const productType = data.productType.toLowerCase();
        const productQuantity = +data.productQuantity;
        const asset = {
            email,
            companyName,
            companyPhoto,
            relaseDate,
            productName,
            productType,
            productQuantity,
        };

        axios
            .post("/asset", asset)
            .then((res) => {
                if (res.status === 200) {
                    toast.success("Asset saved successfully");
                    navigate("/assetList");
                }
            })
            .catch((e) => toast.error(e.message));
    };

    return (
        <>
            <div className="container mx-auto">
                <Heading title={"Add an Asset"} subTitle={"add an asset"} />

                <form className="mt-10" onSubmit={handleSubmit(onSubmit)}>
                    <h1 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">
                        Asset Details
                    </h1>

                    <div className="flex items-center justify-center flex-col gap-3 mt-3">
                        <input
                            type="text"
                            placeholder="product name"
                            {...register("productName", { required: true })}
                            className="border-b-2 border-primary md:w-2/5 py-2 px-3 rounded-lg"
                        />

                        <input
                            type="text"
                            placeholder="product type"
                            {...register("productType", { required: true })}
                            className="border-b-2 border-primary md:w-2/5 py-2 px-3 rounded-lg"
                        />

                        <input
                            type="number"
                            placeholder="product quantity"
                            {...register("productQuantity", { required: true })}
                            className="border-b-2 border-primary md:w-2/5 py-2 px-3 rounded-lg"
                        />

                        <input
                            type="submit"
                            value={"Add"}
                            className="border py-2 px-4 rounded-lg border-primary text-primary font-bold text-lg hover:bg-primary hover:text-secondary transition-all ease-in cursor-pointer"
                        />
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddAnAsset;

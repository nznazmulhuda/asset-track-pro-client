import Heading from "../../../Components/Shared/Heading";
import React from "react";
import { useForm } from "react-hook-form";

function AddAnAsset() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);

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

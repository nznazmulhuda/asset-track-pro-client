import { useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import AssetList from "../../../Components/MyAssets/AssetList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
function MyAssets() {
    const { user } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState(null);
    const [type, setType] = useState(null);
    const [assets, setAssets] = useState(null);
    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);
    };

    const { data, refetch } = useQuery({
        queryKey: ["assets"],
        queryFn: async () => {
            const response = await axios.get(
                `/request?search=${search}&type=${type}&status=${status}&clientMail=${user.email}`,
            );
            return response;
        },
    });

    useEffect(() => {
        setAssets(data?.data);
    }, [data]);

    useEffect(() => {
        if (search?.length === 0) {
            setSearch(null);
        }
        refetch();
    }, [search, status, type, refetch, handleSubmit]);

    // filter
    const onSubmit = (data) => {
        setStatus(data.status);
        setType(data.type);
    };

    return (
        <>
            <div className="container mx-auto">
                {/* Search and filter */}
                <div className="flex items-center justify-between flex-col md:flex-row">
                    {/* Search field */}
                    <form
                        onSubmit={handleSearch}
                        className="flex items-center gap-3 border px-3 rounded-md border-primary md:w-1/5 justify-between"
                    >
                        <input
                            type="text"
                            name="search"
                            required
                            defaultValue={null}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search by name"
                            className="outline-none py-2 px-4 w-full"
                        />
                        <button>
                            <FaSearch className="text-xl mr-2" />
                        </button>
                    </form>

                    {/* Filter */}
                    <div className="flex items-center gap-3 flex-wrap justify-center">
                        <h1 className="text-lg font-bold">Filter by:</h1>

                        <form
                            className="flex items-center gap-3 flex-wrap justify-center"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <select
                                className="text-lg border py-2 px-4 rounded-lg"
                                {...register("status")}
                            >
                                <option value="null">Status</option>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                            </select>

                            <select
                                className="text-lg border py-2 px-4 rounded-lg"
                                {...register("type")}
                            >
                                <option value="null">Type</option>
                                <option value="returnable">Returnable</option>
                                <option value="nonReturnable">
                                    Non-returnable
                                </option>
                            </select>

                            <input
                                className="border p-2 rounded-lg font-bold border-primary text-primary hover:bg-primary hover:text-secondary transition-all ease-in cursor-pointer"
                                type="submit"
                            />
                        </form>
                    </div>
                </div>

                {/* Asset List */}
                <div>
                    <AssetList assets={assets} />
                </div>
            </div>
        </>
    );
}

export default MyAssets;

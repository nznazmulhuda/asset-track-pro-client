import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import AssetList from "../../../Components/RequestForAsset/AssetList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function RequestForAsset() {
    const { register, handleSubmit } = useForm();
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState(null);
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
                `/asset?search=${search}&sort=${sort}&type=${type}&status=${status}`,
            );
            return response;
        },
    });

    useEffect(() => {
        setAssets(data?.data);
    }, [data]);
    // search
    useEffect(() => {
        if (search?.length === 0) {
            setSearch(null);
        }
        refetch();
    }, [search, sort, status, type, refetch, handleSubmit]);

    // sorting
    const onSort = (data) => {
        setSort(data.sort);
        setStatus(data.status);
        setType(data.type);
    };

    // filter
    const onSubmit = (data) => {
        setSort(data.sort);
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

                    {/* Sorting */}
                    <div className="flex items-center gap-3">
                        <h1 className="text-lg font-bold">Sort by:</h1>
                        <form
                            className="flex items-center gap-3 flex-wrap justify-center"
                            onSubmit={handleSubmit(onSort)}
                        >
                            <select
                                className="text-lg border py-2 px-4 rounded-lg"
                                {...register("sort")}
                            >
                                <option value="null">Quantity</option>

                                <option value="highToLow">High to Low</option>

                                <option value="lowToHigh">Low to High</option>
                            </select>

                            <input
                                className="border p-2 rounded-lg font-bold border-primary text-primary hover:bg-primary hover:text-secondary transition-all ease-in cursor-pointer"
                                type="submit"
                                value={"Sort"}
                            />
                        </form>
                    </div>

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
                                <option value="available">Available</option>
                                <option value="outOfStock">Out of Stock</option>
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

                {/* ALl Assets */}
                <div>
                    <AssetList assets={assets} />
                </div>
            </div>
        </>
    );
}

export default RequestForAsset;

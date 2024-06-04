import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaSearch } from "react-icons/fa";
import AssetLIst from "../../../Components/AssetList/AssetLIst";

function AssetsList() {
    const { register, handleSubmit } = useForm();
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);
    };

    // search
    useEffect(() => {
        // console.log(search);
    }, [search]);

    // sorting
    const onSort = (data) => {
        console.log(data);
    };

    // filter
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="container mx-auto">
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
                                {...register("request")}
                            >
                                <option value="null">Request</option>
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

                {/* Asset list */}
                <div>
                    <AssetLIst />
                </div>
            </div>
        </>
    );
}

export default AssetsList;

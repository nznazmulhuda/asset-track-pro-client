import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useForm } from "react-hook-form";
import AssetList from "../../../Components/MyAssets/AssetList";
function MyAssets() {
    const { register, handleSubmit } = useForm();
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        console.log(search);
    };

    useEffect(() => {
        // console.log(search);
    }, [search]);

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <div className="container mx-auto">
                {/* Search and filter */}
                <div className="flex items-center justify-between flex-col md:flex-row">
                    {/* Search field */}
                    <form
                        onSubmit={handleSearch}
                        className="flex items-center gap-3 border px-3 rounded-md border-primary md:w-2/5 justify-between"
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

                {/* Asset List */}
                <div>
                    <AssetList />
                </div>
            </div>
        </>
    );
}

export default MyAssets;

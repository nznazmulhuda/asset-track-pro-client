import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Heading from "../../../Components/Shared/Heading";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import { useQuery } from "@tanstack/react-query";

import axios from "axios";
import { useEffect, useState } from "react";

function createData(memberImage, memberName, memberType, _id) {
    return {
        memberImage,
        memberName,
        memberType,
        _id,
    };
}

// const rows = [
//     createData("https://i.ibb.co/HGMZbc7/4.jpg", "Nazmul Huda", "Employeee"),
// ];

function AddAnEmployee() {
    const stripe = "odd";
    const [rows, setRows] = useState([]);

    const { data } = useQuery({
        queryKey: ["employeeList"],
        queryFn: async () => {
            return await axios.get("/employee");
        },
    });

    useEffect(() => {
        const employees = data?.data;
        const newRows = employees?.map((employee) =>
            createData(
                employee.photo,
                employee.name,
                employee.role,
                employee._id,
            ),
        );
        setRows(newRows);
    }, [data]);

    const handleAdd = (id) => {
        console.log("Add an employee" + " " + id);
    };
    return (
        <>
            <div className="container mx-auto">
                <div className="flex items-center justify-between mt-5 mb-5 flex-col md:flex-row">
                    <h1 className="text-xl md:text-2xl font-bold">
                        Total Employee: 5
                    </h1>

                    <h1 className="text-xl md:text-2xl font-bold">
                        Package Limit: 5
                    </h1>

                    <Link to={"/payment"}>
                        <Button variant="outlined" color="secondary">
                            Increase Limits
                        </Button>
                    </Link>
                </div>

                <Heading
                    title={"Employee list"}
                    subTitle={"employee which are not affiliated"}
                />

                <Sheet>
                    <Table aria-label="striped table" stripe={stripe}>
                        <thead>
                            <tr>
                                <th>Select</th>
                                <th>Member Image</th>
                                <th>Member Name</th>
                                <th>Member Type</th>
                                <th>Add</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows?.map((row) => (
                                <tr key={row._id}>
                                    <td>
                                        <input
                                            className="w-5 h-5 md:mx-5"
                                            type="checkbox"
                                        />
                                    </td>
                                    <td>
                                        <img
                                            className="w-20 h-20 rounded-full"
                                            src={row.memberImage}
                                            alt={row.memberName}
                                        />
                                    </td>
                                    <td>{row.memberName}</td>
                                    <td>{row.memberType}</td>
                                    <td>
                                        <button
                                            onClick={() => handleAdd(row._id)}
                                        >
                                            Add
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Sheet>
            </div>
        </>
    );
}

export default AddAnEmployee;

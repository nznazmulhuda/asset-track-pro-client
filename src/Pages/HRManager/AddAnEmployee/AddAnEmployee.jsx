import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import Heading from "../../../Components/Shared/Heading";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

function createData(memberImage, memberName, memberType) {
    return {
        memberImage,
        memberName,
        memberType,
    };
}

const rows = [
    createData("https://i.ibb.co/HGMZbc7/4.jpg", "Nazmul Huda", "Employeee"),
];

function AddAnEmployee() {
    const stripe = "odd";
    const handleAdd = () => {
        console.log("Add an employee");
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
                            {rows.map((row) => (
                                <tr key={row.memberImage}>
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
                                    <td>{row.memberImage}</td>
                                    <td>{row.memberType}</td>
                                    <td>
                                        <button onClick={handleAdd}>Add</button>
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

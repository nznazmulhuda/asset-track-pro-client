import { PieChart } from "@mui/x-charts/PieChart";
import Heading from "../Shared/Heading";

function Pie() {
    return (
        <>
            <div>
                <Heading
                    title={"Pie Chart"}
                    subTitle={
                        "Total percentage of returnable items and non-returnable items"
                    }
                />

                <div className="flex items-center justify-center">
                    <PieChart
                        series={[
                            {
                                data: [
                                    { id: 0, value: 10, label: "Returnable" },
                                    {
                                        id: 1,
                                        value: 15,
                                        label: "Non-returnable",
                                    },
                                ],
                            },
                        ]}
                        width={500}
                        height={200}
                    />
                </div>
            </div>
        </>
    );
}

export default Pie;

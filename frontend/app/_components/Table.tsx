"use client";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import TableHeader from "./ui/TableHeader";
import TableBody from "./ui/TableBody";
import RefreshIcon from "./svg/RefreshIcon";
import { SearchInput } from "./ui/SearchInput";

interface DataType {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
}

const Table = () => {
    const tableHeaderList = ["Name", "Email", "Phone", "Attendance", "Discord"];
    const [data, setData] = useState<DataType[]>([]);
    // const fetchData = async () => {
    //     try {
    //         const res = await fetch("/api/test");
    //         if (!res.ok) {
    //             throw new Error("Failed to fetch data");
    //         }
    //         const result = await res.json();
    //         setData(result);
    //     } catch (error) {
    //         console.error("Error fetching data:", error);
    //     }
    // };
    const fetchData = () => {  // This is placeholder data, it breaks in the docker container to auto update on hot reload, so im using dummy data as placeholder.
        const placeholderData: DataType[] = [
            { first_name: "Odd", last_name: "Ss", email: "john.doe@example.com", phone_number: "1234567890" },
            { first_name: "FoxMaccloudNeedSMoreCharactersToTestForLimit", last_name: "foobar", email: "System@example.com", phone_number: "987292929" },
            { first_name: "AARONSWARTZ", last_name: "RSS", email: "Aaron@Swartz.com", phone_number: "+47 912 29 389" },
        ];
        setData(placeholderData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleOnClick = () => {
        fetchData(); // Reuse fetchData for the refresh button
    };

    console.table(data);

    return (
        <div>
            <div className="flex justify-end">
                {/* The button is placed inside the table component due to client-side rendering requirements. */}
                <Button handleOnClick={handleOnClick} className="" icon={<RefreshIcon />} />
                <SearchInput className="" type="" property="" />
            </div>
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        {tableHeaderList.map((text) => (
                            <TableHeader key={text} headerText={text} />
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <TableBody text={`${item.first_name} ${item.last_name}`} />
                            <TableBody text={item.email} />
                            <TableBody text={item.phone_number} />
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

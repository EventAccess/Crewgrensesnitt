"use client";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
import TableHeader from "./ui/TableHeader"
import TableBody from "./ui/TableBody"


//pass dataType as prop later.
interface DataType {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
}

const Table = () => {
    const tableHeaderList = [
        "Name", "Email", "Phone", "Attendence", "Discord"
    ];

    const [data, setData] = useState<DataType[]>([]);// data - variable, setData - function to actually set the value of data

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/test');
                const result = await res.json();
                setData(result);
            } catch (error) {
                console.log('Error fetching data', error);
            }
        };
        fetchData()
    }, [])

    const handleOnClick = () => {
        window.location.reload();
    };

    console.table(data && data)

    return (
        <div>
            <Button handleOnClick={handleOnClick} />
            <table className="border-collapse border border-gray-400">
                <thead>
                    <tr>
                        {tableHeaderList.map((text) => <TableHeader key={text} headerText={text}></TableHeader>)}
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
    )
}


export default Table;

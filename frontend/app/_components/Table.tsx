"use client";
import { useEffect, useState } from "react";
import Button from "./ui/Button";
// import TableHeader from "./ui/TableHeader";
// import TableBody from "./ui/TableBody";
import Card from "./Card";
import RefreshIcon from "./svg/RefreshIcon";
import { SearchInput } from "./ui/SearchInput";


interface DataType {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: number;
    discord: string;
    attendance: boolean;
}



const Table = () => {
    const [data, setData] = useState<DataType[]>([]); // use state, updates the variable data, with setData.
    const [searchTerm, setSearchTerm] = useState(''); // use state updates the variable searchTerm with the function setSearchTerm

    const filteredList = data.filter((item) => //Filtered search list, for the input field.
        item.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || //changes the item first name to lowercase, ensuring case sensetivity wont be an issue.
        item.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.discord.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        String(item.phone_number).toLowerCase().includes(searchTerm.toLowerCase()) || // Convert number to string. We set phone number as an number prop, than we convert it here to a string.
        (item.attendance ? "here" : "gone").toLowerCase().includes(searchTerm.toLowerCase()) // Convert boolean to string, Sorry for the trash code. I dont know how to do it another way.
        // The Ux designer, told us that we should add a check box, outside the search bar, so feel free to remove, 'here' and 'gone' keywords at one point, as they are not inuative.
    );

    console.log(filteredList)

    //  if searchTerm is equal to data. Show the filtered data.



    // const tableHeaderList = ["Name", "Email", "Phone", "Attendance", "Discord"];

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
            { first_name: "Odd", last_name: "Ss", email: "john.doe@example.com", phone_number: 1234567890, attendance: false, discord: "Rupee" },
            { first_name: "FoxMaccloudNeedSMoreCharactersToTestForLimit", last_name: "foobar", email: "System@example.com", phone_number: 987292929, attendance: true, discord: "Harold van Oberman" },
            { first_name: "AARONSWARTZ", last_name: "RSS", email: "Aaron@Swartz.com", phone_number: 4791229389, attendance: true, discord: "Jaliii [Tech:Dev]" },
        ];
        setData(placeholderData);
    };






    useEffect(() => {
        fetchData();
    }, []);

    const handleOnClick = () => {
        fetchData(); // Reuse fetchData for the refresh button
    };

    // console.table(data);

    return (
        <div>
            <div className="flex justify-end items-center gap-2">
                {/* The button is placed inside the table component due to client-side rendering requirements. */}
                <SearchInput
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(foo) => setSearchTerm(foo.target.value)}
                    className="w-full" />
                <Button handleOnClick={handleOnClick} className="" icon={<RefreshIcon />} buttonName="Refresh data" />
            </div>
            <div>
                {filteredList.map((crewMember, index) => (
                    <Card key={index}
                        firstName={crewMember.first_name} lastName={crewMember.last_name} discord={crewMember.discord} email={crewMember.email} attendance={crewMember.attendance} phoneNumber={crewMember.phone_number} />
                ))}
            </div>


            {/* <table className="border-collapse border border-gray-400">
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
            </table> */}
        </div>
    );
};

export default Table;

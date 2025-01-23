import React from "react";

const TableHeader = ({ headerText }: { headerText: string }) => {
    return (<th scope="col" className="border-2 border-black font-bold p-3">{headerText}</th>)
}

export default TableHeader;



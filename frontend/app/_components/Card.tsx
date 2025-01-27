const Card = ({
    firstName,
    lastName,
    phoneNumber,
    discord,
    attendance,
    email
}: {
    firstName: string;
    lastName: string,
    phoneNumber: number;
    discord: string;
    attendance: boolean;
    email: string
}) => {

    return (
        <div className={`rounded-lg bg-card text-card-foreground shadow-sm mt-4 ${attendance ? "bg-green-100 border bg-opacity-40 border-green-300" : "bg-red-100 border bg-opacity-40 border-red-300"}`}>
            <div className="p-6">
                <h3 className="text-lg font-semibold">{firstName} {lastName}</h3>
                <p className="text-sm text-gray-500">Discord: <span className="font-bold">{discord}</span></p>
                <p className="text-sm text-gray-500">Phone number: <span className="font-bold">{phoneNumber}</span></p>
                <div className="mt-2 flex justify-between">
                    <span className="font-medium">{email}</span>
                    <span className={`${attendance ? "text-teal-500" : "text-red-800"}`}>
                        {attendance ? <p>I am here</p> : <p>Not here</p>}
                    </span>
                </div>
            </div>
        </div>);
}
export default Card;

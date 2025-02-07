const Card = ({
    firstName,
    lastName,
    phoneNumber,
    discord,
    attendance,
    email
}: {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    discord: string;
    attendance: boolean;
    email: string
}) => {
    return (
        // ${attendance ? "border border-[#00FF88]" : "border border-[#FF0044] "}
        <div className={`rounded-lg bg-card text-card-foreground shadow-sm mt-4 text-white bg-gray-800 bg-opacity-40`}>
            <div className="p-6">
                <h3 className="text-lg font-semibold">{firstName} {lastName}</h3>
                <p className="text-sm text-[#D1D5DB] ">Discord: <span className="font-bold">{discord}</span></p>
                <p className="text-sm text-[#D1D5DB]">Phone number: <span className="font-bold">{phoneNumber}</span></p>
                <div className="mt-2 flex justify-between">
                    <span className="font-medium">{email}</span>
                    <span className={`${attendance ? "text-[#00FF88]" : "text-[#FF0044]"}`}>
                        {/* Muted Dark Grey #3A3A52 */}
                        {attendance ? <p>Alive</p> : <p>Dead</p>}
                    </span>
                </div>
            </div>
        </div>);
}
export default Card;

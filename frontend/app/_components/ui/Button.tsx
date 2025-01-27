import { FC, ReactNode } from 'react';

// defines the prop for the button.
type RBProp = {
    handleOnClick: () => void;
    className?: string;
    buttonName: string;
    icon?: ReactNode; // This just allows me to pass any Svg or icon the component, ? makes it optional.
};



const Button: FC<RBProp> = ({ handleOnClick, className, icon, buttonName }) => {
    return (

        <button onClick={handleOnClick} className={`flex gap-2 border border-gray-500 hover:bg-slate-100 rounded-md text-nowrap p-2 ${className}`}>
            <p>{buttonName}</p>
            {icon ? icon : null}
        </button>

    )
};
//Refresh button refreshes the page itself, not the table. PLACEHOLDER, IF THIS GOES TROUGH TO PROD tell Freddy to fix it.

export default Button;

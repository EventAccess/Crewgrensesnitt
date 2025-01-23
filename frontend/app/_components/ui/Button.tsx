import { FC, ReactNode } from 'react';

// defines the prop for the button.
type RBProp = {
    handleOnClick: () => void;
    className?: string;
    icon?: ReactNode; // This just allows me to pass any Svg or icon the component, ? makes it optional.
};



const Button: FC<RBProp> = ({ handleOnClick, className, icon }) => {
    return (
        <div>
            <button onClick={handleOnClick} className={`bg-red ${className}`}>
                {icon ? icon : null}
                {/* {icon && icon} */}
            </button>
        </div>
    )
};
//Refresh button refreshes the page itself, not the table. PLACEHOLDER, IF THIS GOES TROUGH TO PROD tell Freddy to fix it.

export default Button;

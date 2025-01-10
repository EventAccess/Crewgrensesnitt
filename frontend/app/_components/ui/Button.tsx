import { FC } from 'react';



type RBProp = {
    handleOnClick: () => void;
    className?: string;
};

const Button: FC<RBProp> = ({ handleOnClick, className }) => {
    return (
        <div>
            <button onClick={handleOnClick} className={`bg-red ${className}`}>
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    {/* fuck me, fix this later. */}
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.651 7.65a7.131 7.131 0 0 0-12.68 3.15M18.001 4v4h-4m-7.652 8.35a7.13 7.13 0 0 0 12.68-3.15M6 20v-4h4" />
                </svg>
            </button>
        </div>
    )
}
//Refresh button refreshes the page itself, not the table. PLACEHOLDER, IF THIS GOES TROUGH TO PROD tell Freddy to fix it.

export default Button;

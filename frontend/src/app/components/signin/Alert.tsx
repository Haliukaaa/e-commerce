type AlertProps = {
    text: string;
}

export const Alert = ({text}: AlertProps) => {
    return (<div className="alert alert-success z-10 flex absolute right-0 m-4 text-white top-20 md:right-7 h-fit rounded-none w-fit">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
        <span>{text}</span>
    </div>)
}
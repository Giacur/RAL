const JollyButton = ({ text, primary, secondary, ...props }) => {
    return <button {...props} className={`px-4 py-1 ${primary} ${secondary} rounded-md shadow-md ease-in-out transition-all duration-200`}>{text}</button>
};


export default JollyButton;
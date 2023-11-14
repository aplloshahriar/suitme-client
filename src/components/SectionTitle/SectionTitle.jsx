

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="mx-auto text-center mt-24">
            <p className="text-rose-500 p-2 bg-white-400 ">{subHeading}</p>
            <h3 className="text-4xl uppercase font-semibold mt-2">{heading}</h3>
        </div>
    );
};

export default SectionTitle;
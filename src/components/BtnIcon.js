const BtnIcon = ({imageSrc, fnButton}) => {
    return (
        <div onClick={fnButton}>
            <img src={imageSrc} alt="button icon"  className="add-icon" type="button"/>
        </div>
    )
};

export default BtnIcon;

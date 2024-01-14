const Button = ({ btnBgColor, btnColor, btnMarginTop, btnText, onClick, disabled, btnBordercolor }) => {
  return (
    <button
      className="rounded-full"
      style={{
        backgroundColor: btnBgColor,
        width: '320px',
        height: '40px',
        color: btnColor,
        marginTop: btnMarginTop,
        border: btnBordercolor,
        cursor: disabled ? 'not-allowed' : 'pointer', // Change cursor style based on disabled state
        opacity: disabled ? 0.5 : 1, // Adjust opacity based on disabled state
      }}
      onClick={onClick}
      disabled={disabled} // Apply the disabled attribute
    >
      {btnText}
    </button>
  );
};

export default Button;

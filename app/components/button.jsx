const Button = ({ btnBgColor, btnColor, btnMarginTop, btnText, onClick }) => {
    return (
      <button
        className="rounded-full "
        style={{
          backgroundColor: btnBgColor,
          width: '320px',
          height: '40px',
          color: btnColor,
          marginTop: btnMarginTop
        }}
        onClick={onClick} // Pass onClick handler to the button element
      >
        {btnText}
      </button>
    );
  };
  
  export default Button;
  
const Button = ({ btnBgColor, btnColor, btnMarginTop, btnText, onClick,btnBordercolor }) => {
    return (
      <button
        className="rounded-full "
        style={{
          backgroundColor: btnBgColor,
          width: '320px',
          height: '40px',
          color: btnColor,
          marginTop: btnMarginTop,
          border: btnBordercolor
        }}
        onClick={onClick} // Pass onClick handler to the button element
      >
        {btnText}
      </button>
    );
  };
  
  export default Button;
  
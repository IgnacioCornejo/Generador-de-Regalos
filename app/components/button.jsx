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
        cursor: disabled ? 'not-allowed' : 'pointer', //  cambia el estilo del cursos en base al estado de disabled
        opacity: disabled ? 0.5 : 1, //  ajusta la opacidad en base al estado disabled
      }}
      onClick={onClick}
      disabled={disabled} // aplica el atributo de disabled
    >
      {btnText}
    </button>
  );
};

export default Button;

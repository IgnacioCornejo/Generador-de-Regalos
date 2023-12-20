
const Button = ({btnBgColor,btnColor, btnMarginTop, btnText}) => {
  return (
    <>
      <button className="rounded-full w-16 h-6" style={{backgroundColor: btnBgColor, width: "320px",height: "40px", color: btnColor, marginTop:btnMarginTop}}>{btnText}</button>
    </>
  )
}

export default Button

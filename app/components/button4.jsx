
const Button4 = ({btn4Text,iconImg }) => {
  return (
    <button
    className="rounded-lg flex items-center justify-center mb-2"
    style={{
      width: '156px',
      height: '48px',
      backgroundColor: "#C8C4C4" ,
    }}
    
  >
    <img className="w-6 h-6 mr-4 ml-4" src={iconImg} alt="Person Icon" />
    {btn4Text}
  </button>
  )
}

export default Button4

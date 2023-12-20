const Dot = ({backgroundColor1,backgroundColor2,backgroundColor3}) => {
    return (
      <>
        <div className="flex mt-10">
                      <div className="w-2 h-2 rounded-full mr-1 mt-2 " style={{ backgroundColor: backgroundColor1 }}></div>
                      <div className="w-2 h-2 rounded-full mr-1 mt-2" style={{ backgroundColor: backgroundColor2 }}></div>
                      <div className="w-2 h-2 rounded-full mb-5 mt-2" style={{ backgroundColor: backgroundColor3 }}></div>
                  </div>
      </>
    )
  }
  
  export default Dot
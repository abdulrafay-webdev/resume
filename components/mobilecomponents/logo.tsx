import Image from "next/image"


function Mlogo(){
    return(
        <div className="flex items-center justify-center">
            <Image src={require("../images/arlogo.png")} alt="AR Logo" width={120} height={120} className="m-5"/>
        </div>
    )
}

export default Mlogo
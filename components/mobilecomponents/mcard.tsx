import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FaFileDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"

function Mcard(){
    return(
        <div className="flex flex-col w-full mt-3 items-center">

<div className="card glass bg-orange-50 w-80 flex flex-col justify-center items-center">
<Image src={require("../images/rafay3.jpg")} alt="rafay" width={280} height={280} className=" rounded-md m-5"/>

  <div className="card-body gap-1 -mt-5 items-center">
    <h1 className="card-title gap-1 text-center font-bold text-2xl">ABDUL RAFAY</h1>
    <h2 className="text-center font-semibold text-lg">Web Developer</h2>
    {/* social media  */}
    <div className="grid grid-cols-3 gap-4 mb-2">
            {/* whatsapp  */}
            <div>
                <Link href={"https://wa.me/923132354942"} target="_blank">
                <FaWhatsapp className="text-2xl text-green-500"/>
            </Link>
            </div>
            {/* linkedin  */}
            <div>
                <Link href={"https://www.linkedin.com/in/abdul-rafay-073187278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
                <FaLinkedin className="text-2xl text-blue-500"/>
            </Link>
            </div>
            {/* github  */}
            <div>
                <Link href={"https://github.com/abdulrafay-webdev"} target="_blank">
                <FaGithub className="text-2xl text-purple-500"/>
            </Link>
            </div>
        </div>
    {/* button  */}
    {/* <div className="card-actions justify-end text-center">
    <Link href={'/assets/cv.pdf'} target="_blank">
    <Button className="bg-orange-400 ">
      <FaFileDownload className="mr-2 h-4 w-4  text-black" /> Download CV
    </Button>
    </Link>
    </div> */}
  </div>
</div>

        </div>
    )
}

export default Mcard
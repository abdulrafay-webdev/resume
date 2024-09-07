import Image from "next/image";
import { FaDownload, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";





function Sidebar(){
    return(
        
        <div className="w-1/5 bg-slate-300 ">
            <Image src={require("./images/arlogo.png")} alt="AR Logo" width={120} height={120} className="m-5"/>


    <div className="pb-12 flex flex-col justify-center items-center h-screen">
        <div>
      <Image src={require("./images/rafay3.jpg")} alt="rafay" width={280} height={280} className=" rounded-md m-5"/>
        <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-3xl text-orange-400 text-center m-4">ABDUL RAFAY</h1>
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight text-slate-600 text-center m-3">Web Developer</h3>
        </div>
        {/* social media  */}
        <div className="grid grid-cols-3 gap-4 mb-4">
            {/* whatsapp  */}
            <div>
                <Link href={"https://wa.me/923132354942"} target="_blank">
                <FaWhatsapp className="text-3xl text-green-500"/>
            </Link>
            </div>
            {/* linkedin  */}
            <div>
                <Link href={"https://www.linkedin.com/in/abdul-rafay-073187278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
                <FaLinkedin className="text-3xl text-blue-500"/>
            </Link>
            </div>
            {/* github  */}
            <div>
                <Link href={"https://github.com/abdulrafay-webdev"} target="_blank">
                <FaGithub className="text-3xl text-purple-500"/>
            </Link>
            </div>
        </div>
        {/* download CV  */}
    {/* <div className=" items-center">
        <Link href={'/assets/cv.pdf'} target="_blank">
    <Button className="bg-white hover:bg-slate-600">
      <FaDownload className="mr-2 h-4 w-4  text-black" /> Download CV
    </Button>
    </Link>
    </div> */}
    </div>
        </div>
    );
}

export default Sidebar
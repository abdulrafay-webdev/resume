import Detail from "./detail"
import Mlogo from "./mobilecomponents/logo"
import Mcard from "./mobilecomponents/mcard"
import Mcontact from "./mobilecomponents/Mcontact"
import Meducation from "./mobilecomponents/meducation"
import Minfo from "./mobilecomponents/Minfo"
import Mskills from "./mobilecomponents/mskills"
import Sidebar from "./sidebar"

function Main(){
    return(
        <div>
            {/* mobile view */}
            <div className="md:hidden flex flex-col overflow-x-hidden h-screen bg-white">
                {/* logo */}
                <Mlogo/>
                {/* card */}
                <Mcard/>
                {/* info */}
                <Minfo/>
                {/* education */}
                <Meducation/>
                {/* skills  */}
                <Mskills/>
                {/* contact */}
                <Mcontact/>
            </div>




            {/* desktop view */}
        <div className="hidden md:flex  md:h-full">
            <Sidebar/>
            <Detail/>
        </div>
        </div>
    )
}

export default Main
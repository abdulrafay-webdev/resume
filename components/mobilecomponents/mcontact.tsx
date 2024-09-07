import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

function Mcontact() {
  return (
    <div>
      <div className="w-full p-5 -mt-16">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto mb-3">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <h1 className="scroll-m-20 text-2xl font-extrabold tracking-tight lg:text-5xl text-orange-400 mb-7">GET IN TOUCH</h1>
              <p className="leading-relaxed text-sm">If you have any questions, project ideas, or just want to connect, feel free to reach out! I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. You can contact me via email or connect with me on social media
              </p>
              <span className="inline-block h-1 w-24 rounded bg-orange-400 mt-8 mb-6" />
              <h2 className="text-gray-900 font-medium title-font tracking-wider mb-3 text-sm">
                Email : <b>abdullrrafay@gmail.com</b>
              </h2>
              <h2 className="text-gray-900 font-medium title-font tracking-wider mb-3 text-sm">
                Phone : <b>+92 313-2354942</b>
              </h2>
              <h2 className="text-gray-900 font-medium title-font tracking-wider mb-3 text-sm">
                LinkedIn : <b>Abdul Rafay</b>
              </h2>
              <h2 className="text-gray-900 font-medium title-font tracking-wider mb-3 text-sm">
                Whatsapp : <b>0313-2354942</b>
              </h2>
              <p className="text-gray-500">
                I look forward to hearing from you!
              </p>
            </div>
          </div>
          {/* social media  */}
          <div className="flex justify-center gap-3 mb-4">
            {/* whatsapp  */}
            <div>
              <Link href={"https://wa.me/923132354942"} target="_blank">
                <FaWhatsapp className="text-3xl text-green-500" />
              </Link>
            </div>
            {/* linkedin  */}
            <div>
              <Link href={"https://www.linkedin.com/in/abdul-rafay-073187278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} target="_blank">
                <FaLinkedin className="text-3xl text-blue-500" />
              </Link>
            </div>
            {/* github  */}
            <div>
              <Link href={"https://github.com/abdulrafay-webdev"} target="_blank">
                <FaGithub className="text-3xl text-purple-500" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Mcontact;

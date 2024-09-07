import Image from "next/image"


function Info(){
 return(
        <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-col">
            <div className="lg:w-4/6 mx-auto">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={require("../images/coding.avif")}
                />
              </div>
              <div className="flex flex-col sm:flex-row mt-10">
                {/* right side */}
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8 flex flex-col items-center">
                  <Image src={require("../images/rafay.jpg")} alt="profile" width={100} height={100} className="rounded-full w-20 h-20" />
                  <div className="flex flex-col items-center text-center justify-center">
                    <h2 className="font-semibold title-font mt-4 text-orange-400 text-xl">Abdul Rafay</h2>
                    <p className="text-base">I am an intermediate-level web developer with experience in front-end development. I specialize in creating responsive and user-friendly websites for clients</p>
                  </div>
                </div>
                {/* left side  */}
                <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-l-slate-500 border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                  <p className="leading-relaxed text-lg mb-4">As an intermediate-level web developer, I have gained a solid foundation in web development and have successfully worked on a variety of projects. My experience includes front-end development, utilizing languages like HTML, CSS, JavaScript, typescript and frameworks such as React and Node.js. I am currently working on creating a portfolio to showcase my skills, projects, and the knowledge I have acquired over time. My goal is to demonstrate my ability to build responsive, user-friendly, and efficient websites, and to continue growing as a developer.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
                </div>
    )
}

export default Info
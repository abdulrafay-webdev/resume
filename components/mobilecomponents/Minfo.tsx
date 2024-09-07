import Image from "next/image";

function Minfo() {
  return (
    <div className="w-full p-5">
      <div className="grid grid-cols-1 sm:flex-row mt-5">
        {/* right side */}
        
          <div className="flex flex-col items-center text-center justify-center">
            <p className="text-base text-md">
              I am an intermediate-level web developer with experience in
              front-end development. I specialize in creating responsive and
              user-friendly websites for clients
            </p>
          </div>
        {/* left side  */}
        {/* <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-l-orange-200 border-orange-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left"> */}
          <p className="leading-relaxed text-sm mb-4 mt-2 text-center">
            As an intermediate-level web developer, I have gained a solid
            foundation in web development and have successfully worked on a
            variety of projects. My experience includes front-end development,
            utilizing languages like HTML, CSS, JavaScript, typescript and
            frameworks such as React and Node.js. I am currently working on
            creating a portfolio to showcase my skills, projects, and the
            knowledge I have acquired over time. My goal is to demonstrate my
            ability to build responsive, user-friendly, and efficient websites,
            and to continue growing as a developer.
          </p>
        {/* </div> */}
      </div>
    </div>
  );
}

export default Minfo;

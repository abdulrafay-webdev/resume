

function Education(){
  const education=[
    {
      instname:"Anglo model school",
      date:"July-2022",
      qualification:"Matriculation",
      detail:"My name is Abdul Rafay, and I completed my matriculation in Computer Science from Anglo Model School. With a strong foundation in computer science, I have developed a passion for web development, leading me to pursue further knowledge and skills in this field. My background in computer science has equipped me with problem-solving abilities and a deep understanding of programming concepts, which I now apply to creating efficient and innovative web solutions."
    },
    {
      instname:"Govt national college",
      date:"August-2024",
      qualification:"Intermediate",
      detail:"I have completed my intermediate education in Computer Science from National College. This background has provided me with a strong foundation in programming, algorithms, and problem-solving, which I am now applying to my web development journey. With a passion for technology and a drive to continuously learn, I am committed to honing my skills and advancing in the field of web development."
    },
    {
      instname:"bano qabil",
      date:"September-2023",
      qualification:"Graphic Designing",
      detail:"I have also completed a graphic designing course from Banoqabil, which has equipped me with creative design skills and an eye for detail. This training complements my web development expertise, allowing me to create visually appealing and user-friendly websites. My combined knowledge of graphic design and web development enables me to deliver well-rounded digital solutions."
    },
    {
      instname:"governor initiative artificial intelligence course (GIAIC)",
      date:"June-2024",
      qualification:"Front-end development",
      detail:"I have completed a front-end development course from GIAIC, which has further strengthened my skills in building responsive and dynamic user interfaces. This course provided me with in-depth knowledge of HTML, CSS, JavaScript, and various frameworks, enabling me to craft engaging and interactive websites. With this expertise, I am confident in my ability to deliver high-quality front-end solutions."
    }
  ]
    return(
        <div>
          <h1 className=" text-4xl font-extrabold tracking-tight lg:text-5xl mt-5 ml-5">Education</h1>
          {/* education information */}
            {education.map((item,i)=>(
              <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col ml-7 ">
                <span className="font-semibold title-font text-orange-400 uppercase">{item.qualification}</span>
                <span className="mt-1 text-gray-500 text-sm">{item.date}</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-bold text-gray-900 title-font mb-2 uppercase">{item.instname}</h2>
                <p className="leading-relaxed">{item.detail}</p>
              </div>
            </div>
            ))}
          </div>
    )
}

export default Education
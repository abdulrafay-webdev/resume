import { Button } from "@/components/ui/button"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Info from "./subcomponents/info"
import Education from "./subcomponents/education"
import Skills from "./subcomponents/skills"
import Contact from "./subcomponents/contact"




function Detail(){
    return(
       
<Tabs defaultValue="info" className="w-full h-fit min-h-[120vh] bg-slate-200">
      <TabsList className="grid w-full grid-cols-4 text-orange-400 bg-slate-50">
        <TabsTrigger value="info">Information</TabsTrigger>
        <TabsTrigger value="education">Education</TabsTrigger>
        <TabsTrigger value="skills">Skills</TabsTrigger>
        <TabsTrigger value="contact">Contact</TabsTrigger>
      </TabsList>
      {/* information  section */}
      <TabsContent value="info">
     <Info/>
      </TabsContent>
      {/* education section */}
      <TabsContent value="education">
        <Education/>
      </TabsContent>
      {/* skills Section */}
      <TabsContent value="skills">
        <Skills/>    
      </TabsContent>
      {/* contact section */}
      <TabsContent value="contact">
        <Contact/>
      </TabsContent>
    </Tabs>


    )
}

export default Detail
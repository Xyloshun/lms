import React from 'react'

import './aboutUs.css'
import GroupCard from './groupCard'

import cam from './../images/cam.jpeg'
import caleb from './../images/Caleb.jfif'
import alvin from './../images/alvin.jpeg'
import leonard from './../images/leonard.jpeg'
import tony from './../images/tony.jpeg'
import project_description from './../project_description.pdf'
import domain_research from './../domain_research.pdf'
import presentation from './../presentation.pptx'
import srs_v1 from './../srs_v1.pdf'
import srs_v2 from './../srs_v2.pdf'
import requirements from './../requirements.pdf'
import use_case_diagram from './../use_case_diagram.jpg'
import class_diagram from './../class_diagram.jpg'
import sequence_diagram_1 from './../sequence_diagram_1.jpg'
import sequence_diagram_2 from './../sequence_diagram_2.jpg'
var demonstration_video = 'https://www.youtube.com/watch?v=8qx3LmZxZ70';
var prototype_website = 'https://swelms.herokuapp.com/';
var prototype_github = 'https://github.com/swegroup81/lms';

export default function aboutUs() {
  return (
    <>
        <div class="bg-gray-200 h-fit pb-40">
            <div class="bg-gradient-to-t from-violet-600 to-blue-500 h-[35vh] flex items-center mb-[-8vh]">
                <p class="text-7xl ml-16 font-bold tracking-tight text-white">Meet The Team</p>
            </div>

            <div id="row1desktop" class="sm:hidden lg:flex justify-center lg:space-x-10 xl:space-x-20 w-[100vw]">
                <GroupCard name={"Cam Benassi"} link={"https://www.linkedin.com/in/cambenassi/"} role="Full Stack Engineer" email="Cameron_Benassi@student.uml.edu" img={cam}/>
                <GroupCard name={"Caleb Bergen"} link={"https://www.linkedin.com/in/caleb-bergen-62b395236/"} role="Full Stack Engineer" email="Caleb_Bergen@student.uml.edu" img={caleb}/>
                <GroupCard name={"Alvin Tran"} link={"https://www.linkedin.com/in/alvin-v-tran/"} role="Backend Engineer" email="Alvin_Tran@student.uml.edu" img={alvin}/>
            </div>
            <div id="row2desktop" class="sm:hidden lg:flex justify-center w-[100vw] mt-28 space-x-20 mb-28">
                <GroupCard name={"Leonard Nguyen"} link={"https://www.linkedin.com/in/leonard-nguyen-3a58121a9"} role="Software Engineer" email="Leonard_Nguyen@student.uml.edu" img={leonard}/>
                <GroupCard name={"Tony Choma"} link={"https://www.linkedin.com/in/tony-choma-943825246/"} role="Full Stack Engineer" email="Tony_Choma@student.uml.edu" img={tony}/>
            </div>

            <div id="row1mobile" class="sm:flex lg:hidden justify-center space-x-10 w-[100vw]">
                <GroupCard name={"Cam Benassi"} link={"https://www.linkedin.com/in/cambenassi/"} role="Full Stack Engineer" email="Cameron_Benassi@student.uml.edu" img={cam}/>
                <GroupCard name={"Caleb Bergen"} link={"https://www.linkedin.com/in/caleb-bergen-62b395236/"} role="Full Stack Engineer" email="Caleb_Bergen@student.uml.edu" img={caleb}/>
            </div>
            <div id="row2mobile" class="sm:flex lg:hidden justify-center space-x-10 w-[100vw] mt-28 mb-28">
                <GroupCard name={"Alvin Tran"} link={"https://www.linkedin.com/in/alvin-v-tran/"} role="Backend Engineer" email="Alvin_Tran@student.uml.edu" img={alvin}/>
                <GroupCard name={"Leonard Nguyen"} link={"www.linkedin.com/in/leonard-nguyen-3a58121a9"} role="Full Stack Engineer" email="Leonard_Nguyen@student.uml.edu" img={leonard}/>
            </div>
            <div id="row3mobile" class="sm:flex lg:hidden justify-center w-[100vw] mt-28 space-x-20 mb-28">
                <GroupCard name={"Tony Choma"} link={"https://www.linkedin.com/in/tony-choma-943825246/"} role="Full Stack Engineer" email="Tony_Choma@student.uml.edu" img={tony}/>
            </div>

            <div class="flex justify-center mb-10">
                <div class="w-[90vw] h-fit py-5 bg-white rounded-xl drop-shadow-md text-center">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project Background</p>
                    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Online Learning Management Systems (LMS) are software applications that are widely used by educational institutions to assist in the organization of courses to make teaching and learning as easy as possible for professors and students. At the University of Massachusetts Lowell, the LMS that the institution utilize is Blackboard. As students at UML, we rely on the functionalities of Blackboard daily so that we could learn, graduate college, and pursue our careers. Although Blackboard is helpful, it is not perfect and there are some functionalities that could use some improvements due to a confusing design. One such functionality that could be improved is the Blackboard notification system.</p>
                </div>
            </div>

            <div class="flex justify-center mb-10">
                <div class="w-[90vw] h-fit py-5 bg-white rounded-xl drop-shadow-md text-center">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Project Description</p>
                    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">Currently, the Blackboard notification system allows professors to inform their students about updates concerning the course. Notifications can consist of announcements from the professor, automated messages about assignment availability, automated messages about assignments being graded, and much more. With all these different types of messages, there must be a proper search and filtering tool in order to view important notifications. However, the existing search and filter tools are too confusing to be considered helpful. When clicking on the gear to open up the filtering options, the user is met with a vast list of options that may never be used as the student most likely wouldn’t know what every option is for because there is too much. There are also no ways to sort the notifications in any other way than by course. The filtering tools are not the only thing that can be confusing in Blackboard’s notification system. Another confusing functionality is that Blackboard doesn’t make it clear enough to the student whether they have read a specific notification. For example, just clicking on the notification page will make all notifications read even if you haven’t read them. Blackboard does have a ‘Dismiss’ option that removes the notification making it act as ‘read’, but it truly removes it where it won’t show up on the notification list not allowing the student to look back at the notification with ease.  Overall, Blackboard’s notification system needs a revamp in design that improves students acknowledgement of a notification to improve their learning experience.</p>
                </div>
            </div>

            
            <div class="flex justify-center">
                <div class="w-[90vw] h-fit py-5 bg-white rounded-xl drop-shadow-md text-center">
                    <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Important Links</p>
                    <div class="flex justify-center mt-6">
                        <a href={project_description} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Original Project Description</button></a>
                        <a href={domain_research} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Domain Research</button></a>
                        <a href={prototype_website} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Prototype</button></a>
                        <a href={prototype_github} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Github for Prototype</button></a>
                        <a href={presentation} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Presentation</button></a>     
                        <a href={srs_v1} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">SRS_V1</button></a>
                        <a href={srs_v2} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">SRS_V2</button></a>
                        <a href={demonstration_video} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Demonstration Video</button></a>                  
                    </div>
                    <div class="flex justify-center mt-6">              
                        <a href={requirements} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Specific Requirements</button></a>
                        <a href={use_case_diagram} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Use Case Diagram</button></a>
                        <a href={class_diagram} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Class Diagram</button></a>
                        <a href={sequence_diagram_1} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Sequence Diagram 1</button></a>
                        <a href={sequence_diagram_2} target="_blank"><button class="bg-indigo-700 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded ml-2 mr-2">Sequence Diagram 2</button></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

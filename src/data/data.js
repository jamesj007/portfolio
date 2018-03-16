import React from 'react';
import contact from '../images/contact.svg';
import computer from '../images/computer.svg';
import project from '../images/project.svg';
import contact_icon from '../images/contact_icon.svg';
import project_icon from '../images/project_icon.svg';
import work_icon from '../images/work_icon.svg';
import {Cspan} from './styledComps';


//traditionally I would use the database to store the information and the dynamically send it to the components however I just needed
//something that was quick.
export const AppContent = [
    {
        t_info: {
            bcolor: "rgb(30, 30, 41)",
            dcolor: "white",
            tcolor: "#14f400",
            location: "~/Jovin/work",
            run_command: "./work_exp",
            section: "work experience"
        }, 
        header: "Work Experience",
        img: computer,
        data: [
            {
                title: "Site Reliability Engineer Intern - Symantec",
                subTitle: "June 2017 - August 2017",
                simg: work_icon,
                content: `I had interned over the summer at LifeLock in their DevOps team as a Site Reliability Engineer Intern. I got the chance to work with Bash, AWS, Terraform and many other cool technologies while I was there. I had many responsibilities including managing the production servers to make sure everything was running well. I was also in charge of deployment and configuration of dev and stage servers at the company via Chef and cookbooks. 
                            My main project over the summer was to write a bash script that would deploy LifeLock apps over to the newly created servers on AWS. The script was then attached to a Jenkins job so that the script can be used to deploy LifeLock apps across multiple teams to their appropriate servers. I would also write Terraform (infrastructure as code) to create the servers and load balancers in AWS. 
                            I learned a great deal about software development as well as the network side of things!
                        `,
                languages: ["Bash", "Terraform", "Chef", "Ruby", "Jira/Jenkins"]
            },
            {
                title: "UGTA - ASU",
                subTitle: "August 2017 - December 2017",
                simg: work_icon,
                content: "I worked as a UGTA for CSE 205 - Object Oriented Priciples at ASU. My primary responsiblity was to help the students with their programming assignments (done in Java) as well as answer any conceptual questions they might have regarding object-oriented topics like inheritance, abstract classes and so on. I would also be responsible to holding exam review sessions and answer any question they might have regarding the class.",
                languages: ["Java"]
            },
        ]
    }, 
    {
        t_info: {
            bcolor: "rgb(30, 30, 41)",
            dcolor: "white",
            tcolor: "#14f400",
            location: "~/Jovin/project",
            run_command: "./projects",
            section: "project info"
        }, 
        header: "Projects",
        img: project,
        data: [
            {
                title: "Portfolio Website",
                subTitle: "Showcase my experience",
                simg: project_icon,
                content: "I created my portfolio website that you see here using ReactJS. I have always been interested in ReactJS and thought it would be a fun project to create a small portfolio website with React. A lot of things can be done better but it was an interesting way to spend the time.",
                languages: ["ReactJS", "HTML/CSS", "JavaScript"]
            },
            {
                title: "Le Prince Perdu",
                subTitle: "Honors Thesis",
                simg: project_icon,
                content: `Final project as part of my Honors Thesis for Barrett Honors College. Creating this game for the French Department at ASU to assist new French students in learning French. In a group of four, I lead the programming of the game alongside one other programmer while the other two focus on game content.
                        Learned and implemented a lot of valuable concepts such as inheritance, polymorphism, abstraction, and encapsulation. In addition to OOP, design patterns such as 'factory' method were also used
                        to make the code cleaner and scalable.
                        `,
                languages: ["Unity3D", "C#"]
            },
            {
                title: "GoHome Bot",
                subTitle: "Built with ExpressJS",
                simg: project_icon,
                content: "A basic chat bot. Used regular expressions to capture conversation like 'Hello' and made the bot respond to it. The highlight of the project is that I built in Google Maps API into the functionality of the bot. So if I type in 'I want to go home' or 'home', the bot will respond with how much time it will take to get home from work.",
                languages: ["JavaScript", "HTML/CSS", "ExpressJS"]
            },
            {
                title: "2D Shooter Game",
                subTitle: "SWHacks",
                simg: project_icon,
                content: `A simple game that I made with my partner duing SWHacks (a hackathon that took place in ASU). This was my first introduction to JavaScript and since our team only had two members we thought we could try learning JavaScript together. What better way than to make a simple game!
                        We had a canvas and had a ball on the canvas that would move around according to mouse position and shoot bullets. Really trivial but the environment of the hackathon encouraged both of us to focus and learn JavaScript.
                        `,
                languages: ["HTML/CSS", "JavaScript"]
            },
            {
                title: "Platform Shooter Game",
                subTitle: "High School Project",
                simg: project_icon,
                content: `I took an intro to programming class in high school. One of the final projects I did in that class was to create a platformer game. The language used was Pascal. I never got to finish the game
                        as I couldn't manage collisions, speed, etc. So I thought it would be neat to teach myself Python while also being able to finish my high school project. I used PyGame, a module specifically for creating games in Python, to create a simple platformer.
                        Player moves around to dodge the rockets flying at him and then defeat the final boss! The rockets track player position and change accordingly via a rudimentary AI system. I was finally able to finish my high school project.
                        `,
                languages: ["Python"]
            },
            {
                title: "MeetUP",
                subTitle: "Mobile Apps",
                simg: project_icon,
                content: `As part of my final project for a mobile applications class at ASU, I created MeetUP. The idea is that the user can create meetups and invite people to the meetups. The location of the meetup on shown on a map in the meetup info page.
                        I used Google Places API and Google Sign-In API for increased functionality and user convenience. Implemented core iOS cocncepts like CoreData, TableViews, CoreLocation, Image and Text Field delegates. Used JSON parser + 
                        Eventful API to show a list of events nearby to the user (during meetup creation) so that they can plan a cool get-together with friends.
                        `,
                languages: ["Swift", "iOS"]
            }
        ]
    },
    {
        t_info: {
            bcolor: "rgb(30, 30, 41)",
            dcolor: "white",
            tcolor: "#14f400",
            location: "~/Jovin/contact",
            run_command: "./contact",
            section: "contact info"
        }, 
        header: "Contact Me",
        img: contact,
        data: [
            {
                title: "Email",
                subTitle: "",
                simg: contact_icon,
                content: <span>The easiest way to reach me is through my email: <Cspan color="#ff56f0"><strong>jamesjovin23@gmail.com</strong></Cspan><br/>Reach out to me for more info about me/my resume</span>,
                
            },
            {
                title: "Other Contacts",
                subTitle: "",
                simg: contact_icon,
                content: <span>LinkedIn: <Cspan color="#ff56f0"><strong>Jovin James</strong></Cspan> <br/> Github: <Cspan color="#ff56f0"><strong>jamesj007</strong></Cspan></span>,
                
            },
        ]
    }

]
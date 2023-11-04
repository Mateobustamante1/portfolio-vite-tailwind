import React from 'react';
import Workitem from './Workitem';

const data = [
    {
        year: 2020,
        title: 'LYNQ',
        duration: '2 years and 6 months',
        details: `When I first joined Lynq as a Database Administrator, I was eager to contribute to the team and learn from experienced professionals. In this capacity, I actively participated in various projects, assisting with database management tasks and supporting the optimization of our data infrastructure. This early experience provided me with a solid foundation in managing complex data systems and a deep appreciation for the importance of efficient data handling.

        As my journey with Lynq progressed, I found myself drawn towards the realm of React development, inspired by the collaborative spirit and innovative projects within the company. This transition marked an exciting phase of growth for me, allowing me to channel my enthusiasm and burgeoning skills into crafting dynamic and intuitive web applications. During this transition, I actively immersed myself in learning and applying my knowledge of SQL, Python, and Node.js to the world of web development. Embracing the principles of the Scrum methodology, our team fostered a dynamic and iterative work environment, allowing us to adapt quickly to evolving project requirements and deliver exceptional results.

        With the guidance of mentors and the support of my team, I delved into the intricacies of frameworks such as Next.js, Hook Form, Shadcn, Tailwind CSS, and React.js, eagerly taking on responsibilities and making meaningful contributions to the development of critical applications within our agile development framework.`,
    },
    {
        year: 2022,
        title: 'Reylux',
        duration: '1 year and 11 months',
        details: `As a React Developer, my primary focus revolved around leveraging React, Vite, and TypeScript to drive our development tasks. My role played a pivotal part in the conception and development of the company's e-commerce platform, where I collaborated closely with the team of developers in bringing our flagship e-commerce site to life. Together, we created the central hub for the brand's online presence.

        Our responsibilities extended beyond the initial website development. In the later stages, I took on the role of spearheading the creation and management of advertisements on the online platform. This involved the coordination of UI design and states, working closely with the graphic design team to seamlessly integrate advertisements into the platform. We aimed to ensure that each ad was not only visually appealing but also effectively conveyed our brand message.
        
        In addition to these responsibilities, I also took on the task of compiling and analyzing data related to sales, website visits, and user interactions. This data-driven approach allowed us to make informed decisions and continuously enhance the user experience.
        
        My role extended to the realm of marketing strategy, where I actively contributed to the development and execution of strategies to boost the brand's digital presence. This included implementing and designing effective advertisements and practical features that not only enhanced user engagement but also contributed to the overall success of our digital marketing efforts.`,
    },
];

const Work = () => {
    return (
        <div id='work' className='max-w-[1048px] m-auto md:pl-20 p-4 py-16'>
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
            {data.map((item, idx)=>(
                <Workitem 
                  key={idx} 
                  year={item.year} 
                  title={item.title} 
                  duration={item.duration} 
                  details={item.details} />
            ))}
        </div>
    );
};

export default Work;

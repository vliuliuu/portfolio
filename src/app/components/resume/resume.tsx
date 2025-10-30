"use client"

import React, { useState } from 'react';
import ResumeImage from './resume_images';
import ResumeList from './resume_list';

//resume bullet points (along w/ respective state and img) r stored in here

//resume has function that resume_list calls on hover; basically highlighting the hovered text and switch to respective img
//can't pass state up; just have function in parent, that child calls upon a certain event


//OK notes for this: i want containers for the text inside of the list bro can i just import some stuff from shadcn
//also have a divider in the resume container to sep exp and project's 
//ALSO the manrope font is ugly lmfao <--can change this very lastly

const resume_container = [
    {
        
        id: 1,
        title: "SCaLEx A/V Volunteer",
        text: "- lorem ipsum dolor sit amet consectetur adipiscing elit",
        img_src: "/resume_images/ye.jpg",
        img_txt: "belbeh"
    },
    {
        id: 2,
        title: "Mentor @GWC",
        text: "- lorem ipsum dolor sit amet consectetur adipiscing elitipsum dolor sit amet dipiscing elit",
        img_src: "/resume_images/angelhehe.jpeg",
        img_txt: "belbeh"
    },
    {
        id: 3,
        title: "Mentor @SWE",
        text: "- lorem ipsum dolor sit amet consectetur adipiscing elitipsum dolor sit amet consectetur adipiscing elitipsum dolor sit amet consectetur adipiscing elit",
        img_src: "/resume_images/SIDEEYEGE.png",
        img_txt: "belbeh"
    },
        {
        id: 4,
        title: " ",
        text: " ",
        img_src: "/resume_images/heartgeee.jpg",
        img_txt: "belbeh"
    },
]

export default function Resume(){

    //def state
    const [active_id, set_active_id] = useState(1); // change this later to active on first onHover()
    // find the active id !!!
    const active_item = resume_container.find((item) => item.id === active_id);

    //serve da active_id's img + text
    return(
        <section className='flex flex-col lg:flex-row gap-8 lg:gap-16 p-4 md:p-8 max-w-4/5 mx-auto'>
            {/* img styling */}
            <div className='hidden lg:block lg:w-1/2'>
                <ResumeImage 
                    img_src={active_item?.img_src}
                    img_txt={active_item?.img_txt}
                />
            </div>
            
            {/* list styling */}
            <div className=' w-3/4 mx-auto rounded-md lg:w-3/4 bg-gray-800 '>
                <ResumeList
                    items={resume_container}
                    active_id={active_id}
                    onHover={set_active_id}
                />
            </div>
        </section>
    );
}
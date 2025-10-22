import React from 'react';

type resume_images_container = {
    img_txt?: string;
    img_src?: string;
};

//state passed down from parent gets processed here
export default function ResumeImage({img_src, img_txt}: resume_images_container){
    return(
        <div className="w-full h-96 bg-gray-700 rounded-lg overflow-hidden">
            {img_txt && (
                <img
                src={img_src}
                alt="alt text"
                className="w-full h-full object-cover transition-opacity duration-300"
                />
            )}
        </div>
    );
}

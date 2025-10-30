import React from 'react';

// resume_item def
type resume_item = {
  id: number;
  title: string;
  text: string;
};

// props + onhoverfxn to pass between parent n child
type resume_props = {
  items: resume_item[];
  active_id: number;
  onHover: (id: number) => void; // fxn that takes in id from resume_item
};

//
export default function ResumeList({items, active_id, onHover}: resume_props){
    return(
    <div className="grid items-center justify-items">
      {items.map((item) => (
        <div
          key={item.id}
          // When the mouse enters, call the onHover function from the parent
          onMouseEnter={() => onHover(item.id)}
          className={`p-4 rounded-md cursor-pointer transition-all duration-300 ease-out ${
            // active styling with scale effect
            active_id === item.id 
              ? 'bg-gray-400 text-black scale-100 shadow-lg' 
              : 'bg-gray-800 scale-95'
          }`}
        >
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p className="mt-4 ml-2">{item.text}</p>
        </div>
      ))}
    </div>
    );
}
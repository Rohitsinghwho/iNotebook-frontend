
import { useState } from "react";
import noteContext from "./noteContext";

const NoteState= (props)=>{
  
    const initialnotes=
    [
      {
        "_id": "64ca13ad71300f2be46ea490",
        "user": "64c6328841886dd670b1a7b2",
        "title": "Times of India",
        "description": "This is the top headline of Times of India",
        "date": "2023-08-02T08:28:29.435Z",
        "__v": 0
      },
      {
        "_id": "64ca13ae71300f2be46ea492",
        "user": "64c6328841886dd670b1a7b2",
        "title": "Times of India",
        "description": "This is the top headline of Times of India",
        "date": "2023-08-02T08:28:30.580Z",
        "__v": 0
      }
    ]
  
  const [notes,setNotes]= useState(initialnotes);
    return(
        <noteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
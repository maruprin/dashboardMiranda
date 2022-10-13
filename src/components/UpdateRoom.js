import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchRoom, selectRoom } from "../slices/roomsSlice";

function UpdateRoom(props) {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchRoom(2));
  }, [])
  
  const oneRoom = useSelector(selectRoom);
  console.log(typeof oneRoom);

  const [formData, setFormData] = useState(oneRoom);
  useEffect(() => {
    setFormData(oneRoom);
  }, [oneRoom]);

  console.log(formData);
  if(!oneRoom){
    return <img src="/src/assets/images/loading.gif" alt="loading.."/> ;
  }
  return (
    <>
      <h1>Update Room</h1>
      <p>{oneRoom.description}</p>
    </>
  );
}
export default UpdateRoom;

//import { useParams } from "react-router-dom"

// export default function UserPage() {

//     const { id } = useParams()

//   return (
//     <div>
//         <h1>User <>{ id }</> </h1>
//     </div>
//   )
// }

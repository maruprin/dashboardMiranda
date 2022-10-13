import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  headersRooms,
  roomsItemHaveButton,
  tableHeadersRooms,
} from "../data/roomsData";
import { deleteRoom, fetchRoom, fetchRooms, selectRoom, selectRooms, updateRoom } from "../slices/roomsSlice";
import {
  ButtonViewNote,
  FilterInput,
  GenericContainerStyled,
} from "../styles/styledComponents";

function Rooms(props) {
  const [filteredRoomsData, setFilteredRoomsData] = useState([]);
  const roomsList = useSelector(selectRooms);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchRooms());
  }, [dispatch]);

  useEffect(() => {
    setFilteredRoomsData(roomsList);
  }, [roomsList]);

  const handleFilter = (e) => {
    if (e.target.textContent === "All rooms") {
      setFilteredRoomsData(roomsList);
    } else if (e.target.textContent === "Available") {
      const filteredArray = roomsList.filter((room, i) => {
        return room.Status === "Available";
      });
      setFilteredRoomsData(filteredArray);
    } else if (e.target.textContent === "Booked") {
      const filteredArray = roomsList.filter((room, i) => {
        return room.Status === "Booked";
      });
      setFilteredRoomsData(filteredArray);
    }
  };
  const handleTyping = (e) => {
    console.log(e);
  };
  const handleClick = (id) =>{
    const roomPathId = id
    navigate("/rooms/"+roomPathId)
  }
  
  return (
    <GenericContainerStyled className={props.openSideMenu ? "show" : "hide"}>
      <ul className={props.openSideMenu ? "show" : "hide"}>
        {headersRooms.map((item, i) => {
          return (
            <li onClick={(e) => handleFilter(e)} key={item}>
              {item}
            </li>
          );
        })}
      </ul>
      <FilterInput
        onChange={handleTyping}
        type="text"
        name="search"
        placeholder="search"
      />
      <div className="tableContainer">
        <table>
          <tbody>
            <tr>
              {tableHeadersRooms.map((item, i) => {
                return <th key={item}>{item}</th>;
              })}
            </tr>
            {filteredRoomsData.map((item, i) => {
              return (
                <tr onClick={()=>handleClick(item["Room Id"])} key={item.id}>
                  {tableHeadersRooms.map((header, j) => {
                    if (roomsItemHaveButton.includes(header)) {
                      return (
                        <>
                          <td key={header}>
                            <ButtonViewNote>View Note</ButtonViewNote>
                          </td>
                        </>
                      );
                    } else if (header === "Status" || header === "Archive") {
                      return (
                        <>
                          <td key={j}>
                            <button className={item[header].replace(/ /g, "")}>
                              {item[header]}
                            </button>
                          </td>
                        </>
                      );
                    } else {
                      return <td key={j}>{item[header]}</td>;
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </GenericContainerStyled>
  );
}

export default Rooms;

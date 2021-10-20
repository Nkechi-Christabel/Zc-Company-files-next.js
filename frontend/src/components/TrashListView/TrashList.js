import { useState, useRef, createRef } from "react";
import useViewport from "./useViewport";
import Buttons from "./MenuButtons";
import styles from "./trash.module.css";
import useFetch from "./useFetch";
import Modal from "./Modal";
import Loader from "./Loader";

// ref={(el) =>
//   (menu.current = menu.current
//     ? [...menu.current, el]
//     : [el])
// }

function TrashList() {
  const {
    data = [],
    setData,
    isLoading,
    error,
  } = useFetch("http://localhost:5500/api/v1/files/deletedFiles");

  const [showModal, setShowModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [id, setId] = useState(null);

  console.log(data);

  // creates reference for array items
  const menu = useRef(data && Array(data.length).fill(createRef()));

  //Truncate the length of fetched names
  const truncateName = () => {
    let str = data.map((data) => data.fileName.trim());

    return str.map((text) => {
      return text.length > 20 ? text.substring(0, 12) + "..." : text;
    });
  };

  //Reformat fetched file deleted dates.
  let newDate = () => {
    data
      .map((date) => date.dateAdded.split("T")[0])
      .map((e) => e.split("-").join("/"));
  };

  // set state to toggle menu button
  const [click, setClick] = useState(false);

  // Viewport to change the location of the menu buttons on different screen size
  const { width } = useViewport();
  const breakpoint = 768;

  //This displays the Menu button
  const handleClick = (index, id) => {
    setId(id);
    // if item is clicked display menu/btn and enable pointer event
    if (click) {
      menu.current[index].style.opacity = 1;
      menu.current[index].style.pointerEvents = "auto";
    } else {
      //disables event
      menu.current[index].style.opacity = 0;
      menu.current[index].style.pointerEvents = "none";
    }

    // Menu button are displayed one at a time and disable events from the other
    menu.current.forEach((item, i) => {
      if (item && click) {
        if (index !== i) {
          item.style.opacity = 0;
        }
        menu.current[index].style.opacity = 1;
      }
    });

    setClick(!click);
  };

  return (
    <>
      <div>
        {error && (
          <div className="flex justify-center text-center mt-60 tracking-wider font-semibold text-itemsGray">
            {error}
          </div>
        )}
        {isLoading && <Loader />}
        {data && data.length === 0 ? (
          <div className="text-center flex flex-col justify-center items-center h-96">
            <img src="/bin 1.png" alt="Bin icon" />
            <h3>No items</h3>
            <p>items moved to the trash will appear here</p>
          </div>
        ) : (
          data && (
            <table
              className={`w-full table-fixed mt-2 pb-14 pl-2 sm:pl-5 border-separate ${styles.borderSpace} ${styles.tableHide}`}
            >
              <thead className="text-left content-box">
                <tr>
                  <th className="font-semibold text-trashTheading">Name</th>
                  <th className="hidden md:block"></th>
                  <th className="hidden md:block"></th>
                  <th></th>
                  <th></th>
                  <th className="block md:hidden"></th>
                  <th className="font-semibold text-trashTheading whitespace-nowrap hidden md:block">
                    Date Deleted
                  </th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th className="font-semibold text-trashTheading whitespace-nowrap pr-3 sm:pr-0">
                    <span className="hidden sm:inline">File </span>Size
                  </th>
                </tr>
              </thead>
              <tbody className="text-itemsGray">
                {data &&
                  data.map((data, index) => (
                    <tr
                      key={data._id}
                      onClick={() => handleClick(index, data._id)}
                      className="hover:bg-lightGrayHover cursor-pointer"
                    >
                      <td
                        className="
                      py-2 text-itemsGray whitespace-nowrap text-sm lowercase"
                      >
                        <img
                          src="/file-icon.png"
                          alt="File icon"
                          className="inline-block"
                        />{" "}
                        {truncateName()[index]}
                      </td>
                      <td className="hidden md:block"></td>
                      <td className="hidden md:block"></td>
                      <td></td>
                      <td></td>
                      <td className="block md:hidden"></td>
                      <td className="py-2 text-itemsGray text-xs relative hidden md:block">
                        {newDate()[0]}

                        {/* Menu buttons for big screen */}
                        <div
                          //assign the created reference to each array item
                          ref={(el) => (menu.current[index] = el)}
                          className="absolute top-0 z-10 bg-white rounded shadow-md opacity-0 text-sm md:block pointer-events-none"
                        >
                          <Buttons
                            setShowModal={setShowModal}
                            setDeleteModal={setDeleteModal}
                          />
                        </div>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td className="py-2 text-itemsGray text-xs relative">
                        {data.size}

                        {/* Menu buttons for small screen */}

                        {/* If the viewport matches the breakpoint, display the menu buttons in this td */}
                        {width <= breakpoint ? (
                          <div
                            //assign the created reference to each array item
                            ref={(el) => (menu.current[index] = el)}
                            className="absolute top-0 right-0 z-10 bg-white rounded shadow-md opacity-0 text-sm md:block pointer-events-none"
                          >
                            <Buttons
                              setShowModal={setShowModal}
                              setDeleteModal={setDeleteModal}
                            />
                          </div>
                        ) : null}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )
        )}
      </div>
      <Modal
        setShowModal={setShowModal}
        showModal={showModal}
        setDeleteModal={setDeleteModal}
        deleteModal={deleteModal}
        clickedId={id}
        setData={setData}
        data={data}
      />
    </>
  );
}

export default TrashList;

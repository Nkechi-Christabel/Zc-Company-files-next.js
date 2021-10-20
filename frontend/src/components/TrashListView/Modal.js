import React from "react";

export default function Modal({
  showModal,
  setShowModal,
  deleteModal,
  setDeleteModal,
  clickedId,
  setData,
  data,
}) {
  const handleRestore = (id) => {
    fetch("http://localhost:5500/api/v1/files/restoreFile/" + id, {
      method: "Put",
      headers: { "Content-Type": "application/json" },
      body: "",
    });
    setData((prev) => prev.filter((data) => data.id !== id));
  };

  const handleDelete = (id) => {
    fetch("http://localhost:5500/api/v1/files/deleteFile/" + id, {
      method: "DELETE",
    });
    setData((prev) => prev.filter((data) => data.id !== id));
  };

  return (
    <>
      {/* Modal for Restore Button */}
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="p-5 pt-7 md:pt-5 text-center md:text-left">
                  <h3 className="text-sm text-itemTrash font-semibold">
                    Restore File?
                  </h3>
                </div>
                {/*body*/}
                <div className="relative pt-5 pb-3 px-14 sm:px-20">
                  <p className="my-4 text-itemTrash text-sm font-semibold text-center">
                    Are you sure you want to restore Design File?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 rounded-b">
                  <button
                    className="text-secondary border border-secondary rounded background-white font-semibold px-6 py-3 text-sm outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-secondary text-white active:bg-emerald-600 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-xlg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleRestore(clickedId);
                      setShowModal(false);
                    }}
                  >
                    Restore
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      {/*Modal for Delete Button  */}

      {deleteModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative w-full flex flex-col bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="p-5 pt-7 md:pt-5 text-center md:text-left">
                  <h3 className="text-sm text-itemTrash font-semibold">
                    Delete File Permanently?
                  </h3>
                </div>
                {/*body*/}
                <div className="relative pt-5 pb-3 px-14 sm:px-20">
                  <p className="my-4 text-itemTrash text-sm font-semibold text-center">
                    Are you sure you want to Delete Design File Permanently?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-center p-6 rounded-b">
                  <button
                    className="text-trashModal border border-trashModal rounded background-white font-semibold px-6 py-3 text-sm outline-none focus:outline-none mr-5 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setDeleteModal(false)}
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-trashModal text-white active:bg-emerald-600 font-semibold text-sm px-6 py-3 rounded shadow hover:shadow-xlg outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      handleDelete(clickedId);
                      setDeleteModal(false);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

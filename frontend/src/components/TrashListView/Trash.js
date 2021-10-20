import List from "./TrashList";
import useFetch from "./useFetch";

function Trash() {
  const { data = [], setData } = useFetch(
    "http://localhost:5500/api/v1/files/deletedFiles"
  );

  const emptyTrash = () => {
    fetch("http://localhost:5500/api/v1/files/deleteMultipleFiles", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: data.map((data) => data._id) }),
    }).then((res) => console.log(res));
    setData([]);
  };

  return (
    <div className="md:mx-10 mx-4 pt-5">
      <div className="flex justify-between pt-4 pb-5">
        <h3 className="font-semibold text-xl text-itemTrash">
          Items in my trash
        </h3>
        <p>
          <span className="pr-2">
            <svg
              width="26"
              height="18"
              viewBox="0 0 26 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 2.99512C0.5 2.37352 0.74693 1.77737 1.18647 1.33784C1.62601 0.898297 2.22215 0.651367 2.84375 0.651367H23.1562C23.7779 0.651367 24.374 0.898297 24.8135 1.33784C25.2531 1.77737 25.5 2.37352 25.5 2.99512V15.4951C25.5 16.1167 25.2531 16.7129 24.8135 17.1524C24.374 17.5919 23.7779 17.8389 23.1562 17.8389H2.84375C2.22215 17.8389 1.62601 17.5919 1.18647 17.1524C0.74693 16.7129 0.5 16.1167 0.5 15.4951L0.5 2.99512ZM2.84375 2.21387C2.63655 2.21387 2.43784 2.29618 2.29132 2.44269C2.14481 2.5892 2.0625 2.78792 2.0625 2.99512V8.46387H8.3125V2.21387H2.84375ZM8.3125 10.0264H2.0625V15.4951C2.0625 15.7023 2.14481 15.901 2.29132 16.0475C2.43784 16.1941 2.63655 16.2764 2.84375 16.2764H8.3125V10.0264ZM9.875 10.0264V16.2764H16.125V10.0264H9.875ZM16.125 8.46387V2.21387H9.875V8.46387H16.125ZM17.6875 10.0264V16.2764H23.1562C23.3635 16.2764 23.5622 16.1941 23.7087 16.0475C23.8552 15.901 23.9375 15.7023 23.9375 15.4951V10.0264H17.6875ZM17.6875 8.46387H23.9375V2.99512C23.9375 2.78792 23.8552 2.5892 23.7087 2.44269C23.5622 2.29618 23.3635 2.21387 23.1562 2.21387H17.6875V8.46387Z"
                fill="#B4B4B4"
              />
            </svg>
          </span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-between bg-lightGreen">
        <p className="px-2 sm:px-5 py-4 text-durationGray text-sm">
          Items in trash are deleted forever after 30 days
        </p>
        <p
          className="px-2 sm:px-5 py-4 cursor-pointer font-semibold text-success text-empty"
          onClick={emptyTrash}
        >
          Empty Trash
        </p>
      </div>
      <List />
    </div>
  );
}

export default Trash;

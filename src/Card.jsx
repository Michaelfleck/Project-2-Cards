const Card = ({
  id,
  label,
  description,
  icon,
  status,
  toggleCardStatus,
  handleDelete,
  mode
}) => {
  return (
      <div className="flex flex-col gap-10 rounded-xl border p-5 bg-white border-[#e2e9f1] dark:bg-[#1f2535] dark:border-zinc-600 dark:text-white">
        <div className="flex gap-5">
          <div>{icon}</div>
          <div className="flex flex-col">
            <div className="text-lg font-bold">{label}</div>
            <div className="text-zinc-300 line-clamp-2">{description}</div>
          </div>
        </div>
        <div className="flex justify-between items-center light:text-black">
          <div>
            <button
              onClick={() => handleDelete(id)}
              className="cursor-pointer rounded-full border border-zinc-500 dark:border-[#e2e9f1] px-4 py-[5px] aria-selected:hover:text-[#050a1d]"
            >
              Remove
            </button>
          </div>
          <div>
            <button
              aria-active={status === "Active" ? "true" : "false"}
              aria-inactive={status === "Inactive" ? "true" : "false"}
              className="relative bg-[#4F5867] aria-active:bg-[#F3605B] w-12 h-6 rounded-full group aria-selected:hover:text-white"
              onClick={() =>
                toggleCardStatus(
                  id,
                  status === "Active" ? "Inactive" : "Active"
                )
              }
            >
              <div
                aria-active={status === "Active" ? "true" : "false"}
                aria-inactive={status === "Inactive" ? "true" : "false"}
                className="cursor-pointer absolute top-[2px] aria-inactive:left-[2px] aria-active:right-[2px] bg-white h-5 w-5 rounded-full"
              ></div>
            </button>
          </div>
        </div>
      </div>
  );
};

export default Card;

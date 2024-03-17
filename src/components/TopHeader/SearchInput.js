import { magnifyGlassIcon } from "../utils/icon-svg";

export default function SearchInput() {
  return (
    <div className="flex items-center justify-center p-1 rounded-[10px] bg-white">
      <input
        id="searchInput"
        className="text-lg focus:outline-none p-3"
        type="text"
        placeholder="Search by Dua Name"
      />
      <label
        htmlFor="searchInput"
        className="p-2.5 cursor-pointer bg-secondary rounded-[10px]"
      >
        {magnifyGlassIcon}
      </label>
    </div>
  );
}

import SearchInput from "./SearchInput";
import UsersManuals from "./UsersManuals";

export default function TopHeader({ className }) {
  return (
    <div
      className={`w-full flex items-center justify-between gap-[30px] ${
        className ? className : ""
      }`}
    >
      <h1 className="w-full text-2xl font-semibold">Dua Page</h1>

      <div className="w-full flex items-center justify-between">
        <SearchInput />

        <UsersManuals />
      </div>
    </div>
  );
}

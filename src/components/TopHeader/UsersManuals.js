import Image from "next/image";
import userIcon from "@/assets/user-man.png";

export default function UsersManuals() {
  return (
    <>
      <figure>
        <Image
          className="w-[45px] h-[45px] rounded-full "
          src={userIcon}
          alt="user icon"
        />
      </figure>
    </>
  );
}

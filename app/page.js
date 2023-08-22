import UserInfo from "@/components/UserInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-[70vh] flex items-center justify-center">
      <UserInfo />
    </div>
  );
}

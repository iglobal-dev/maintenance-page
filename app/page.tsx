import Image from "next/image";
import Page from "@/app/Halaman1/page";
import Kedua from "@/app/Halaman2/page";

export default function Home() {
  return (
    <div className="font-black">
        <h1 className="text-black">Welcome Home</h1>
          <div className="font-black ">
            <ul className="font-black">
              <li className="font-black">
                <a href="/Halaman1" className="font-black">Halaman1</a>
                <br />
                <a href="/Halaman2">Halaman2</a>
              </li>
            </ul>
          </div>
      </div>
  );
}

import TextViva from "./TextViva";
import { Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <div>
      <div className="rainbowbg" style={{ height: "10px" }}></div>
      <div
        className="mx-auto items-center flex p-8 flex-col w-full"
        style={{ maxWidth: "1528px" }}
      >
        <TextViva className="text-sm">
          © 2023 ALICETTE S.R.L. P.IVA 08390270968
        </TextViva>
      </div>
    </div>
  );
}

import Text from "./Text/Text";

export default function Footer() {
  return (
    <div>
      <div
        className="mx-auto items-center flex p-8 flex-col w-full"
        style={{ backgroundColor: "#2f3888" }}
      >
        <Text textAlign="center" color="white">
          © 2023 ALICETTE S.R.L. P.IVA 08390270968
        </Text>
      </div>
    </div>
  );
}

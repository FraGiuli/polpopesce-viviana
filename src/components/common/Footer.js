import Text from "./Text/Text";
import Script from "next/script";

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
        <div className="flex gap-1 ">
          {/* Link alla Privacy Policy */}
          <a
            href="https://www.iubenda.com/privacy-policy/39911099"
            className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe text-white hover:text-yellow-100"
            title="Privacy Policy"
            target="_blank"
          >
            Privacy Policy
          </a>
          <span className="text-white text-xl">|</span>

          {/* Link alla Cookie Policy */}
          <a
            href="https://www.iubenda.com/privacy-policy/39911099/cookie-policy"
            className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe text-white hover:text-yellow-100"
            title="Cookie Policy"
            target="_blank"
          >
            Cookie Policy
          </a>
        </div>
      </div>
    </div>
  );
}

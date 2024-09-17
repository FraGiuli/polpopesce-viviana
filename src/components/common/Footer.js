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
            rel="noopener noreferrer"
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
            rel="noopener noreferrer"
          >
            Cookie Policy
          </a>
        </div>
      </div>

      {/* Caricamento dello script di Iubenda */}
      <Script
        id="iubenda-cookie-policy-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function (w,d) {
              var loader = function () {
                var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
                s.src="https://cdn.iubenda.com/iubenda.js";
                tag.parentNode.insertBefore(s,tag);
              };
              if(w.addEventListener){
                w.addEventListener("load", loader, false);
              } else if(w.attachEvent) {
                w.attachEvent("onload", loader);
              } else {
                w.onload = loader;
              }
            })(window, document);
          `,
        }}
      />
    </div>
  );
}

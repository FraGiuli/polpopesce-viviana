import { Image } from "@nextui-org/react";

export default function Hero({
  borderBottomColor,
  src,
  srcLogo,
  width = "500px",
  nooverlay,
  bgPosition,
  borderNone,
}) {
  return (
    <div
      style={{
        borderBottom: `${
          borderNone ? "none" : `10px solid ${borderBottomColor}`
        }`,
        width: "100%",
        minHeight: "500px",
        backgroundImage: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        position: "relative",
        backgroundPosition: `${bgPosition ? bgPosition : "center"}`,
      }}
    >
      {!nooverlay && (
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            opacity: 0.3,
            zIndex: 0,
          }}
        ></div>
      )}
      <div
        className="mx-auto flex flex-col p-4 md:p-0 items-center justify-center min-h-0 md:min-h-[900px]"
        style={{
          maxWidth: "1528px",
          position: "relative",
          zIndex: 2,
        }}
      >
        {srcLogo && (
          <Image
            src={`${srcLogo}`}
            alt="logo"
            className="pt-16"
            style={{ maxWidth: width, margin: 0 }}
          />
        )}
      </div>
    </div>
  );
}

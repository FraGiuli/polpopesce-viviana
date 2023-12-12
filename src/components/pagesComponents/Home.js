import Image from "next/image";
import { SLIDER } from "../../constants/Content";
import Hero from "../common/Hero";
import Slider from "../common/Slider";
import StrikeThrough from "../common/StrikeThrough/StrikeThrough";
import Text from "../common/Text/Text";
import { Modal } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <>
      <div>
        <Hero
          src="/polpopesce_slider.jpg"
          borderBottomColor="#2f3888"
          srcLogo="/logo-polpo-byspica.png"
        />
        <div className="mx-auto" style={{ maxWidth: "1528px" }}>
          <div
            className="flex flex-col items-center justify-center px-[16px] mx-auto md:mt-32 mt-16 mb-8"
            style={{ maxWidth: "1000px" }}
          >
            <StrikeThrough
              className="mb-8"
              fontSize="20px"
              textTransform="uppercase"
              matrixValue="-1.1, -0.02, -0.3, 2, 0, 0"
            >
              Sul lungomare di Via Melzo 9
            </StrikeThrough>
            <Text
              data-aos="fade-down"
              data-aos-duration="1000"
              tag="h1"
              fontSize="38px"
              fontWeight="bold"
              textAlign="center"
              marginBottom="30px"
            >
              A Milano apre POLPO Semplicemente Pesce <br></br> Bar Trattoria
              Vivace by SPICA
            </Text>
            <div className="flex flex-col">
              <Text marginBottom="14px" lineHeight="1.4" fontWeight="bold">
                Viviana Varese si ispira alla trattoria anni ’80 per dare vita a
                un locale dinamico e contemporaneo, in cui è il pesce ad essere
                protagonista.
              </Text>
              <Text lineHeight="1.4" marginBottom="14px">
                POLPO svela una doppia anima dividendosi fra bar, in cui le
                tapas accompagnano il momento dell’aperitivo, e trattoria con
                pochi ingredienti di qualità crudi e combinati a diverse cotture
                che compongono un menu, espressione di una cucina semplice e
                autentica con materie prime di alta qualità.
              </Text>
              <Text lineHeight="1.4">**In cucina**: Valentina Gaeta</Text>
              <Text lineHeight="1.4" marginBottom="14px">
                **In sala**: Davide Gianni, Valeria Lorusso, Martina Guercia
              </Text>
              <div
                className="flex gap-[20px] flex-col md:flex-row items-center justify-center mx-auto px-[16px] mb-8"
                style={{ maxWidth: "1000px" }}
              >
                <a
                  href="/POLPO_MENU_TAPAS_web.pdf"
                  target="_blank"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <StrikeThrough
                    fontSize="20px"
                    textTransform="uppercase"
                    linetheme="highlight"
                    matrixValue="-1.02, -0.04, -0.01, 1, 0, 0"
                  >
                    <span>Tapas Menu</span>
                  </StrikeThrough>
                </a>
                <a
                  href="/POLPO_MENU_trattoria_web.pdf"
                  target="_blank"
                  data-aos="fade-down"
                  data-aos-duration="1000"
                >
                  <StrikeThrough
                    fontSize="20px"
                    textTransform="uppercase"
                    linetheme="highlight"
                    matrixValue="-1.02, -0.04, -0.01, 1, 0, 0"
                  >
                    <span>Menu trattoria</span>
                  </StrikeThrough>
                </a>
              </div>
              <div className="text-center mb-16">
                <a
                  onClick={handler}
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  className="mb-8"
                >
                  <StrikeThrough
                    fontSize="20px"
                    textTransform="uppercase"
                    linetheme="highlight"
                    matrixValue="-1.02, -0.04, -0.01, 1, 0, 0"
                  >
                    <span>Prenota</span>
                  </StrikeThrough>
                </a>
              </div>

              <div className="flex flex-col md:flex-row gap-[24px]">
                <div>
                  <Text
                    lineHeight="1.4"
                    marginBottom="14px"
                    className="md:w-[50%]"
                  >
                    Sfumature di blu disegnano i suoi interni, a ricordare il
                    mare anche alla vista: così che ogni senso possa condurre a
                    un’atmosfera marittima e retrò. Come tutti i ristoranti di
                    Viviana Varese, POLPO vuole infatti essere un luogo, dove
                    cucina e ambiente, fra design e arredi, comunicano
                    all’unisono. POLPO prende il posto di Spica, progetto di
                    cucina fusion che la chef stellata Viviana Varese aveva
                    intrapreso con la socia e chef indiana Ritu Dalmia nel 2019,
                    e che oggi vede una continuità progettuale proprio con un
                    bar trattoria dal carattere moderno e democratico.
                  </Text>
                  <div className="mt-4">
                    <a
                      href="/Catalogo_Natale_2023.pdf"
                      target="_blank"
                      data-aos="fade-down"
                      data-aos-duration="1000"
                    >
                      <StrikeThrough
                        fontSize="20px"
                        textTransform="uppercase"
                        linetheme="highlight"
                        matrixValue="-1.02, -0.04, -0.01, 1, 0, 0"
                      >
                        <span>Scopri il Catalogo di Natale</span>
                      </StrikeThrough>
                    </a>
                  </div>
                </div>

                <img
                  src="ritu-viviana.jpg"
                  alt="Ritu-Viviana"
                  className="md:w-[50%]  mb-8"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/6 mb-8 mx-auto">
            <Slider images={SLIDER} />
          </div>
          <div
            className="flex flex-col items-center justify-center px-[16px] mx-auto md:mt-16 mt-8 mb-8"
            style={{ maxWidth: "1000px" }}
          >
            <div className="flex flex-col">
              <Text lineHeight="1.4">
                **Cantina**: a cura di Alessandro Limongelli e Martina Guercia
                POLPO ha una carta dei vini “mediterranea”, specialmente
                italiana con Sicilia e Campania protagoniste, grande spazio alle
                bollicine, predilige piccoli produttori con un occhio curioso
                anche al biologico e al naturale accanto però a grandi e
                rinomate cantine. Tra i vini al calice una selezione da nord a
                sud e alcune etichette di Vermouth per “meditare” insieme alle
                tapas.
              </Text>
            </div>
          </div>
          <div
            className="flex gap-[20px] flex-col md:flex-row items-center justify-center mx-auto px-[16px] mb-16"
            style={{ maxWidth: "1000px" }}
          >
            <a
              href="/11_28_carta_dei_Vini POLPO.pdf"
              target="_blank"
              data-aos="fade-down"
              data-aos-duration="1000"
            >
              <StrikeThrough
                fontSize="20px"
                textTransform="uppercase"
                linetheme="highlight"
                matrixValue="-1.02, -0.04, -0.01, 1, 0, 0"
              >
                <span>Carta Vini</span>
              </StrikeThrough>
            </a>
          </div>
          <img
            src="entrata.jpg"
            alt="welcome"
            className="mx-auto w-full md:w-4/6 mb-8"
          />
          <div
            className="flex flex-col items-center justify-center px-[16px] mb-8 mx-auto"
            style={{ maxWidth: "1000px" }}
          >
            <Text className="text-lg leading-relaxed text-center mb-8">
              Concept, creative & art direction and content | Almagreal<br></br>
              New Look a cura di B-Arch | Architettura Sabrina Bignami /
              Alessandro Capellaro
            </Text>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            minHeight: "100px",
            backgroundImage: `url(/sfondo-polpo.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            position: "relative",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="mx-auto mt-8" style={{ maxWidth: "1528px" }}>
          <div
            className="flex flex-col items-center justify-center px-[16px] mb-16 mx-auto"
            style={{ maxWidth: "1000px" }}
          >
            <Text
              tag="h2"
              textTransform="uppercase"
              fontSize="30px"
              fontWeight="bold"
              marginBottom="10px"
            >
              Contatti
            </Text>
            <Text textAlign="center">
              POLPO Semplicemente Pesce - Bar Trattoria Vivace<br></br>
              by SPICA
            </Text>
            <img
              src="/Pesce-giallo.png"
              alt="pesce"
              className="py-8"
              data-aos="fade-up"
              data-aos-duration="1000"
              width="200px"
            />
            <Text
              tag="a"
              href="https://maps.app.goo.gl/Q2xPA26mrcxBZXpTA"
              marginBottom="10px"
              target="_blank"
            >
              Via Melzo 9, 20129 Milano
            </Text>
            <Text marginBottom="10px">
              tel: <a href="tel:+390284572974">+39 02 84572974</a> /{" "}
              <a href="tel:+393423926392">+39 342 3926392 </a>
            </Text>
            <Text tag="a" href="mailto:info@polpopesce.it" marginBottom="40px">
              info@polpopesce.it
            </Text>
            <Text lineHeight="1.4" marginBottom="20px" textAlign="center">
              Aperto dal martedì al venerdì dalle{" "}
              <strong>18.00 alle 24.00</strong>
              <br></br>
              Sabato e domenica dalle <strong> 12.00 alle 15.00 </strong>e dalle{" "}
              <strong> 19.00 alle 24.00</strong>
              <br></br>Chiuso il lunedì
              <br></br>
              <br></br>
              Si accettano prenotazioni solo per il pranzo e la cena (non per
              l’aperitivo).
            </Text>
            <a
              onClick={handler}
              data-aos="fade-down"
              data-aos-duration="1000"
              className="mb-8"
            >
              <StrikeThrough
                fontSize="20px"
                textTransform="uppercase"
                linetheme="highlight"
                matrixValue="-1.02, -0.04, -0.01, 1, 0, 0"
              >
                <span>Prenota</span>
              </StrikeThrough>
            </a>

            <div className="flex gap-[8px] items-center justify-center">
              <Text
                lineHeight="1.4"
                fontWeight="bold"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                Seguici su
              </Text>
              <a
                href="https://www.instagram.com/polpopesce/"
                target="_blank"
                className="icon-ista"
              >
                <img
                  src="/instagram-icon.png"
                  alt="instagram"
                  width="30px"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                />
              </a>
            </div>
            <Modal
              closeButton
              aria-labelledby="modal-title"
              open={visible}
              onClose={closeHandler}
              width="500px"
            >
              <Modal.Body>
                <div align="center">
                  <iframe
                    src="https://widget.thefork.com/7fd41234-91ea-4cb9-8197-9129e6614c18"
                    style={{
                      width: "100%",
                      minHeight: "500px",
                      border: "none",
                      scrolling: "yes",
                    }}
                  ></iframe>
                </div>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

import nara from "../../../assets/images/naraProntos.webp";

import insta from "../../../assets/images/icons/instagram.svg";
import facebook from "../../../assets/images/icons/facebook.svg";
import linkedin from "../../../assets/images/icons/linkedin.svg";
import youtube from "../../../assets/images/icons/youtube.svg";

export default function SectionSociais() {
  return (
    <section className="bg-[#f0cca8] ">
      <div className="container m-auto px-5 md:px-10 xl:px-14 py-10 xl:py-14 flex flex-col gap-10 lg:flex-row items-center">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="font-rewant text-[42px] lg:text-5xl xl:text-6xl leading-10 text-center lg:text-start text-[#663210] ">
            Conheça minhas <br className="hidden lg:block" />
            redes sociais
          </h2>

          <div>
            <a
              href="https://www.instagram.com/dranaravieira/"
              target="_blank"
              className="text-lg flex gap-3"
            >
              <img src={insta} alt="icone instagram" className="w-5" />
              @dranaravieira
            </a>

            <a
              href="https://www.facebook.com/dra.naravieira/?locale=pt_BR"
              target="_blank"
              className="text-lg flex gap-3"
            >
              <img src={facebook} alt="icone instagram" className="w-5" />
              @dra.naravieira
            </a>

            <a
              href="https://www.youtube.com/@Dra.NaraVieira"
              target="_blank"
              className="text-lg flex gap-3"
            >
              <img src={youtube} alt="icone instagram" className="w-5" />
              @Dra.NaraVieira
            </a>

            <a
              href="https://www.linkedin.com/in/dranaravieira"
              target="_blank"
              className="text-lg flex gap-3"
            >
              <img src={linkedin} alt="icone instagram" className="w-5" />
              @dranaravieira
            </a>
          </div>

          <h3 className="text-[#663210] ">Para entrar em contato:</h3>
          <div className="space-y-1">
            <a href="tel:+553438148280" className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  className="text-[#663210]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              34 3814-8280
            </a>

            <a href="tel:+553438218561" className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  className="text-[#663210]"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              34 3821-8561
            </a>

            <a
              href="https://api.whatsapp.com/send/?phone=5534998798280&text=Ol%C3%A1%2C+gostaria+de+agendar+uma+consulta+com+a+Dra.+Nara+por+favor.&type=phone_number&app_absent=0"
              className="flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="24"
                height="24"
                viewBox="0,0,256,256"
              >
                <g
                  fill="#663210"
                  fill-rule="nonzero"
                  stroke="none"
                  stroke-width="1"
                  stroke-linecap="butt"
                  stroke-linejoin="miter"
                  stroke-miterlimit="10"
                  stroke-dasharray=""
                  stroke-dashoffset="0"
                  font-family="none"
                  font-weight="none"
                  font-size="none"
                  text-anchor="none"
                >
                  <g transform="scale(10.66667,10.66667)">
                    <path d="M12.01172,2c-5.506,0 -9.98823,4.47838 -9.99023,9.98438c-0.001,1.76 0.45998,3.47819 1.33398,4.99219l-1.35547,5.02344l5.23242,-1.23633c1.459,0.796 3.10144,1.21384 4.77344,1.21484h0.00391c5.505,0 9.98528,-4.47937 9.98828,-9.98437c0.002,-2.669 -1.03588,-5.17841 -2.92187,-7.06641c-1.886,-1.887 -4.39245,-2.92673 -7.06445,-2.92773zM12.00977,4c2.136,0.001 4.14334,0.8338 5.65234,2.3418c1.509,1.51 2.33794,3.51639 2.33594,5.65039c-0.002,4.404 -3.58423,7.98633 -7.99023,7.98633c-1.333,-0.001 -2.65341,-0.3357 -3.81641,-0.9707l-0.67383,-0.36719l-0.74414,0.17578l-1.96875,0.46484l0.48047,-1.78516l0.2168,-0.80078l-0.41406,-0.71875c-0.698,-1.208 -1.06741,-2.58919 -1.06641,-3.99219c0.002,-4.402 3.58528,-7.98437 7.98828,-7.98437zM8.47656,7.375c-0.167,0 -0.43702,0.0625 -0.66602,0.3125c-0.229,0.249 -0.875,0.85208 -0.875,2.08008c0,1.228 0.89453,2.41503 1.01953,2.58203c0.124,0.166 1.72667,2.76563 4.26367,3.76563c2.108,0.831 2.53614,0.667 2.99414,0.625c0.458,-0.041 1.47755,-0.60255 1.68555,-1.18555c0.208,-0.583 0.20848,-1.0845 0.14648,-1.1875c-0.062,-0.104 -0.22852,-0.16602 -0.47852,-0.29102c-0.249,-0.125 -1.47608,-0.72755 -1.70508,-0.81055c-0.229,-0.083 -0.3965,-0.125 -0.5625,0.125c-0.166,0.25 -0.64306,0.81056 -0.78906,0.97656c-0.146,0.167 -0.29102,0.18945 -0.54102,0.06445c-0.25,-0.126 -1.05381,-0.39024 -2.00781,-1.24024c-0.742,-0.661 -1.24267,-1.47656 -1.38867,-1.72656c-0.145,-0.249 -0.01367,-0.38577 0.11133,-0.50977c0.112,-0.112 0.24805,-0.2915 0.37305,-0.4375c0.124,-0.146 0.167,-0.25002 0.25,-0.41602c0.083,-0.166 0.04051,-0.3125 -0.02149,-0.4375c-0.062,-0.125 -0.54753,-1.35756 -0.76953,-1.85156c-0.187,-0.415 -0.3845,-0.42464 -0.5625,-0.43164c-0.145,-0.006 -0.31056,-0.00586 -0.47656,-0.00586z"></path>
                  </g>
                </g>
              </svg>
              34 9 9879-8280
            </a>

            <a
              href="https://goo.gl/maps/F7C5siqBcBNHy2TT9"
              className="flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-full max-w-6"
              >
                <path
                  className="text-[#663210] "
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  className="text-[#663210] "
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              Av. Padre Almir Neves de Medeiros, 355. Bairro Sobradinho. Patos
              de Minas, MG.
            </a>
          </div>
        </div>

        <img
          src={nara}
          width={10}
          height={10}
          alt="Foto da Doutora Nara em pé"
          className="w-auto mx-auto lg:w-1/2 shadow-xl "
        />
      </div>
    </section>
  );
}

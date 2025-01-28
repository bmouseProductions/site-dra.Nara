import logo from "../assets/images/logo-horizontal-branca.svg";

export default function Footer() {
  return (
    <footer className="bg-[#663210] ">
      <div className="max-w-[80%] mx-auto py-10 px-5  xl:px-16 space-y-10 text-white">
        <img
          src={logo}
          alt="Logo da empresa Olhar Oftalmológico"
          className="w-full max-w-[300px] xl:max-w-[350px] mx-auto "
        />

        <div className="flex justify-center gap-5">
          <a
            href="https://www.facebook.com/dra.naravieira/?locale=pt_BR"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5"
            >
              <path
                className="fill-[#fff] hover:fill-white"
                d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"
              />
            </svg>
          </a>

          <a href="https://www.instagram.com/dranaravieira/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-5"
            >
              <path
                className="fill-[#fff] hover:fill-white"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>

          <a href="https://www.youtube.com/@Dra.NaraVieira" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 461.001 461.001"
              className="w-6"
            >
              <g>
                <path
                  className="fill-[#fff] hover:fill-white"
                  d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                />
              </g>
            </svg>
          </a>
        </div>

        <div className="mt-10 pt-5 flex flex-col gap-5 md:flex-row md:justify-around border-t border-[#a0a0a0] ">
          <span className="text-center">Copyright © 2024.</span>

          <a
            href="https://bmouseproductions.com/"
            target="_blank"
            className="text-center"
          >
            Desenvolvido por: <strong>Bmouse Productions</strong>
          </a>
        </div>
      </div>
    </footer>
  );
}

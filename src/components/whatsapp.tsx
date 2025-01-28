import wpp from "../assets/images/whatsapp.png";

export default function Whatsapp() {
  return (
    <a
      href="https://wa.me/5534998798280?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Dra.%20Nara%20por%20favor."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed z-10 bottom-5 right-5"
    >
      <img src={wpp} alt="Whatsapp" className="w-14 animate-bounce" />
    </a>
  );
}

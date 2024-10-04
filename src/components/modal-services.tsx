import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ServiceInterface {
  nome: string;
  imagem: string;
  resumo: string;
  descricao: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: ServiceInterface;
}

const ModalServices: React.FC<ModalProps> = ({ isOpen, onClose, service }) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    // Adiciona o listener de evento ao componente
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    // Remove o listener quando o modal é fechado
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackgroundClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div 
      className="fixed z-[100000] inset-0 bg-black/60 px-5 flex items-center justify-center transition-all"
      onClick={handleBackgroundClick}
    >
      <div className="relative z-50 w-full md:w-[80%] rounded-lg">
        
        <div className="mb-5 flex justify-end">
          <button onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
              <path className="text-red-600" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className='flex flex-col lg:flex-row max-xl:h-[80vh] overflow-auto bg-[#f5f6fa] rounded-xl'>
          <div className='flex-1 mb-4 lg:mb-0 lg:mr-4 max-lg:rounded-xl lg:rounded-l-xl'>
            <img 
              src={service.imagem}
              alt={`imagem do serviço ${service.nome}`}
              className='w-full h-full object-cover rounded-t-lg lg:rounded-none lg:rounded-l-lg'
            />
          </div>

          <div className='flex-1 p-5'>
            <h3 className='text-2xl text-[#81b29a] font-semibold'>
              {service.nome}
            </h3>

            <p 
              className='mt-2 text-base font-franieLight' 
              dangerouslySetInnerHTML={{ __html: service.descricao }} 
            />
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ModalServices;

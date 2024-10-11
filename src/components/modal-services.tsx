import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ServiceInterface {
  nome: string;
  imagem?: string;
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
      <div className="relative z-50 w-full md:w-[70%] lg:w-[65%] rounded-lg">
        
        <div className="mb-5 flex justify-end">
          <button onClick={onClose}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
              <path className="text-red-600" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className='flex flex-col xl:flex-row h-[70vh] overflow-auto bg-[#f5f6fa] rounded-xl'>
          
          {service.imagem ? 
            <div className='xl:flex-1'>
              <img 
                  src= {service.imagem}
                  alt={`Imagem de exemplo ${service.nome}`}
                  className="w-full h-full object-cover rounded-t-lg xl:rounded-none xl:rounded-l-lg"
              />
              </div>
            : 
            <span className='hidden'></span>    
          }

          <div className='flex-1 p-5 overflow-auto'>
            <h3 className='text-2xl text-[#663210] font-semibold'>
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

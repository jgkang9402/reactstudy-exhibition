import React, { useEffect, useState } from "react";

interface AutomaticallyCloseModalProps {
  modalText: string;
  timeoutTime?: number;
  callback?: () => void;
}

const AutomaticallyCloseModal: React.FC<AutomaticallyCloseModalProps> = ({
  modalText,
  timeoutTime = 1000,
  callback,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
      if (callback) callback();
    }, timeoutTime);

    return () => clearTimeout(timeoutId);
  }, [timeoutTime]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-40 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300">
      <div className="bg-blue-100 p-8 w-1/4 h-1/6 flex flex-col justify-center items-center transform transition-all duration-300 scale-110">
        <p className="text-blue-900 text-center break-words">{modalText}</p>
      </div>
    </div>
  );
};

export default AutomaticallyCloseModal;

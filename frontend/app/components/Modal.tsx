"use client"
import { ReactNode, useEffect} from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: ReactNode;
}


export default function Modal({isOpen, onClose, title, children}:ModalProps) {

    useEffect(() => {
    if (!isOpen) return;

    const handleEsc = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
    }, [isOpen, onClose]);

  if (!isOpen) return null;


    return(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {title && (
          <h2 className="mb-4 text-lg font-semibold">{title}</h2>
        )}

        <div>{children}</div>

        <button
          onClick={onClose}
          className="mt-6 rounded bg-gray-900 px-4 py-2 text-white hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
    )
}   
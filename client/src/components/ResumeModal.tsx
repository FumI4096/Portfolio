import { FaTimes, FaDownload } from "react-icons/fa";
import ResumePDF from '../assets/files/MAIQUEZ-RESUME-ATS.pdf';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div
                className="relative bg-primary-gray-2 rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden animate-fade-in-photo"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                    <span className="font-poppins-semibold text-white text-xl">My Resume</span>
                    <div className="flex items-center gap-4">
                        <button
                            onClick={onClose}
                            className="text-white text-2xl hover:opacity-70 transition cursor-pointer"
                            aria-label="Close resume modal"
                        >
                            <FaTimes />
                        </button>
                    </div>
                </div>

                <div className="flex-1 bg-white">
                    <iframe
                        src={ResumePDF}
                        title="Resume"
                        className="w-full h-full"
                    />
                </div>
                <div className="flex items-center justify-center sm:justify-end px-4 py-4 border-b border-white/10">
                    <a
                        href={ResumePDF}
                        download
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-4xl font-poppins-medium text-sm hover:opacity-90 transition sm:w-auto"
                    >
                        <FaDownload className="text-sm" />
                        Download
                    </a>

                </div>
            </div>
        </div>
    );
}
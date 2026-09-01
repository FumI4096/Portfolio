import { FaTimes, FaDownload } from "react-icons/fa";
import { createPortal } from "react-dom";
import ResumePDF from '../assets/files/MAIQUEZ-RESUME-ATS.pdf';

interface ResumeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
    if (!isOpen) return null;

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] w-full h-full flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
            onClick={onClose}
        >
            <div
                className="bg-primary-gray-2 rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
                    <span className="font-poppins-semibold text-white text-xl">My Resume</span>
                    <button
                        onClick={onClose}
                        className="text-white text-2xl hover:opacity-70 transition cursor-pointer"
                        aria-label="Close resume modal"
                    >
                        <FaTimes />
                    </button>
                </div>

                {/* Laptop/Desktop View */}
                <div className="hidden md:flex flex-1 bg-white">
                    <iframe
                        src={ResumePDF}
                        title="Resume"
                        className="w-full h-full"
                    />
                </div>

                {/* Mobile View */}
                <div className="flex md:hidden flex-1 flex-col items-center justify-center gap-6 px-6 text-center">
                    <div className="text-6xl">📄</div>
                    <div>
                        <p className="font-poppins-semibold text-white text-lg mb-1">Resume Preview</p>
                        <p className="font-poppins-light text-primary-gray-3 text-sm">
                            PDF preview isn't supported on mobile browsers.
                            You can open or download it directly.
                        </p>
                    </div>
                    <div className="flex flex-col w-full gap-3">
                        <a
                            href={ResumePDF}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-secondary-blue-1 rounded-xl font-poppins-medium text-sm text-white hover:opacity-90 transition"
                        >
                            Open Resume
                        </a>
                        <a
                            href={ResumePDF}
                            download
                            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white rounded-xl font-poppins-medium text-sm hover:opacity-90 transition"
                        >
                            <FaDownload className="text-sm" />
                            Download
                        </a>
                    </div>
                </div>

                {/* Footer: download button (desktop only) */}
                <div className="hidden md:flex items-center justify-end px-4 py-4 border-t border-white/10">
                    <a
                        href={ResumePDF}
                        download
                        className="flex items-center justify-center gap-2 px-4 py-2 bg-white rounded-4xl font-poppins-medium text-sm hover:opacity-90 transition"
                    >
                        <FaDownload className="text-sm" />
                        Download
                    </a>
                </div>
            </div>
        </div>,
        document.body
    );
}
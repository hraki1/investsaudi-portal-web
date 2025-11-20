import React from 'react';
import Modal from './Modal';
import { IoMdClose } from 'react-icons/io';
import { FiMail } from 'react-icons/fi';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import Button from './Button';
import ShareButton from './ShareButton';
import { GrPrevious } from 'react-icons/gr';
import { AiOutlineDownload } from 'react-icons/ai';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

interface PDFModalProps {
    isOpen: boolean;
    onClose: () => void;
    pdfPath: string;
    title?: string;
    onInterest?: () => void;
    onPrevious?: () => void;
    onNext?: () => void;
    showNavigation?: boolean;
}

const PDFModal: React.FC<PDFModalProps> = ({
    isOpen,
    onClose,
    pdfPath,
    title = "Document",
    onInterest,
    onPrevious,
    onNext,
    showNavigation = true
}) => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = title || 'document.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleShareEmail = () => {
        const subject = encodeURIComponent(`Check out this investment opportunity: ${title}`);
        const body = encodeURIComponent(`Hi,\n\nI thought you might be interested in this investment opportunity document.\n\nBest regards.`);
        window.open(`mailto:?subject=${subject}&body=${body}`);
    };

    const handleSharePhone = () => {
        alert(`Contact for more information about: ${title}`);
    };

    const handleShareSocial = () => {
        const shareText = `Check out this investment opportunity: ${title}`;
        const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(shareUrl, '_blank');
    };

    const handleShareTwitter = () => {
        const tweetText = `Check out this investment opportunity: ${title}`;
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}&url=${encodeURIComponent(window.location.href)}`;
        window.open(twitterUrl, '_blank');
    };

    return (
        <>
            {/* Navigation Buttons - Positioned outside modal */}
            {isOpen && showNavigation && (
                <>
                    {/* Previous Button - Left Side */}
                    <button
                        onClick={onPrevious}
                        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-[10000] bg-white/40 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white/50 hover:shadow-xl transition-all duration-200 group"
                        title="Previous Document"
                        disabled={!onPrevious}
                    >
                        <IoChevronBack 
                            size={24} 
                            className={`transition-colors ${
                                onPrevious ? 'text-white group-hover:text-gray-600' : 'text-white'
                            }`} 
                        />
                    </button>

                    {/* Next Button - Right Side */}
                    <button
                        onClick={onNext}
                        className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[10000] bg-white/40 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:bg-white/50 hover:shadow-xl transition-all duration-200 group"
                        title="Next Document"
                        disabled={!onNext}
                    >
                        <IoChevronForward 
                            size={24} 
                            className={`transition-colors ${
                                onNext ? 'text-white group-hover:text-gray-600' : 'text-white'
                            }`} 
                        />
                    </button>
                </>
            )}

            <Modal
                open={isOpen}
                classesName="bg-white text-gray-900 max-h-[90vh] overflow-hidden bukra-regular"
                onOverlayClick={onClose}
            >
                <div className="w-full h-full flex flex-col relative">
                    {/* Close Button - Top Right */}
                    <button
                        onClick={onClose}
                        className="absolute -top-8 right-4 z-10 p-2 rounded-full hover:bg-gray-200 transition-colors"
                        title="Close"
                    >
                        <IoMdClose size={20} className="text-white" />
                    </button>

                    {/* PDF Viewer - Full Height */}
                    <div className="flex-1 bg-gray-100 rounded-2xl overflow-hidden">
                        <iframe
                            src={pdfPath}
                            className="w-full h-full border-0"
                            title={title}
                            style={{ minHeight: '80vh' }}
                        >
                            <p className="p-4 text-center text-gray-600">
                                Your browser does not support PDFs.
                                <button
                                    onClick={handleDownload}
                                    className="ml-2 text-blue-600 hover:underline"
                                >
                                    Download the PDF
                                </button>
                            </p>
                        </iframe>
                    </div>
                </div>
            </Modal>

            {/* Full Width Footer at Bottom of Page */}
            {isOpen && (
                <div className="fixed bottom-0 left-0 right-0 z-10000 bg-white backdrop-blur-md border-t border-gray-200/20 shadow-lg">
                    <div className="max-w-7xl mx-auto px-4 py-5">
                        <div className="flex flex-col sm:flex-row justify-between items-center">

                            {/* Left Section - Share Icons */}
                            <div className="flex items-center gap-6">
                                {/* Share Icons */}
                                <div className="flex gap-3">
                                    <ShareButton onClick={handleShareEmail} variant="outline">
                                        <FiMail size={16} />
                                    </ShareButton>
                                    <ShareButton onClick={handleSharePhone} variant="outline">
                                        <MdOutlinePhoneInTalk size={16} />
                                    </ShareButton>
                                    <ShareButton onClick={handleShareSocial} variant="outline">
                                        <IoShareSocialOutline size={16} />
                                    </ShareButton>
                                    <ShareButton onClick={handleShareTwitter} variant="outline">
                                        <FaXTwitter size={16} />
                                    </ShareButton>
                                </div>
                                <div className="flex flex-row gap-3 sm:gap-1">
                                    {/* Download Button */}
                                    <Button
                                        onClick={handleDownload}
                                        variant="outline"
                                        className="flex items-center gap-2 md:px-4 py-2 transition-colors"
                                    >
                                        
                                        <span className="hidden md:block">Download</span>
                                        <AiOutlineDownload  size={16} />
                                    </Button>

                                    {/* I'm Interested Button */}
                                    <Button
                                        onClick={onInterest}
                                        className="px-4 py-2 bg-teal-500 text-white transition-colors"
                                    >
                                        <span >I'm interested</span>

                                    </Button>
                                </div>
                            </div>

                            {/* Right Section - Next/Prev Button */}
                            <div className='flex-row hidden md:flex'>
                                <Button variant="clearOutline" className='pl-0'>
                                    <em className="rounded-full bg-neutral-100 px-2 py-2 mr-2"><GrPrevious size={14} /></em>
                                    Previous
                                </Button>
                                 <Button variant="clearOutline">
                                    Next
                                    <em className="rounded-full bg-neutral-100 px-2 py-2 ml-2"><GrPrevious className="rotate-180" size={14} /></em>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default PDFModal;
import React, { useState } from 'react';

// Styles
import './cover.css';

// Assets
import CoverPC from '../../assets/images/cover-pc.png';
import { MdClose } from "react-icons/md";

const Cover = () => {
    const [isSlideOpen, setIsSlideOpen] = useState(false);

    const toggleSlide = () => {
        setIsSlideOpen(!isSlideOpen);
    };

    const scrollToContacts = () => {
        // Get the contacts section element by its ID
        const contactsSection = document.getElementById('contacts');
        if (contactsSection) {
            // Scroll to the contacts section
            contactsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className={`cover ${isSlideOpen ? 'slide-open' : ''}`}>
            <div className="cover-container">
                <div className="cover-nav d-flex justify-content-between align-items-center">
                    <div className="cover-brand d-flex gap-2">
                        <div className="cover-logo">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 45 45" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 19.0651C8.58534 34.7088 23.1568 44.9999 39.688 44.9999C41.2699 44.9999 42.8338 44.9056 44.3763 44.7215C44.7865 41.6312 44.9998 38.4598 44.9998 35.2273C44.9998 22.0065 41.4324 9.80775 35.4137 0L30.3631 19.0651H0Z" fill="#3A5AFF"/>
                            </svg>
                        </div>

                        <div className="cover-name">
                            <h1 className='mb-0'>Orkhan Aliyev</h1>
                        </div>
                    </div>

                    <div
                        className="cover-language d-flex align-items-center gap-2 pointer"
                        onClick={() => toggleSlide()}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 34 29" fill="none">
                            <rect width="34" height="4.08" rx="2.04" fill="#3A5AFF"/>
                            <rect x="6.12" y="8.15991" width="27.88" height="4.08" rx="2.04" fill="#3A5AFF"/>
                            <rect x="13.6" y="16.3201" width="20.4" height="4.08" rx="2.04" fill="#3A5AFF"/>
                            <rect x="20.4" y="24.48" width="13.6" height="4.08" rx="2.04" fill="#3A5AFF"/>
                        </svg>
                    </div>
                </div>

                <div className="cover-info">
                    <div className="cover-info-block d-flex align-items-center">
                        <div className="cover-text d-flex flex-column gap-2">
                            <h3>Programlaşdırma öyrənməyi asanlaşdır!</h3>

                            <p>Python və digər proqramlaşdırma dillərində dərslər!</p>

                            <button 
                                className="cover-button"
                                onClick={() => scrollToContacts()}
                            >
                                İndi qeydiyyatdan keç!
                            </button>
                        </div>

                        <div className="cover-img">
                            <img src={CoverPC} alt="Cover PC" />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`cover-slide ${isSlideOpen ? 'slide-left' : 'slide-right'}`}>
                <div className="cover-slide-container">
                    <div className="cover-slide-header d-flex justify-content-between pointer">
                        <div className="cover-slide-bottom d-flex gap-1 align-items-center pointer">
                            <p className='mb-0'>AZ</p>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                                <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="black"/>
                            </svg>
                        </div>

                        <MdClose 
                        color='#3A5AFF'
                            size={28} 
                            onClick={() => toggleSlide()}
                        />
                    </div>

                    <div className="cover-slide-content d-flex flex-column justify-content-between">
                        <nav className='d-flex flex-column'>
                            <a href='#benefits'>Üstünlüklər</a>
                            <a href='#about'>Haqqımda</a>
                            <a href='#experience'>Təcrübə və Proyektlər</a>
                            <a href='#opinions'>Tələbələrin fikirləri</a>
                            <a href='#contacts'>Əlaqə</a>
                        </nav>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;

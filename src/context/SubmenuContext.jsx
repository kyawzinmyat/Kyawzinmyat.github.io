import React, { createContext, useEffect, useState } from 'react'

const SubmenuContext = createContext();
export default SubmenuContext;

export const SubmenuProvider = (props) => {

    let [currentSection, setCurrentSection] = useState('landing');
    let [allSections, setAllSections] = useState([]);
    let [currentY, setCurrentY] = useState(window.scrollY);

    window.addEventListener('scroll', () => {
        setCurrentY(window.scrollY)
    })

    const handleScroll = () => {
        var current = 'aboutme';
        for (var section of allSections){
            if (section.current.getBoundingClientRect().y <= 100){
                current = section.current.id 
                console.log(current)
            }
        }
        setCurrentSection(current)
    }

    useEffect( () => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentY])
    
    let contextData = {
        setAllSections: setAllSections,
        currentSection: currentSection
    }

    return  (<SubmenuContext.Provider value={contextData}>
                {props.children}
            </SubmenuContext.Provider>
    )
}

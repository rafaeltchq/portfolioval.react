import { useState, useEffect } from 'react';

const useScrollPosition = () => {
    const [scrollPosition, setSrollPosition] = useState(null)
    const handleScroll = () => {
        const position = window.pageYOffset
        setSrollPosition(position)
      }
      useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
      })
    return scrollPosition
    
};

export default useScrollPosition;
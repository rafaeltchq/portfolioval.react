import { useState, useEffect } from 'react';

const useScrollPosition = () => {
    const [scrollPosition, setSrollPosition] = useState(null)
    const handleScroll = () => {
        const position = window.pageYOffset
        setSrollPosition(position)
      }
      // const closeWhenScroll = () => {
        // setTimeout(() => {
        //   setCarouselOpen(false)
        // }, 700);
      // }
      useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        // window.addEventListener('scroll', closeWhenScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll)
            // window.removeEventListener('scroll', closeWhenScroll)
        }
      })
    return scrollPosition
    
};

export default useScrollPosition;
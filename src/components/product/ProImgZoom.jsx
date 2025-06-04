import React, { useState, useRef, useEffect } from 'react';

const ProImgZoom = () => {
    const [mainImageSrc, setMainImageSrc] = useState('../imgs/cat01.png');
    const [zoomVisible, setZoomVisible] = useState(false);

    const lensRef = useRef(null);
    const zoomResultRef = useRef(null);
    const mainContainerRef = useRef(null);

    const zoomLevel = 2;

    const moveLens = (e) => {
        const { left, top, width, height } = mainContainerRef.current.getBoundingClientRect();
        let x = e.pageX - left - window.pageXOffset;
        let y = e.pageY - top - window.pageYOffset;

        const lensWidth = lensRef.current.offsetWidth / 5;
        const lensHeight = lensRef.current.offsetHeight / 5;

        x = x - lensWidth;
        y = y - lensHeight;

        if (x < 0) x = 0;
        if (y < 0) y = 0;
        if (x > width - lensRef.current.offsetWidth) x = width - lensRef.current.offsetWidth;
        if (y > height - lensRef.current.offsetHeight) y = height - lensRef.current.offsetHeight;

        lensRef.current.style.left = x + 'px';
        lensRef.current.style.top = y + 'px';

        const xPercent = (x + lensWidth) / width * 100;
        const yPercent = (y + lensHeight) / height * 100;

        zoomResultRef.current.style.backgroundImage = `url(${mainImageSrc})`;
        zoomResultRef.current.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
    };

    const changeImage = (src) => {
        setMainImageSrc(src);
    };

    useEffect(() => {
        const mainContainer = mainContainerRef.current;
        const lens = lensRef.current;
        const zoomResult = zoomResultRef.current;

        const handleMouseEnter = () => setZoomVisible(true);
        const handleMouseLeave = () => {
            setZoomVisible(false);
            zoomResult.style.backgroundImage = 'none';
        };

        mainContainer.addEventListener('mousemove', moveLens);
        mainContainer.addEventListener('mouseenter', handleMouseEnter);
        mainContainer.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            mainContainer.removeEventListener('mousemove', moveLens);
            mainContainer.removeEventListener('mouseenter', handleMouseEnter);
            mainContainer.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [mainImageSrc]);

    return (
        <div>
            <div className="container">
                <div className="main-image-container" ref={mainContainerRef}>
                    <img
                        id="mainImage"
                        src={mainImageSrc}
                        alt="Main Image"
                        onMouseEnter={() => setZoomVisible(true)}
                        onMouseLeave={() => setZoomVisible(false)}
                    />
                    <div
                        className="lens"
                        ref={lensRef}
                        style={{ display: zoomVisible ? 'block' : 'none' }}
                    ></div>
                </div>
                <div
                    className="zoom-result"
                    ref={zoomResultRef}
                    style={{ display: zoomVisible ? 'block' : 'none' }}
                ></div>
            </div>

            <div className="carousel" id="carousel">
                <img
                    src="../imgs/cat01.png"
                    alt="Red"
                    onClick={() => changeImage('../imgs/cat01.png')}
                />
                <img
                    src="../imgs/cat02.png"
                    alt="Green"
                    onClick={() => changeImage('../imgs/cat02.png')}
                />
                <img
                    src="../imgs/cat03.png"
                    alt="Blue"
                    onClick={() => changeImage('../imgs/cat03.png')}
                />
                <img
                    src="../imgs/cat04.png"
                    alt="Yellow"
                    onClick={() => changeImage('../imgs/cat04.png')}
                />
                <img
                    src="../imgs/cat05.png"
                    alt="Magenta"
                    onClick={() => changeImage('../imgs/cat05.png')}
                />
            </div>
        </div>
    )
}

export default ProImgZoom
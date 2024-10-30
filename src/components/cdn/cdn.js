import React, { useEffect } from 'react';

const CDN = () => {
    useEffect(() => {
        // Подключаем jQuery
        const jQueryScript = document.createElement('script');
        jQueryScript.src = "https://code.jquery.com/jquery-3.6.0.min.js";
        jQueryScript.async = true;
        document.body.appendChild(jQueryScript);

        // Подключаем Popup.js
        const popupScript = document.createElement('script');
        popupScript.src = "https://cdn.jsdelivr.net/npm/@simondmc/popup-js@1.4.3/popup.min.js";
        popupScript.async = true;
        document.body.appendChild(popupScript);

        // Удаление скриптов при размонтировании компонента (необязательно)
        return () => {
            document.body.removeChild(jQueryScript);
            document.body.removeChild(popupScript);
        };
    }, []);

    return (
        <div>
            {/* Ваше содержимое компонента */}
        </div>
    );
};

export default CDN;

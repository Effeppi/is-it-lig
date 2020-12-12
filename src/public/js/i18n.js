(function () {


    const defaultPage = '/language/it-IT'
    const language = navigator.language;
    const route = window.location.href



    if(isLanguageSupported(language)) {

        if (!isCorrectRouteForLanguage(route, language)) {
            window.location.href = `/language/${language}`
        } 

    } else {
        if (!isCorrectRouteForLanguage(route, defaultPage)) {
            window.location.href = defaultPage;
        }

    }



    function isCorrectRouteForLanguage(targetRoute, targetLocale) {
        return targetRoute.includes(targetLocale)
    }


    function isLanguageSupported(targetLocale) {
        return ['it-IT',
                'en-US'
            ]
            .includes(targetLocale)
    }

})();
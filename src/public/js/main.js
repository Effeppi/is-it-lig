(function () {

    const ligDay = {
        month: 4,
        dayOfMonth: 29
    }

    checkDate();
    setInterval(checkDate, 1000);

    function checkDate() {
        var now = new Date();
        var ligTime = getLigTime(now)


        /**
         * Check if the target lig day interval (24h) contain now. 
         */
        if (now.getTime() >= ligTime.getTime() && now.getTime() < (ligTime.getTime() + 1000 * 60 * 60 * 24)) {
            showDaLig()
        } else if (now.getTime() < ligTime.getTime()) { // check if now is before the lig day in the actual year
            showLigCounter()
            calculateTime(ligTime, now)
        } else { // if in this year the lig day already done
            showLigCounter()
            const plusOneYear = now.getFullYear() + 1;
            ligTime = new Date(ligTime.setFullYear(plusOneYear))
            calculateTime(ligTime, now)

        }


    }


    function getLigTime(now) {
        var ligTime = new Date(now);

        ligTime = new Date(ligTime.setMonth(ligDay.month - 1));
        ligTime = new Date(ligTime.setDate(ligDay.dayOfMonth));
        ligTime = new Date(ligTime.setHours(0));
        ligTime = new Date(ligTime.setMinutes(0))
        ligTime = new Date(ligTime.setSeconds(0))
        ligTime = new Date(ligTime.setMilliseconds(0))

        return ligTime;

    }


    function calculateTime(ligTime, now) {

        // Find the distance between now and the count down date
        var distance = ligTime.getTime() - now.getTime();

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in the element with id="counter"
        document.getElementById("counter").innerHTML = days + "d " + hours + "h " +
            minutes + "m " + seconds + "s ";


    }

    function showLigCounter() {
        document.getElementById("counter-div").style.display = "block";
        document.getElementById("itislig-div").style.display = "none";

    }

    function showDaLig() {
        document.getElementById("counter-div").style.display = "none";
        document.getElementById("itislig-div").style.display = "block";

    }



})();
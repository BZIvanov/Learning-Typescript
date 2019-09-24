// object holding functions which are about user interaction
let interact = (() => {
    // will set specific class when the item is clicked
    function mark(event) {
        if (Array.from(event.target.classList).indexOf("marked") < 0) {
            event.target.classList.add("marked");
        } else {
            event.target.classList.remove("marked");
        }
    }

    return {
        mark
    }
})();

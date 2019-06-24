let notify = (() => {
    function showInfo(message, type) {
        let div = document.getElementById(type);
        div.classList.remove("collapse");
        let textItem = document.querySelector(`#${type} > span`);
        textItem.textContent = message;

        setTimeout(() => {
            div.classList.add("collapse");
        }, 3000);
    }

    return {
        showInfo
    }
})();

// object holding functions which are related to changes in the website, such as login, logout, errors ot creating and updating items
let notify = (() => {
    /**
    * This function will make the notifications box visible for short period of time
    * @param {string} message The message which will be displayed on user interaction
    * @param {string} type Represents bootstrap class such as danger, success or info
    * @return {void} The function will display a message in specific bootstrap element
    */
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

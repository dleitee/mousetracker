(() => {
    "use strict";
    var timeout = null;
    document.addEventListener("mousemove", data => {
        if(timeout){
            return;
        }
        timeout = window.setTimeout(() => {
            console.log("move", data.offsetX, data.offsetY);
            timeout = null;
        }, 700);

    });

    document.addEventListener("click", data => {
        console.log("click", data.offsetX, data.offsetY);
    });

    document.addEventListener("dblclick", data => {
        console.log("dblclick", data.offsetX, data.offsetY);
    });
})();

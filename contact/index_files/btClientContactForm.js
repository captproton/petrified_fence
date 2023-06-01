function receiveMessage(event) {
    // there have been mulitiple ways of doing this over the years, unfortunately this has to support all of them

    // get new iframe
    var iframe = document.getElementById("btIframe");
    if (iframe === null) {
        // new iframe not found, get old iframe
        iframe = document.getElementById("btLeadsContactiFrame");

        if (iframe === null) {
            // no frame found, find it manually
            var frames = document.getElementsByTagName('iframe');
            for (var i = 0; i < frames.length; i++) {
                if (frames[i].src.indexOf(event.origin.replace("http://", "").replace("https://", "")) >= 0) {
                    iframe = frames[i];
                }
            }
        }
    }

    if (iframe) {
        var frameHeight = null;

        // three ways of passing frameHeight
        if (event.data.hasOwnProperty("FrameHeight")) {
            frameHeight = event.data.FrameHeight + "px";
        }
        else if (event.data.hasOwnProperty("height")) {
            frameHeight = event.data.height + "px";
        }
        else if (typeof event.data !== "undefined" && event.data !== null && typeof(event.data) != "object" && event.data.indexOf("h=") >= 0) {
            frameHeight = event.data.replace("h=", "") + "px";
        }

        if (frameHeight !== null) {
            iframe.height = frameHeight;
            iframe.style.height = frameHeight;
        }
    }
}

window.addEventListener("message", receiveMessage, false);
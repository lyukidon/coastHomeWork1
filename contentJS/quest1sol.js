(function () {
    let wrapper = document.getElementById("quest1sol");
    let converter = new showdown.Converter();
    let markdownFormat = "There is no markdown file";

    window.onresize = function () {
        if(window.innerWidth < 600){
            wrapper.setAttribute("class", "mobile");
        }else{
            wrapper.removeAttribute("class");
        }
    };

    readTextFile("content/quest1sol.md");
    let html = converter.makeHtml(markdownFormat);
    wrapper.innerHTML = html;
    function readTextFile(file) {
        let rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4) {
                if (rawFile.status === 200 || rawFile.status == 0) {
                    markdownFormat = rawFile.responseText;
                }
            }
        };
        rawFile.send(null);
    }
})();

class TemplateConstructor {

    constructHeader() {

        var root = document.getElementById("root");
    
        var header = document.createElement("header");
        header.setAttribute("id", "header");
        root.appendChild(header);
    }
    
    constructContent() {
    
        var root = document.getElementById("root");
    
        var content = document.createElement("div");
        content.setAttribute("id", "content");
        root.appendChild(content);
    }
    
    constructFooter() {
    
        var root = document.getElementById("root");
    
        var footer = document.createElement("footer");
        footer.setAttribute("id", "footer");
        root.appendChild(footer);
    }

}
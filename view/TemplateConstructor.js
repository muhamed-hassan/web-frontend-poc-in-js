
class TemplateConstructor {

    constructHeader() {

        this.constructSegment("header", "header");
    }
    
    constructContent() {

        this.constructSegment("div", "content");
    }
    
    constructFooter() {

        this.constructSegment("footer", "footer");
    }

    constructSegment(elementType, segmentId) {

        var root = document.getElementById("root");
        var element = document.createElement(elementType);
        element.setAttribute("id", segmentId);
        root.appendChild(element);
    }

}
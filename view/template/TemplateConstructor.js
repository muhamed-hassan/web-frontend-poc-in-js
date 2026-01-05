
class TemplateConstructor {

    constructHeader() {

        this.constructSegment("header", "header");
        
        var headerElement = document.getElementById("header");

        var header = new Header();
        headerElement.innerHTML = header.getHtml();
    }
    
    constructContent() {

        this.constructSegment("div", "content");

        var contentElement = document.getElementById("content");

        contentElement.setAttribute("class", "content");

        var mainPage = new MainPage();
        contentElement.innerHTML = mainPage.getHtml();
    }
    
    constructFooter() {

        this.constructSegment("footer", "footer");

        var footerElement = document.getElementById("footer");
        
        var footer = new Footer();
        footerElement.innerHTML = footer.getHtml();
    }

    constructSegment(elementType, segmentId) {

        var root = document.getElementById("root");
        var element = document.createElement(elementType);
        element.setAttribute("id", segmentId);
        root.appendChild(element);
    }

}
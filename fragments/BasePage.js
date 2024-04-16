
class BasePage {

    getBackToMainHtml() {

        return "<a class=\"back-to-main\" id=\"backToMain\" href=\"#\" onclick=\"navigateTo(this)\">" + 
                    "Back to main" + 
                "</a>";        
    }

}
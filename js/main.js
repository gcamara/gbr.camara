;(function() {
    $('div.navigation nav').click(function() {
        var self = $(this)
        var dataHref = self.attr('data-href')

        //Add background to the selected navigator
        var nextDiv = $('.'+dataHref)
        $('div.navigation nav').removeClass('selected')
        self.addClass('selected')

        //Remove active class
        var activeDiv = $('div.content div.active')
        activeDiv.removeClass('active')
        activeDiv.prevAll().each(function(index, element) {
            applyMargin(element, -3000)
        })
        activeDiv.nextAll().each(function(index, element) {
            applyMargin(element, 3000)
        })

        function applyMargin(element, amount) {
            element = $(element)
            var margin = element.css('margin-left').replace('px', '')
            element.css('margin-left', parseInt(margin)+amount+"px")
        }
        setTimeout(function() {
            nextDiv.addClass('active')
        }, 200)
    })
})()
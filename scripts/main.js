/**
 * jquery
 **/
$( document ).ready(function() {
    /**
     * js router
     * git@github.com:chrisdavies/rlite.git
     **/
    var r = new Rlite();
    r.add('', function () {
        document.title = 'Home';
        render("#home-template")
    });
    r.add('portfolio', function () {
        document.title = 'Portfolio';
        render("#portfolio-template")
    });
    r.add('links', function () {
        document.title = 'Links';
        render("#links-template");
    });

    // Hash-based routing
    function processHash() {
        var hash = location.hash || '#';
        r.run(hash.substr(1));
    }
    window.addEventListener('hashchange', processHash);
    processHash();

    /**
     * handle bars
     **/
    function render(page) {
        var source = $(page).html();
        var template = Handlebars.compile(source);
        var data = {"title" : "some title"};
        var result = template(data);
        $("#main_container").html(result);
    }
});

module.exports = {
    path: '/',
    render: function(req, res) {

        var html = '<h1>dyson</h1><p>Example endpoints:</p>';

        var examples = [
            '/player',
        ];

        html += '<ul>' + examples.map(function(example) {
            return '<li><a href="' + example + '">' + example + '</a></li>';
        }).join('') + '</ul>';

        res.status(200).send(html);
    }
};
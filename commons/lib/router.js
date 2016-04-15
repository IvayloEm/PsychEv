Router.route('/register');
Router.route('/login');
Router.route('/', function () {
    this.render('home');
});
Router.route('/tracks/shamanic', function() {
    this.render('shamanic');
    var sound = new Howl({
        urls: ['/sounds/shamanic-beat.mp3']
    });
    sound.play();
    console.log('server code initiated')
});
Router.route('/tracks/adhd-relief', function() {
    this.render('adhd-relief');
});
Router.route('/tracks/calm-confidence', function() {
    this.render('calm-confidence');
});
Router.route('/tracks/creative-boost', function() {
    this.render('creative-boost');
});
Router.route('/tracks/energizer', function() {
    this.render('energizer');
});

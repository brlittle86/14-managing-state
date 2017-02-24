'use strict';

(function(module) {
  const repoView = {};

  const ui = function() {
    let $about = $('#about');

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE: What is in 'render'? What values are passed in? Where does it interact elsewhere in the code?
  // Put your response in this comment... render is a reference to a handlebars template function. Handlebars.compile is a handlebars method that takes in a template from the HTML (in a script tag).
  const render = Handlebars.compile($('#repo-template').text());

  repoView.index = function() {
    ui();

    $('#about ul').append(
      repos.with('name').map(render)
    );
  };

  module.repoView = repoView;
})(window);

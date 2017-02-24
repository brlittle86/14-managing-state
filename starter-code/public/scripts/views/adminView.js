// DONE: Where is this invoked? Where does it interact elsewhere in the code?
// All the functionality in this file are wrapped in an IIFE, which means it runs immediately when loaded on admin.html. The new object's method is invoked as a callback at the bottom of the IIFE.

(function() {
  const adminView = {
    initAdminPage : () => {
      let template = Handlebars.compile($('#author-template').text());
      Article.numWordsByAuthor().forEach(stat => $('.author-stats').append(template(stat)));
      $('#blog-stats .articles').text(Article.all.length);
      $('#blog-stats .words').text(Article.numWordsAll());
    }
  };

  Article.fetchAll(adminView.initAdminPage);
})();

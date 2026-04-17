document.addEventListener('DOMContentLoaded', function() {
  var notebookBtn = document.getElementById('notebook-btn');
  notebookBtn.addEventListener('click', function() {
    var notebookContent = document.createElement('div');
    notebookContent.style.width = '100%';
    notebookContent.style.height = '100%';
    notebookContent.style.position = 'fixed';
    notebookContent.style.top = '0';
    notebookContent.style.left = '0';
    notebookContent.style.background = '#000';
    notebookContent.style.zIndex = '1000';
    notebookContent.innerHTML = '<h1>记事本</h1>';
    document.body.appendChild(notebookContent);

    setTimeout(function() {
      notebookContent.style.opacity = '0';
      notebookContent.style.transition = 'opacity 0.5s';
    }, 1000);

    setTimeout(function() {
      notebookContent.remove();
    }, 2000);

    setTimeout(function() {
      window.open('about:black', '_self');
    }, 3000);
  });

  function addPage() {
    var notebook = document.querySelector('.notebook');
    var page = document.createElement('div');
    page.classList.add('page');
    page.innerHTML = `
      <div class="header">新页面</div>
      <div class="content">
        <textarea rows="10" cols="50"></textarea>
      </div>
    `;
    notebook.appendChild(page);
    page.style.transition = 'opacity 0.5s';
    page.style.opacity = '1';
    page.style.transform = 'rotateY(0deg)';
    page.style.transformOrigin = 'center center';
    page.style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
  }

  function deletePage() {
    var notebook = document.querySelector('.notebook');
    var pages = notebook.querySelectorAll('.page');
    if (pages.length > 1) {
      pages[pages.length - 1].style.transition = 'opacity 0.5s';
      pages[pages.length - 1].style.opacity = '0';
      pages[pages.length - 1].style.transform = 'rotateY(180deg)';
      pages[pages.length - 1].style.transformOrigin = 'center center';
      pages[pages.length - 1].style.transitionTimingFunction = 'cubic-bezier(0.4, 0, 0.2, 1)';
      setTimeout(function() {
        pages[pages.length - 1].remove

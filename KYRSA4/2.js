document.addEventListener('DOMContentLoaded', function() {
    const postForm = document.getElementById('post-form');
    const postsList = document.getElementById('posts-list');
    const archiveList = document.getElementById('archive-list');

    postForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        const category = document.getElementById('category').value;
        const content = document.getElementById('content').value;

        createPost(title, author, category, content);

        postForm.reset();
    });

    postsList.addEventListener('click', function(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.closest('article').remove();
        } else if (e.target.classList.contains('archive-btn')) {
            const article = e.target.closest('article');
            const title = article.querySelector('h1').textContent;

            const archiveItem = document.createElement('li');
            archiveItem.textContent = title;
            archiveList.appendChild(archiveItem);

            article.remove();
        }
    });

    function createPost(title, author, category, content) {
        const article = document.createElement('article');


        const paragraphs = content.split('\n').filter(p => p.trim() !== '');
        let contentHTML = '';
        paragraphs.forEach(p => {
            contentHTML += `<p>${p}</p>`;
        });

        article.innerHTML = `
        <h1>${title}</h1>
        <div class="post-meta">
            <span>Категория: ${category}</span> | 
            <span>Бренд: ${author}</span>
        </div>
        <div class="post-content">
            ${contentHTML || '<p>Нет содержания</p>'}
        </div>
        <div class="post-actions">
            <button class="delete-btn">Удалить</button>
            <button class="archive-btn">Архив</button>
        </div>
    `;

        postsList.appendChild(article);
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Загружаем посты из localStorage или используем демо-данные
    let postsData = JSON.parse(localStorage.getItem('blogPosts')) || {
        active: [
            {
                title: "CALL OF DUTY BLACK OPS 7",
                excerpt: "На днях анонсировали новую часть серии игры COD",
                date: getCurrentDate(),
                image: "https://bnetcmsus-a.akamaihd.net/cms/blog_header/7m/7MFT7FOIH3I31749406406524.jpg?",
                category: "games"
            },
            {
                title: "Kai Angel новый сниппет",
                excerpt: "Кай дропнул новый снипет и пообещал клип уже в эту пятницу!",
                date: getCurrentDate(),
                image: "https://sun1-57.userapi.com/impg/FFTNVXrkdAOIGJFqy5JIUpgwnnfizMmGsW2eBg/aFINaVfzSD4.jpg?size=604x604&quality=95&sign=5e9c0e26eb432bd97544809292223022&type=album",
                category: "music"
            }
        ],
        archived: []
    };

    // Элементы DOM
    const postsContainer = document.getElementById('posts-container');
    const archivedContainer = document.getElementById('archived-posts-container');
    const subscribeForm = document.getElementById('subscribe-form');
    const addArticleBtn = document.getElementById('add-article-btn');

    // Функция для отображения всех постов
    function renderPosts() {
        postsContainer.innerHTML = '';
        archivedContainer.innerHTML = '';

        if (postsData.active.length === 0) {
            postsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Пока нет статей. Добавьте первую!</p>';
        } else {
            postsData.active.forEach((post, index) => {
                const postElement = createPostElement(post, index, false);
                postsContainer.appendChild(postElement);
            });
        }

        if (postsData.archived.length > 0) {
            postsData.archived.forEach((post, index) => {
                const archivedElement = createPostElement(post, index, true);
                archivedContainer.appendChild(archivedElement);
            });
        } else {
            archivedContainer.innerHTML = '<p style="text-align: center; color: var(--text-secondary);">Нет архивированных статей</p>';
        }
    }

    // Функция для создания элемента статьи
    function createPostElement(post, index, isArchived) {
        const postElement = document.createElement('article');
        postElement.className = isArchived ? 'archived-post' : 'post-card';

        if (isArchived) {
            postElement.innerHTML = `
                <div class="archived-post-content">
                    <h4 class="archived-post-title">${post.title}</h4>
                    <button class="restore-post" data-index="${index}">Восстановить</button>
                </div>
            `;
        } else {
            postElement.innerHTML = `
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}">
                    <span class="post-category ${post.category}">${getCategoryName(post.category)}</span>
                </div>
                <div class="post-content">
                    <p class="post-date">${post.date}</p>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="#" class="read-more">Читать далее <i class="fas fa-arrow-right"></i></a>
                    <div class="post-actions">
                        <button class="archive-post" data-index="${index}">Архивировать</button>
                        <button class="delete-post" data-index="${index}">Удалить статью</button>
                    </div>
                </div>
            `;
        }

        // Добавляем обработчики для кнопок
        if (isArchived) {
            postElement.querySelector('.restore-post').addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                restorePost(index);
            });
        } else {
            postElement.querySelector('.delete-post').addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const index = parseInt(this.getAttribute('data-index'));
                deletePost(index, false);
            });

            postElement.querySelector('.archive-post').addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const index = parseInt(this.getAttribute('data-index'));
                archivePost(index);
            });
        }

        return postElement;
    }

    // Функция для получения названия категории
    function getCategoryName(category) {
        const categories = {
            'games': 'Игры',
            'movies': 'Фильмы',
            'music': 'Музыка'
        };
        return categories[category] || 'Другое';
    }

    // Функция для удаления поста
    function deletePost(index, isArchived) {
        if (confirm('Вы уверены, что хотите удалить эту статью?')) {
            if (isArchived) {
                postsData.archived.splice(index, 1);
            } else {
                postsData.active.splice(index, 1);
            }
            savePostsToLocalStorage();
            renderPosts();
            alert('Статья успешно удалена!');
        }
    }

    // Функция для архивирования поста
    function archivePost(index) {
        if (confirm('Вы уверены, что хотите архивировать эту статью?')) {
            const [archivedPost] = postsData.active.splice(index, 1);
            postsData.archived.unshift(archivedPost);
            savePostsToLocalStorage();
            renderPosts();
            alert('Статья перемещена в архив!');
        }
    }

    // Функция для восстановления поста из архива
    function restorePost(index) {
        const [restoredPost] = postsData.archived.splice(index, 1);
        postsData.active.unshift(restoredPost);
        savePostsToLocalStorage();
        renderPosts();
        alert('Статья восстановлена из архива!');
    }

    // Функция для сохранения постов в localStorage
    function savePostsToLocalStorage() {
        localStorage.setItem('blogPosts', JSON.stringify(postsData));
    }

    // Функция для отображения формы добавления статьи
    function showAddArticleForm() {
        const formHtml = `
            <div class="add-article-form">
                <h3>Добавить новую статью</h3>
                <form id="article-form">
                    <div>
                        <label for="article-title">Заголовок</label>
                        <input type="text" id="article-title" required>
                    </div>
                    <div>
                        <label for="article-excerpt">Текст статьи</label>
                        <textarea id="article-excerpt" required></textarea>
                    </div>
                    <div>
                        <label for="article-image">Ссылка на изображение</label>
                        <input type="text" id="article-image" required>
                    </div>
                    <div>
                        <label for="article-category">Категория</label>
                        <select id="article-category">
                            <option value="games">Игры</option>
                            <option value="movies">Фильмы</option>
                            <option value="music">Музыка</option>
                        </select>
                    </div>
                    <div class="form-actions">
                        <button type="submit" class="btn">Добавить статью</button>
                        <button type="button" id="cancel-form" class="btn" style="background: var(--secondary-color); border: 1px solid var(--primary-color);">Отмена</button>
                    </div>
                </form>
            </div>
        `;

        const formContainer = document.createElement('div');
        formContainer.innerHTML = formHtml;
        postsContainer.parentNode.insertBefore(formContainer, postsContainer);

        // Обработчик отправки формы
        document.getElementById('article-form').addEventListener('submit', function(e) {
            e.preventDefault();
            addNewArticle();
            formContainer.remove();
        });

        // Обработчик отмены
        document.getElementById('cancel-form').addEventListener('click', function() {
            formContainer.remove();
        });
    }

    // Функция для добавления новой статьи
    function addNewArticle() {
        const title = document.getElementById('article-title').value;
        const excerpt = document.getElementById('article-excerpt').value;
        const image = document.getElementById('article-image').value;
        const category = document.getElementById('article-category').value;

        const newPost = {
            title: title,
            excerpt: excerpt,
            date: getCurrentDate(),
            image: image,
            category: category
        };

        postsData.active.unshift(newPost);
        savePostsToLocalStorage();
        renderPosts();
    }

    // Функция для получения текущей даты в формате "день месяц год"
    function getCurrentDate() {
        const months = [
            'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
            'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
        ];

        const date = new Date();
        return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    }

    // Обработчик клика по кнопке добавления статьи
    addArticleBtn.addEventListener('click', showAddArticleForm);

    // Обработка формы подписки
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;
        alert(`Спасибо за подписку, ${email}! Вы будете получать уведомления о новых статьях.`);
        this.reset();
    });

    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    renderPosts();
});
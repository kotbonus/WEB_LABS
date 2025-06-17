document.addEventListener('DOMContentLoaded', function() {
    // Загружаем посты из localStorage или используем демо-данные
    let posts = JSON.parse(localStorage.getItem('blogPosts')) || [
        {
            title: "Мой первый опыт в программировании",
            excerpt: "Рассказываю о том, как я начал свой путь в IT и с какими трудностями столкнулся.",
            content: "Полный текст статьи о моем первом опыте в программировании...",
            date: getCurrentDate(),
            image: "https://source.unsplash.com/random/600x400/?coding",
            category: "games"
        },
        {
            title: "Путешествие в горы: впечатления и советы",
            excerpt: "Делимся опытом похода в горы и даем полезные советы для начинающих туристов.",
            content: "Полный текст статьи о путешествии в горы...",
            date: getCurrentDate(),
            image: "https://source.unsplash.com/random/600x400/?mountain",
            category: "movies"
        }
    ];

    // Элементы DOM
    const postsContainer = document.getElementById('posts-container');
    const subscribeForm = document.getElementById('subscribe-form');
    const addArticleBtn = document.getElementById('add-article-btn');

    // Функция для отображения всех постов
    function renderPosts() {
        postsContainer.innerHTML = '';

        if (posts.length === 0) {
            postsContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center;">Пока нет статей. Добавьте первую!</p>';
            return;
        }

        posts.forEach((post, index) => {
            const postElement = document.createElement('article');
            postElement.className = 'post-card';
            postElement.innerHTML = `
                <div class="post-image">
                    <img src="${post.image}" alt="${post.title}">
                    <span class="post-category ${post.category}">${getCategoryName(post.category)}</span>
                </div>
                <div class="post-content">
                    <p class="post-date">${post.date}</p>
                    <h3 class="post-title">${post.title}</h3>
                    <p class="post-excerpt">${post.excerpt}</p>
                    <a href="#" class="read-more" data-index="${index}">Читать далее <i class="fas fa-arrow-right"></i></a>
                    <button class="delete-post" data-index="${index}">Удалить статью</button>
                </div>
            `;
            postsContainer.appendChild(postElement);
        });

        // Добавляем обработчики для кнопок "Читать далее"
        document.querySelectorAll('.read-more').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const index = parseInt(this.getAttribute('data-index'));
                showFullArticle(index);
            });
        });

        // Добавляем обработчики для кнопок удаления
        document.querySelectorAll('.delete-post').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                const index = parseInt(this.getAttribute('data-index'));
                deletePost(index);
            });
        });
    }

    // Функция для отображения полной статьи
    function showFullArticle(index) {
        const post = posts[index];

        // Создаем модальное окно
        const modal = document.createElement('div');
        modal.className = 'article-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <div class="modal-header">
                    <h2>${post.title}</h2>
                    <p class="post-date">${post.date}</p>
                    <span class="post-category ${post.category}">${getCategoryName(post.category)}</span>
                </div>
                <div class="modal-body">
                    <img src="${post.image}" alt="${post.title}" class="modal-image">
                    <div class="article-content">${post.content}</div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Обработчик закрытия модального окна
        modal.querySelector('.close-modal').addEventListener('click', function() {
            modal.remove();
        });

        // Закрытие при клике вне контента
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
            }
        });
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
    function deletePost(index) {
        if (confirm('Вы уверены, что хотите удалить эту статью?')) {
            posts.splice(index, 1);
            savePostsToLocalStorage();
            renderPosts();
        }
    }

    // Функция для сохранения постов в localStorage
    function savePostsToLocalStorage() {
        localStorage.setItem('blogPosts', JSON.stringify(posts));
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
                        <label for="article-excerpt">Краткое описание</label>
                        <textarea id="article-excerpt" required></textarea>
                    </div>
                    <div>
                        <label for="article-content">Полный текст статьи</label>
                        <textarea id="article-content" required></textarea>
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
        const content = document.getElementById('article-content').value;
        const image = document.getElementById('article-image').value;
        const category = document.getElementById('article-category').value;

        const newPost = {
            title: title,
            excerpt: excerpt,
            content: content,
            date: getCurrentDate(),
            image: image,
            category: category
        };

        posts.unshift(newPost);
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

    // Первоначальная загрузка постов
    renderPosts();
});
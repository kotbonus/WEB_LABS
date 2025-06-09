document.addEventListener('DOMContentLoaded', function() {
    // Массив с постами (в реальном проекте можно загружать с сервера)
    const posts = [
        {
            title: "Мой первый опыт в программировании",
            excerpt: "Рассказываю о том, как я начал свой путь в IT и с какими трудностями столкнулся.",
            date: "15 мая 2023",
            image: "https://source.unsplash.com/random/600x400/?coding"
        },
        {
            title: "Путешествие в горы: впечатления и советы",
            excerpt: "Делимся опытом похода в горы и даем полезные советы для начинающих туристов.",
            date: "3 мая 2023",
            image: "https://source.unsplash.com/random/600x400/?mountain"
        },
        {
            title: "Как я научился эффективно учиться",
            excerpt: "Методы и техники, которые помогли мне улучшить процесс обучения и запоминания информации.",
            date: "22 апреля 2023",
            image: "https://source.unsplash.com/random/600x400/?study"
        },
        {
            title: "Рецепт идеального утра",
            excerpt: "Мой распорядок утра, который помогает продуктивно начать день.",
            date: "10 апреля 2023",
            image: "https://source.unsplash.com/random/600x400/?morning"
        },
        {
            title: "Книги, которые изменили мое мышление",
            excerpt: "Подборка книг, оказавших наибольшее влияние на мое мировоззрение.",
            date: "28 марта 2023",
            image: "https://source.unsplash.com/random/600x400/?books"
        },
        {
            title: "Как сохранять мотивацию в долгосрочных проектах",
            excerpt: "Практические советы по поддержанию энтузиазма при работе над длительными задачами.",
            date: "15 марта 2023",
            image: "https://source.unsplash.com/random/600x400/?motivation"
        }
    ];

    // Загрузка постов в контейнер
    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        const postElement = document.createElement('article');
        postElement.className = 'post-card';
        postElement.innerHTML = `
            <div class="post-image">
                <img src="${post.image}" alt="${post.title}">
            </div>
            <div class="post-content">
                <p class="post-date">${post.date}</p>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <a href="#" class="read-more">Читать далее <i class="fas fa-arrow-right"></i></a>
            </div>
        `;
        postsContainer.appendChild(postElement);
    });

    // Обработка формы подписки
    const subscribeForm = document.getElementById('subscribe-form');
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input').value;

        // Здесь можно добавить AJAX запрос к серверу
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
});
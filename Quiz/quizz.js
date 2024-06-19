document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        { question: "Кто написал картину \"Мона Лиза\"?", answers: ["Винсент Ван Гог", "Пабло Пикассо", "Леонардо да Винчи", "Микеланджело"], correct: 2 },
        { question: "Какой была первая социальная сеть, запущенная в 2003 году?", answers: ["Facebook", "MySpace", "LinkedIn", "Twitter"], correct: 1 },
        { question: "Как называется фильм Кристофера Нолана о снах внутри снов?", answers: ["Интерстеллар", "Начало", "Дюнкерк", "Мементо"], correct: 1 },
        { question: "Сколько минут длится один тайм в футбольном матче?", answers: ["30 минут", "45 минут", "60 минут", "90 минут"], correct: 1 },
        { question: "В каком году началась Первая мировая война?", answers: ["1914", "1915", "1916", "1917"], correct: 0 },
        { question: "Как называется наука о растениях?", answers: ["Зоология", "Геология", "Ботаника", "Астрономия"], correct: 2 },
        { question: "Какая река является самой длинной в мире?", answers: ["Амазонка", "Нил", "Янцзы", "Миссисипи"], correct: 0 },
        { question: "Какой музыкальный инструмент был основным у Людвига ван Бетховена?", answers: ["Скрипка", "Флейта", "Пианино", "Гитара"], correct: 2 },
        { question: "Кто написал роман \"Преступление и наказание\"?", answers: ["Лев Толстой", "Фёдор Достоевский", "Антон Чехов", "Иван Тургенев"], correct: 1 },
        { question: "Какой элемент имеет химический символ O?", answers: ["Золото", "Кислород", "Углерод", "Железо"], correct: 1 },
    ];

    let currentQuestionIndex = 0;
    let correctAnswers = 0;
    
    const startContainer = document.getElementById('start-container');
    const startButton = document.getElementById('start-button');
    const allQuestionCounter = document.getElementById('all-question-counter');
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.answer');
    const questionCounter = document.getElementById('question-counter');
    const nextButton = document.getElementById('next-button');
    const resultContainer = document.getElementById('result-container');
    const resultElement = document.getElementById('result');
    const restartButton = document.getElementById('restart-button');
    
    allQuestionCounter.textContent = `В викторине ${questions.length} вопросов на разные темы`;

    startButton.addEventListener('click', startQuiz);
    
    function startQuiz() {
        questionContainer.style.display = 'block';
        nextButton.style.display = 'block';
        

        startContainer.style.display = 'none';
        resultContainer.style.display = 'none';
        showQuestion();
    }

    function showQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answerButtons.forEach((button, index) => {
            button.textContent = currentQuestion.answers[index];
            button.classList.remove('correct', 'incorrect');
            button.disabled = false;
            button.classList.remove('disabled');
        });
        questionCounter.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
        nextButton.disabled = true;
        nextButton.classList.add('disabled');

        
        const isLast = currentQuestionIndex + 1 === questions.length;
        if (isLast) {
            nextButton.textContent = 'Узнать результат';
        } else {
            nextButton.textContent = 'Следующий вопрос';
        }
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const selectedIndex = Array.from(answerButtons).indexOf(selectedButton);
        const currentQuestion = questions[currentQuestionIndex];
        const isCorrect = selectedIndex === currentQuestion.correct;
        if (isCorrect) {
            selectedButton.classList.add('correct');
            correctAnswers++;
        } else {
            selectedButton.classList.add('incorrect');
            answerButtons[currentQuestion.correct].classList.add('correct');
        }

        answerButtons.forEach(button => {
            button.disabled = true;
            button.classList.add('disabled');
        });

        nextButton.disabled = false;
        nextButton.classList.remove('disabled');
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        questionContainer.style.display = 'none';
        nextButton.style.display = 'none';
        resultContainer.style.display = 'block';
        resultElement.textContent = `Ваш результат: ${correctAnswers} из ${questions.length}`;
    }

    function restartQuiz() {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        questionContainer.style.display = 'block';
        nextButton.style.display = 'block';
        questionCounter.style.display = 'block';
        resultContainer.style.display = 'none';
        showQuestion();
    }

    answerButtons.forEach(button => button.addEventListener('click', selectAnswer));
    nextButton.addEventListener('click', nextQuestion);
    restartButton.addEventListener('click', restartQuiz);

    showQuestion();
});
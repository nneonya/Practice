document.addEventListener('DOMContentLoaded', () => {
    let currentQuestionIndex = 0;
    let correctAnswers = 0;

    const startContainer = document.getElementById('start-container');
    const startButton = document.getElementById('start-button');
    const allQuestionCounter = document.getElementById('all-question-counter');
    const questionContainer = document.getElementById('question-container');
    const questionElement = document.getElementById('question');
    const answerButtons = document.querySelectorAll('.answer');
    const questionCounter = document.getElementById('question-counter');
    const checkButton = document.getElementById('check-button');
    const nextButton = document.getElementById('next-button');
    const resultContainer = document.getElementById('result-container');
    const resultElement = document.getElementById('result');
    const restartButton = document.getElementById('restart-button');
    const multipleAnswersInfo = document.getElementById('multiple-answers-info');
    const themeToggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;
    const timerElement = document.getElementById('timer');
    const timeoutMessage = document.getElementById('timeout-message');

    allQuestionCounter.textContent = `В викторине ${questions.length} вопросов на разные темы`;

    startButton.addEventListener('click', startQuiz);
    nextButton.addEventListener('click', nextQuestion);
    checkButton.addEventListener('click', checkAnswer);
    restartButton.addEventListener('click', startQuiz);
    themeToggleButton.addEventListener('click', toggleTheme);
    answerButtons.forEach(button => button.addEventListener('click', selectAnswer));
    
    let timer;
    const questionTime = 10;

    function startTimer() {
        clearInterval(timer);
        timerElement.style.display = 'block';
        let timeLeft = questionTime;
        timerElement.textContent = `00:10`;
        timer = setInterval(() => {
                timerElement.textContent = `00:0${timeLeft-1}`;
            timeLeft--;
            if (timeLeft <= 3) {
                timerElement.classList.add('finish');
            }
            if (timeLeft < 0) {
                clearInterval(timer);
                timerElement.classList.remove('finish');
                timerElement.style.display = 'none';
                timeoutMessage.style.display = 'block';
                questionContainer.style.display = 'none';
                nextButton.style.display = 'none';
                checkButton.style.display = 'none';
                setTimeout(() => {
                    timeoutMessage.style.display = 'none';
                    nextQuestion(); 
                }, 2000);
            }
        }, 1000);
    }

    function stopTimer() {
        clearInterval(timer);
        timerElement.classList.remove('finish');
    }

    function startQuiz() {
        currentQuestionIndex = 0;
        correctAnswers = 0;
        questionContainer.style.display = 'block';
        nextButton.style.display = 'block';
        checkButton.style.display = 'block';
        startContainer.style.display = 'none';
        resultContainer.style.display = 'none';
        showQuestion();
    }

    function showQuestion() {
        questionContainer.style.display = 'block';
        nextButton.style.display = 'block';
        checkButton.style.display = 'block';
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        answerButtons.forEach((button, index) => {
            button.textContent = currentQuestion.answers[index];
            button.classList.remove('correct', 'incorrect', 'selected', 'disabled');
            button.disabled = false;
        });
        questionCounter.textContent = `${currentQuestionIndex + 1}/${questions.length}`;
        checkButton.disabled = true;
        checkButton.classList.add('disabled');
        nextButton.disabled = true;
        nextButton.classList.add('disabled');

        if (currentQuestion.correct.length > 1) {
            multipleAnswersInfo.textContent = "В этом вопросе несколько правильных ответов. \n Выберите все правильные варианты.";
            multipleAnswersInfo.style.display = 'block';
        } else {
            multipleAnswersInfo.style.display = 'none';
        }
        startTimer();
    }

    function selectAnswer(event) {
        const selectedButton = event.target;
        const currentQuestion = questions[currentQuestionIndex];

        if (currentQuestion.correct.length > 1) {
            if (selectedButton.classList.contains('selected')) {
                selectedButton.classList.remove('selected');
            } else {
                selectedButton.classList.add('selected');
            }
        } else {
            answerButtons.forEach(button => button.classList.remove('selected'));
            selectedButton.classList.add('selected');
        }

        const anySelected = Array.from(answerButtons).some(button => button.classList.contains('selected'));
        checkButton.disabled = !anySelected;
        if (anySelected) {
            checkButton.classList.remove('disabled');
        } else {
            checkButton.classList.add('disabled');
        }
    }

    function checkAnswer() {
        const currentQuestion = questions[currentQuestionIndex];
        const selectedIndexes = [];
        answerButtons.forEach((button, index) => {
            if (button.classList.contains('selected')) {
                selectedIndexes.push(index);
                if (currentQuestion.correct.includes(index)) {
                    button.classList.add('correct');
                } else {
                    button.classList.add('incorrect');
                }
            } else if (currentQuestion.correct.includes(index)) {
                button.classList.add('correct');
            }
            button.disabled = true;
            button.classList.add('disabled');
            stopTimer();
        });

        let isCorrect = selectedIndexes.length === currentQuestion.correct.length && selectedIndexes.every(index => currentQuestion.correct.includes(index));

        if (isCorrect) {
            correctAnswers++;
        }

        checkButton.disabled = true;
        checkButton.classList.add('disabled');
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
        checkButton.style.display = 'none';
        nextButton.style.display = 'none';
        resultContainer.style.display = 'block';
        resultElement.textContent = `Ваш результат: ${correctAnswers} из ${questions.length}`;
    }

    function toggleTheme() {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeIcon.src = './assets/sun.png';
        } else {
            themeIcon.src = './assets/moon.png';
        }
    };
});
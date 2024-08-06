function submitQuiz() {
    const answers = {
        q1: 'd',
        q2: 'a',
        q3: 'b',
        q4: 'c',
        q5: 'b',
        q6: 'b',
        q7: 'b',
        q8: 'b',
        q9: 'a',
        q10: 'a'
    };

    const form = document.getElementById('quiz-form');
    const resultsContainer = document.getElementById('results');
    let score = 0;
    let total = 0;
    const userAnswers = new FormData(form);

    userAnswers.forEach((value, key) => {
        total++;
        const question = document.querySelector(`input[name="${key}"][value="${value}"]`).closest('.question');
        if (answers[key] === value) {
            score++;
            question.classList.add('correct');
        } else {
            question.classList.add('wrong');
        }
    });

    resultsContainer.innerHTML = `You got ${score} out of ${total} correct.`;
}

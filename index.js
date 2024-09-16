document.addEventListener('DOMContentLoaded', () => {
    const correctAnswers = {
        q1: 'Delhi',
        q2: 'Russia',
        q3: 'Narendra Modi',
        q4:'Amazone',
        q5:'Nile'
    };

    document.getElementById('submit').addEventListener('click', () => {
        let score = 0;
        const questions = document.querySelectorAll('.question');
        
        questions.forEach(question => {
            const questionName = question.querySelector('input').name;
            const selectedAnswer = document.querySelector(`input[name="${questionName}"]:checked`);
            
            if (selectedAnswer) {
                const answerValue = selectedAnswer.value;
                if (answerValue === correctAnswers[questionName]) {
                    score++;
                }
            }
        });
        
        const resultElement = document.getElementById('result');
        resultElement.textContent = `You got ${score} out of ${Object.keys(correctAnswers).length} correct.`;
    });
});

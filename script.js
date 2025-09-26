
let step = 1;
let name = "";
let title = "";
let category = "";
let questions = [];
let current = 0;
let score = 0;
let usersCount = localStorage.getItem("usersCount") || 0;

function showStep(n) {
  for (let i = 1; i <= 7; i++) {
    const el = document.getElementById(`step-${i}`);
    if (el) el.style.display = (i === n ? 'block' : 'none');
  }
  document.body.className = (n === 1 ? 'intro' : (n === 2 ? 'value-prop' : ''));
}

function nextStep(n) {
  step = n;
  showStep(step);
  if (step === 5) {
    document.getElementById('readyText').textContent = `You're all set ${name}—let's begin!`;
    document.getElementById('readyDesc').textContent = `Get ready for 5 questions tailored for ${category === 'dentist' ? 'healthcare experts' : 'general users'}.`;
  }
  if (step === 6) {
    renderQuestion();
  }
  if (step === 7) {
    document.getElementById('winnerName').textContent = `${title}${name}`;
    setTimeout(() => {
      restart();
    }, 10000);
  }
}

function setUserName() {
  const input = document.getElementById("username").value.trim();
  if (input) {
    name = input;
    nextStep(4);
  } else {
    alert("Please enter your name to continue.");
  }
}

function setCategory(cat) {
  category = cat;
  title = cat === "dentist" ? "Dr. " : "";
  questions = (cat === "dentist" ? dentistQuestions : generalQuestions)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);
  nextStep(5);
}

function renderQuestion() {
  if (!questions || questions.length === 0) {
    questions = window.questions || [];
  }
  let q = questions[current];
  document.getElementById('progressCount').textContent = `${current + 1}/5`;
  document.getElementById('progressFill').style.width = `${((current + 1) / 5) * 100}%`;
  document.getElementById('questionText').textContent = q.question;
  document.getElementById('questionText').style.display = 'block';
  document.getElementById('questionText').style.visibility = 'visible';
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = "";
  q.options.forEach((opt, index) => {
    const label = document.createElement('label');
    label.className = 'quiz-option';
    label.innerHTML = `
      <input type="checkbox" name="quiz-option" value="${opt}" id="option-${index}">
      <span class="quiz-checkbox"></span>
      <span class="quiz-text">${opt}</span>
    `;
    optionsContainer.appendChild(label);
  });
  
  const nextBtn = document.createElement('button');
  nextBtn.textContent = 'Next';
  nextBtn.className = 'quiz-next-btn';
  nextBtn.onclick = () => {
    const selected = document.querySelector('input[name="quiz-option"]:checked');
    if (selected) {
      answer(selected.value);
    }
  };
  optionsContainer.appendChild(nextBtn);
}

function answer(option) {
  if (option === questions[current].answer) score++;
  if (current + 1 < questions.length) {
    current++;
    renderQuestion();
  } else {
    usersCount++;
    localStorage.setItem("usersCount", usersCount);
    nextStep(7);
  }
}

function restart() {
  step = 1;
  name = "";
  title = "";
  category = "";
  current = 0;
  score = 0;
  document.getElementById('username').value = "";
  document.getElementById('dentistRadio').checked = false;
  document.getElementById('generalRadio').checked = false;
  showStep(1);
}

document.addEventListener('DOMContentLoaded', function() {
  showStep(1);
  document.getElementById('playBtn').onclick = () => nextStep(2);
  document.getElementById('imInBtn').onclick = () => nextStep(3);
  document.getElementById('nextNameBtn').onclick = setUserName;
  document.getElementById('dentistRadio').onchange = () => setCategory('dentist');
  document.getElementById('generalRadio').onchange = () => setCategory('general');
  document.getElementById('startQuizBtn').onclick = () => nextStep(6);


  document.addEventListener('click', function(e) {
    if (e.target.tagName === 'BUTTON') {
      e.target.style.transform = 'scale(0.95)';
      setTimeout(() => {
        e.target.style.transform = '';
      }, 150);
    }
  });
});
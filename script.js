"use strict";

const questions = [
  {
    text: "Экономикалық мағынадағы меншік дегеніміз не?",
    options: [
      "Тауарларды иемдену және пайдалану бойынша адамдар арасындағы қатынастар",
      "Біреудің күнделікті пайдаланатын заттарының тізімі",
      "Адамның бір айда алатын кез келген табысы"
    ],
    correct: 0
  },
  {
    text: "Мүлікті сату сияқты оның заңды тағдырын анықтауға қандай құқық мүмкіндік береді?",
    options: ["Пайдалану құқығы", "Билік ету құқығы", "Мұрагерлік құқық"],
    correct: 1
  },
  {
    text: "Иелену құқығы нені білдіреді?",
    options: [
      "Заттың пайдалы қасиеттерін алу мүмкіндігі",
      "Мүлікті мұрагерлікке беру мүмкіндігі",
      "Затқа нақты иелік етудің заңды түрде қамтамасыз етілген мүмкіндігі"
    ],
    correct: 2
  },
  {
    text: "Мүлікті пайдалану құқығы нені білдіреді?",
    options: [
      "Меншіктен пайдалы қасиеттерді алу мүмкіндігі",
      "Мүлік иесін шектеусіз өзгерту құқығы",
      "Мүлікті пайдаланбай сақтау міндеті"
    ],
    correct: 0
  },
  {
    text: "Қандай мысал жеке меншікті көрсетеді?",
    options: [
      "Қала меншігіндегі муниципалды кітапхана",
      "Азаматтың заңды меншігіндегі пәтер",
      "Мемлекеттік ұлттық парк"
    ],
    correct: 1
  },
  {
    text: "Коммуналдық меншік кімге тиесілі?",
    options: [
      "Тек республикалық мемлекеттік органдарға",
      "Мүлікті пайдаланатын кәсіпорын қызметкерлері",
      "Қала немесе аудан сияқты жергілікті әкімшілік-аумақтық бірлікке"
    ],
    correct: 2
  },
  {
    text: "Ресурстарды бөлу туралы шешімдер әдетте командалық экономикада қалай қабылданады?",
    options: [
      "Негізінен орталықтандырылған жоспарлар мен тапсырыстарға негізделген",
      "Тек нарықтық бағаны еркін өзгерту арқылы",
      "Барлық тұтынушылардың анонимді дауыс беру нәтижелері бойынша"
    ],
    correct: 0
  },
  {
    text: "Нарықтық экономикада сұраныс пен ұсынысты үйлестіруде қандай тетік негізгі рөл атқарады?",
    options: [
      "Барлық кәсіпорындар үшін бірыңғай міндетті шығару жоспары",
      "Бағаның, сұраныс пен ұсыныстың өзара әрекеттесуі",
      "Өндірушілер арасындағы бәсекелестіктің толық болмауы"
    ],
    correct: 1
  },
  {
    text: "Аралас экономикалық жүйеге не тән?",
    options: [
      "Тек мемлекеттік меншік пен орталықтандырылған жоспарлау бар",
      "Мемлекет ешбір жағдайда экономикаға қатыспайды",
      "Нарықтық тетіктерді, жеке секторды және мемлекеттің қатысуын біріктіреді"
    ],
    correct: 2
  },
  {
    text: "Аралас экономикадағы мемлекеттің типтік рөлі қандай?",
    options: [
      "Ережелерді орнатып, қоғамдық игіліктермен қамтамасыз ету және нарықтағы олқылықтарды түзету",
      "Барлық зауыттарды ауыстырыңыз және әрбір өндірістік шешімді қабылдаңыз",
      "Жеке бастамаға және тауар алмасуға тыйым салу"
    ],
    correct: 0
  },
  {
    text: "Жекешелендіру дегеніміз не?",
    options: [
      "Жеке меншікті мемлекет меншігіне беру",
      "Мемлекеттік немесе муниципалдық мүлікті белгіленген тәртіппен жеке меншікке беру",
      "Жаңа мүлік салығын құру"
    ],
    correct: 1
  },
  {
    text: "Ұлттандыру дегеніміз не?",
    options: [
      "Мемлекеттік кәсіпорынды оның қызметкерлерінің меншігіне беру",
      "Бір кәсіпорынның дербес жеке компанияларға бөлінуі",
      "Заң негізінде мүлікті жеке меншіктен мемлекет меншігіне беру"
    ],
    correct: 2
  },
  {
    text: "Бәсекенің негізгі экономикалық қызметі қандай?",
    options: [
      "Өндірушілерді тиімділікті арттырып, тұтынушылардың қажеттіліктерін жақсырақ қанағаттандыруға ынталандыру",
      "Әрбір кәсіпорынға бірдей пайдаға кепілдік беру",
      "Тұтынушы таңдауын жою"
    ],
    correct: 0
  },
  {
    text: "Дәстүрлі экономикаға тән белгілердің бірі неде?",
    options: [
      "Өндіріс толығымен цифрлық платформалармен басқарылады",
      "Экономикалық шешімдер негізінен әдет-ғұрыптар мен тұрақты дәстүрлерге негізделген",
      "Барлық ресурстар тек биржалық сауда арқылы таратылады"
    ],
    correct: 1
  },
  {
    text: "Ресурстарды пайдаланудағы экономикалық тиімділік нені білдіреді?",
    options: [
      "Нәтижеге қарамастан мүмкіндігінше көп ресурстарды пайдалану",
      "Шығындар мен алынған өнімді бағалаудан бас тарту",
      "Шектеулі ресурстар арқылы ең жақсы нәтижеге қол жеткізу"
    ],
    correct: 2
  },
  {
    text: "Қызметкерлер кооператив арқылы кәсіпорынды басқаруға қалай қатыса алады?",
    options: [
      "Кооператив мүшелерінің ортақ меншік құқығы және оның ережелері бойынша шешім қабылдауға қатысуы",
      "Кәсіпорынның барлық мүлкін мемлекет меншігіне автоматты түрде беру",
      "Қатысушылардың ортақ шешімдерге жауапкершілігін толығымен жою"
    ],
    correct: 0
  },
  {
    text: "Қоғамдық игіліктің қай түрін мемлекет ұсына алады?",
    options: [
      "Сатып алушының тапсырысы бойынша жеке жасалған жиһаз",
      "Көшелерді жарықтандырудың көптеген тұрғынға бірдей қолжетімді болуы",
      "Бір иесі пайдаланатын жеке көлік"
    ],
    correct: 1
  },
  {
    text: "Неліктен меншік құқығы экономикалық қызмет үшін маңызды?",
    options: [
      "Олар кез келген тәуекелдерді жояды және иесіне пайдаға кепілдік береді",
      "Олар келісім-шарттар мен құқықтық нормаларды қажетсіз етеді",
      "Олар мүлікке қатысты құқықтар мен міндеттерді анықтайды және оны пайдалануды жоспарлауға көмектеседі."
    ],
    correct: 2
  },
  {
    text: "Нарықтық экономикада кәсіпкерді көбіне не ынталандырады?",
    options: [
      "Тәуекелге бара отырып, сұранысты қанағаттандыру арқылы пайда табу мүмкіндігі",
      "Орталық жоспарлау органының міндетті тағайындауы",
      "Клиенттердің кез келген өндірілген өнімді сатып алатынына кепілдік"
    ],
    correct: 0
  },
  {
    text: "Қоғамның әлеуметтік-экономикалық жүйесі деп нені атайды?",
    options: [
      "Дүкендерде сатылатын барлық тауарлардың тізімі",
      "Экономиканы ұйымдастыру әдісі: меншік нысандары, өндіріс, бөлу және экономикалық қатынастар",
      "Азаматтардың тек жеке табыстарының жиынтығы"
    ],
    correct: 1
  }
];

const introView = document.getElementById("intro-view");
const answerLetters = ["А", "Б", "В"];
const quizContent = document.getElementById("quiz-content");
const resultView = document.getElementById("result");
const progressLabel = document.getElementById("progress-label");
const scoreLabel = document.getElementById("score-label");
const progressBar = document.querySelector('[role="progressbar"]');
const progressFill = document.getElementById("progress-fill");
const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextButton = document.getElementById("next-button");
let currentQuestion = 0;
let score = 0;
let answered = false;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;
  introView.hidden = true;
  resultView.hidden = true;
  quizContent.hidden = false;
  renderQuestion();
}

function renderQuestion() {
  const question = questions[currentQuestion];
  answered = false;
  progressLabel.innerHTML = `Сұрақ <strong>${currentQuestion + 1}</strong> / ${questions.length}`;
  scoreLabel.textContent = `Ұпайлар: ${score}`;
  progressBar.setAttribute("aria-valuenow", String(currentQuestion));
  progressFill.style.width = `${(currentQuestion / questions.length) * 100}%`;
  questionNumber.textContent = `Сұрақ ${String(currentQuestion + 1).padStart(2, "0")}`;
  questionText.textContent = question.text;
  feedback.textContent = "";
  feedback.className = "feedback";
  nextButton.disabled = true;
  nextButton.innerHTML = currentQuestion === questions.length - 1
    ? 'Нәтижені көрсету <span aria-hidden="true">→</span>'
    : 'Келесі сұрақ <span aria-hidden="true">→</span>';
  answersContainer.replaceChildren();

  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer";
    button.dataset.index = String(index);
    button.innerHTML = `<span class="answer-letter" aria-hidden="true">${answerLetters[index]}</span><span></span>`;
    button.lastElementChild.textContent = option;
    button.addEventListener("click", () => selectAnswer(index));
    answersContainer.appendChild(button);
  });

  const questionBlock = document.getElementById("question-block");
  questionBlock.style.animation = "none";
  void questionBlock.offsetWidth;
  questionBlock.style.animation = "";
}

function selectAnswer(selectedIndex) {
  if (answered) return;
  answered = true;
  const question = questions[currentQuestion];
  const correct = selectedIndex === question.correct;
  if (correct) score += 1;

  answersContainer.querySelectorAll(".answer").forEach((button) => {
    const index = Number(button.dataset.index);
    button.disabled = true;
    if (index === question.correct) button.classList.add("is-correct");
    else if (index === selectedIndex) button.classList.add("is-wrong");
  });

  feedback.textContent = correct
    ? "Дұрыс! Сіз дұрыс жауап бердіңіз."
    : `Қате. Дұрыс жауап: ${question.options[question.correct]}`;
  feedback.classList.add(correct ? "correct" : "wrong");
  scoreLabel.textContent = `Ұпайлар: ${score}`;
  nextButton.disabled = false;
  nextButton.focus();
}

function showResult() {
  quizContent.hidden = true;
  resultView.hidden = false;
  progressBar.setAttribute("aria-valuenow", String(questions.length));
  progressFill.style.width = "100%";
  document.getElementById("result-score").textContent = `${score}/20`;

  let grade;
  if (score >= 18) grade = "Тамаша!";
  else if (score >= 15) grade = "Жақсы!";
  else if (score >= 10) grade = "Қанағаттанарлық.";
  else grade = "Материалды қайталау керек.";

  document.getElementById("result-grade").textContent = grade;
  document.getElementById("result-detail").textContent = `Дұрыс жауаптар: ${score} / ${questions.length}.`;
  document.getElementById("restart-button").focus();
}

nextButton.addEventListener("click", () => {
  if (!answered) return;
  if (currentQuestion === questions.length - 1) {
    showResult();
    return;
  }
  currentQuestion += 1;
  renderQuestion();
});

document.getElementById("restart-button").addEventListener("click", startQuiz);
startQuiz();

const quizData = [
  {
    question: 'Apa yang dimaksud dengan "Data Pribadi"??',
    options: ['Informasi yang tidak penting', 
              'Informasi yang hanya digunakan untuk keperluan pribadi', 
              'Informasi yang dapat digunakan untuk mengidentifikasi atau menghubungi seseorang secara spesifik', 
              'Informasi yang hanya berlaku dalam konteks online'],
    answer: 'Informasi yang dapat digunakan untuk mengidentifikasi atau menghubungi seseorang secara spesifik',
  },
  {
    question: 'Contoh data pribadi termasuk yang mana dari berikut ini?',
    options: ['Nomor plat mobil', 
              'Nama lengkap', 
              'Nama hewan peliharaan', 
              'Warna favorit'],
    answer: 'Nama lengkap',
  },
  {
    question: 'Apa yang terjadi ketika kita gagal melindungi Data Pribadi kita?',
    options: ['Kita akan mendapat penghargaan', 
              'Orang lain dapat menggunakan identitas kita untuk tujuan tertentu', 
              'Kita akan mendapatkan perlindungan tambahan', 
              'Data pribadi kita akan terlindungi secara otomatis'],
    answer: 'Orang lain dapat menggunakan identitas kita untuk tujuan tertentu',
  },
  {
    question: 'Bagaimana orang dapat memperoleh Data Pribadi kita?',
    options: ['Dengan berbicara kepada kita langsung', 
              'Melalui proses yang sah dan legal', 
              'Dengan melakukan peretasan atau phishing', 
              'Hanya dengan berteman dengan kita di media sosial'],
    answer: 'Dengan melakukan peretasan atau phishing',
  },
  {
    question: 'Apa itu phishing?',
    options: [
      'Teknik memancing ikan',
      'Bentuk seni lukis tradisional',
      'Upaya untuk mendapatkan informasi sensitif dengan menyamar sebagai entitas tepercaya',
      'Cara memancing di laut'],
    answer: 'Upaya untuk mendapatkan informasi sensitif dengan menyamar sebagai entitas tepercaya',
  },
  {
    question: 'Cara menghindari Phishing termasuk yang mana dari berikut ini?',
    options: ['Klik setiap link yang kita terima via email', 
              'Pastikan untuk selalu membagikan informasi pribadi melalui email', 
              'Perhatikan alamat website yang mencurigakan dan jangan pernah klik link yang tidak dikenal', 
              'Bagikan password dengan siapa pun yang meminta'],
    answer: 'Perhatikan alamat website yang mencurigakan dan jangan pernah klik link yang tidak dikenal',
  },
  {
    question: 'Apa itu Quid Pro Quo?',
    options: [
      'Bahasa Latin untuk "sesuatu untuk sesuatu"',
      'Sistem pertukaran hadiah',
      'Istilah untuk perjanjian bisnis',
      'Pengorbanan tanpa imbalan',
    ],
    answer: 'Bahasa Latin untuk "sesuatu untuk sesuatu"',
  },
  {
    question: 'Apa yang dimaksud dengan Social Engineering?',
    options: ['Proses membangun jaringan sosial yang luas', 
              'Teknik membangun hubungan sosial yang sehat', 
              'Usaha untuk memanipulasi orang agar mengungkapkan informasi rahasia atau melakukan tindakan tertentu', 
              'Studi ilmiah tentang perilaku sosial manusia'],
    answer: 'Usaha untuk memanipulasi orang agar mengungkapkan informasi rahasia atau melakukan tindakan tertentu',
  },
  {
    question: 'Ciri-ciri hoax termasuk yang mana dari berikut ini?',
    options: [
      'Menyebabkan kecemasan dan kebencian',
      'Sumber berita yang jelas dan terverifikasi',
      'Tidak memengaruhi opini publik',
      'Tidak menggunakan huruf kapital atau tanda seru',
    ],
    answer: 'Menyebabkan kecemasan dan kebencian',
  },
  {
    question: 'Cara mengecek kebenaran sebuah berita hoax termasuk yang mana dari berikut ini?',
    options: ['Menyebarkan berita tersebut kepada teman-temanmu', 
              'Menggunakan Google Image untuk mencari gambar serupa', 
              'Tidak perlu memeriksa kebenaran berita', 
              'Menyimpulkan berdasarkan judul berita'],
    answer: 'Menggunakan Google Image untuk mencari gambar serupa',
  },
  {
    question: 'Apa yang dimaksud dengan perlindungan data?',
    options: ['Proses membuat cadangan data secara berkala', 
              'Upaya untuk mengamankan informasi pribadi dari akses yang tidak sah', 
              'Penyembunyian informasi dari orang lain', 
              'Tidak ada arti khusus'],
    answer: 'Upaya untuk mengamankan informasi pribadi dari akses yang tidak sah',
  },
  {
    question: 'Apa yang dimaksud dengan etiket digital?',
    options: ['Kode pakaian untuk berinteraksi online', 
              'Aturan perilaku yang berlaku di dunia digital', 
              'Bentuk seni digital', 
              'Tidak ada yang spesifik, kita bisa bertindak sebagaimana kita inginkan online'],
    answer: 'Aturan perilaku yang berlaku di dunia digital',
  },
  {
    question: 'Apa teknik yang digunakan untuk mendapatkan informasi sensitif dengan menyamar sebagai entitas tepercaya?',
    options: ['Phishing', 
              'Hacking', 
              'Social Engineering', 
              'Stalking'],
    answer: 'Phishing',
  },
  {
    question: 'Berita palsu atau disinformasi sering disebut dengan istilah apa?',
    options: ['Phishing', 
              'Hacking', 
              'Social Engineering', 
              'Hoax'],
    answer: 'Hoax',
  },
  {
    question: 'Apa istilah Latin yang berarti "sesuatu untuk sesuatu"?',
    options: ['Veni vidi vici', 
              'Ad hominem', 
              'Quid pro quo', 
              'Acta non verba'],
    answer: 'Quid pro quo',
  },
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}

function showAnswer() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'none';

  let incorrectAnswersHtml = '';
  for (let i = 0; i < incorrectAnswers.length; i++) {
    incorrectAnswersHtml += `
      <p>
        <strong>Pertanyaan:</strong> ${incorrectAnswers[i].question}<br>
        <strong>Jawabanmu:</strong> ${incorrectAnswers[i].incorrectAnswer}<br>
        <strong>Jawaban yang benar:</strong> ${incorrectAnswers[i].correctAnswer}
      </p>
    `;
  }

  resultContainer.innerHTML = `
    <p>Kau mendapat ${score} dari ${quizData.length}!</p>
    <p>Jawaban yang salah:</p>
    ${incorrectAnswersHtml}
  `;
}

submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();

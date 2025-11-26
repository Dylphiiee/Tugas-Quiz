const STORE = {
questions: {
accessibility: [
{
question: "Apa yang dimaksud dengan topologi jaringan?",
code: "",
answers: [
"Metode untuk menentukan IP address pada jaringan",
"Metode untuk merancang tata letak fisik dan logis jaringan",
"Teknik enkripsi dalam pengiriman data",
"Konsep hak akses pada jaringan"
],
correctAnswer: "Metode untuk merancang tata letak fisik dan logis jaringan"
},{
question: "Kenapa topologi star banyak digunakan?",
code: "",
answers: [
"Karena tidak membutuhkan switch",
"Karena paling murah di antara semua topologi",
"Karena mudah dikembangkan dan gangguan tidak memengaruhi seluruh jaringan",
"Karena menggunakan kabel paling sedikit"
],
correctAnswer: "Karena mudah dikembangkan dan gangguan tidak memengaruhi seluruh jaringan"
},{
question: "Apa kelemahan utama topologi bus?",
code: "",
answers: [
"Biaya instalasi tinggi",
"Jika kabel utama putus seluruh jaringan terganggu",
"Membutuhkan perangkat keras banyak",
"Tidak bisa menggunakan kabel coaxial"
],
correctAnswer: "Jika kabel utama putus seluruh jaringan terganggu"
},{
question: "Apa fungsi terminator pada topologi bus?",
code: "",
answers: [
"Mengatur IP otomatis",
"Mencegah pantulan sinyal pada kabel",
"Menghubungkan dua segmen jaringan",
"Sebagai penguat sinyal"
],
correctAnswer: "Mencegah pantulan sinyal pada kabel"
},{
question: "Apa ciri utama topologi ring?",
code: "",
answers: [
"Semua komputer terhubung ke satu pusat",
"Data mengalir satu arah atau dua arah membentuk lingkaran",
"Setiap node menjadi server",
"Setiap komputer hanya terhubung dengan router"
],
correctAnswer: "Data mengalir satu arah atau dua arah membentuk lingkaran"
}
],
arrays: [
{
question: "Topologi yang menggunakan satu kabel utama disebut…",
code: "",
answers: [
"Topologi star",
"Topologi bus",
"Topologi tree",
"Topologi mesh"
],
correctAnswer: "Topologi bus"
},{
question: "Topologi apa yang paling tahan terhadap kerusakan satu node?",
code: "",
answers: [
"Ring",
"Bus",
"Mesh",
"Star"
],
correctAnswer: "Mesh"
},{
question: "Apa nama perangkat pusat pada topologi star?",
code: "",
answers: [
"Repeater",
"Hub/Switch",
"Router",
"Access Point"
],
correctAnswer: "Hub/Switch"
},{
question: "Topologi apakah yang merupakan gabungan dari beberapa topologi star?",
code: "",
answers: [
"Mesh",
"Tree",
"Bus",
"Ring"
],
correctAnswer: "Tree"
},{
question: "Kelebihan utama topologi mesh adalah…",
code: "",
answers: [
"Murah dan mudah dipasang",
"Performa lambat tetapi stabil",
"Redundansi tinggi dan koneksi sangat andal",
"Menggunakan kabel lebih sedikit"
],
correctAnswer: "Redundansi tinggi dan koneksi sangat andal"
}
],
elements: [
{
question: "Apa yang dimaksud dengan topologi tree?",
code: "",
answers: [
"Gabungan antara mesh dan ring",
"Gabungan beberapa topologi bus",
"Gabungan antara topologi star yang bertingkat",
"Gabungan antara star dan mesh"
],
correctAnswer: "Gabungan antara topologi star yang bertingkat"
},{
question: "Topologi mana yang paling hemat kabel?",
code: "",
answers: [
"Star",
"Bus",
"Ring",
"Mesh"
],
correctAnswer: "Bus"
},{
question: "Topologi ring menggunakan perangkat apa untuk menangani token?",
code: "",
answers: [
"Repeater",
"Hub",
"NIC",
"Token passing"
],
correctAnswer: "Token passing"
},{
question: "Topologi yang cocok untuk jaringan skala besar adalah…",
code: "",
answers: [
"Ring",
"Tree",
"Star",
"Bus"
],
correctAnswer: "Tree"
},{
question: "Pada topologi star, kerusakan pada kabel ke satu komputer akan…",
code: "",
answers: [
"Memutus seluruh jaringan",
"Mengganggu hanya komputer tersebut",
"Menghapus konfigurasi jaringan",
"Mengganggu jaringan lokal lainnya"
],
correctAnswer: "Mengganggu hanya komputer tersebut"
}
],
flexbox: [
{
question: "Topologi mana yang paling mahal dalam instalasi kabel?",
code: "",
answers: [
"Bus",
"Star",
"Mesh",
"Ring"
],
correctAnswer: "Mesh"
},{
question: "Apa kekurangan topologi ring?",
code: "",
answers: [
"Perangkat harus mahal",
"Jika satu node rusak, seluruh jaringan bisa terganggu",
"Tidak bisa digunakan untuk LAN",
"Menggunakan IP statis wajib"
],
correctAnswer: "Jika satu node rusak, seluruh jaringan bisa terganggu"
},{
question: "Apa kelebihan topologi star?",
code: "",
answers: [
"Mahal dan lambat",
"Mudah ditambah komputer baru",
"Tidak butuh perangkat pusat",
"Menggunakan kabel sangat sedikit"
],
correctAnswer: "Mudah ditambah komputer baru"
},{
question: "Apa fungsi switch pada topologi star?",
code: "",
answers: [
"Mengalirkan listrik",
"Mengatur hak akses pengguna",
"Menghubungkan dan meneruskan data antar perangkat",
"Memberikan IP otomatis"
],
correctAnswer: "Menghubungkan dan meneruskan data antar perangkat"
},{
question: "Topologi yang cocok untuk jaringan dengan trafik tinggi adalah…",
code: "",
answers: [
"Bus",
"Ring",
"Mesh",
"Tree"
],
correctAnswer: "Mesh"
}
],
forms: [
{
question: "Topologi fisik mengacu pada…",
code: "",
answers: [
"Alamat IP setiap klien",
"Susunan perangkat secara nyata",
"Konsep alur data logis",
"Jumlah bandwidth"
],
correctAnswer: "Susunan perangkat secara nyata"
},{
question: "Topologi logis mengacu pada…",
code: "",
answers: [
"Cara data mengalir di jaringan",
"Cara listrik mengalir",
"Kode biner pada data",
"Tata letak perangkat fisik"
],
correctAnswer: "Cara data mengalir di jaringan"
},{
question: "Topologi apa yang paling mudah dipelihara?",
code: "",
answers: [
"Bus",
"Star",
"Ring",
"Mesh"
],
correctAnswer: "Star"
},{
question: "Topologi apa yang memiliki banyak jalur cadangan?",
code: "",
answers: [
"Star",
"Mesh",
"Bus",
"Ring"
],
correctAnswer: "Mesh"
},{
question: "Apa tujuan utama penggunaan topologi?",
code: "",
answers: [
"Menentukan alamat MAC",
"Menyederhanakan desain jaringan",
"Mengaktifkan DHCP",
"Mengamankan data"
],
correctAnswer: "Menyederhanakan desain jaringan"
}
],
loops: [
{
question: "Apa yang dimaksud dengan node pada topologi?",
code: "",
answers: [
"Perangkat jaringan seperti PC atau printer",
"Jenis kabel",
"Opsi keamanan jaringan",
"Alamat IP"
],
correctAnswer: "Perangkat jaringan seperti PC atau printer"
},{
question: "Apa itu backbone dalam topologi?",
code: "",
answers: [
"Switch tercepat",
"Kabel utama penghubung",
"Protokol keamanan",
"IP pusat"
],
correctAnswer: "Kabel utama penghubung"
},{
question: "Perangkat utama pada topologi bus adalah…",
code: "",
answers: [
"Hub",
"Coaxial cable",
"Router",
"Repeater"
],
correctAnswer: "Coaxial cable"
},{
question: "Topologi ring modern biasanya bekerja dengan…",
code: "",
answers: [
"Token passing",
"TDM",
"CSMA/CD",
"Polling"
],
correctAnswer: "Token passing"
},{
question: "Topologi apa yang memiliki bentuk seperti pohon bercabang?",
code: "",
answers: [
"Star",
"Mesh",
"Tree",
"Bus"
],
correctAnswer: "Tree"
}
],
methods: [
{
question: "Topologi yang membutuhkan kabel paling banyak adalah…",
code: "",
answers: [
"Bus",
"Star",
"Ring",
"Mesh"
],
correctAnswer: "Mesh"
},{
question: "Topologi mana yang paling mudah dikembangkan?",
code: "",
answers: [
"Ring",
"Star",
"Bus",
"Mesh"
],
correctAnswer: "Star"
},{
question: "Pada topologi bus, tipe kabel yang biasa digunakan adalah…",
code: "",
answers: [
"Fiber optic",
"Coaxial",
"UTP Cat 7",
"HDMI"
],
correctAnswer: "Coaxial"
},{
question: "Topologi ring awalnya digunakan pada teknologi…",
code: "",
answers: [
"Fiber ring",
"Token ring",
"Full duplex ring",
"Passive ring"
],
correctAnswer: "Token ring"
},{
question: "Gabungan antara mesh dan star adalah…",
code: "",
answers: [
"Tree",
"Hybrid",
"Bus",
"Ring"
],
correctAnswer: "Hybrid"
}
],
CSS: [
{
question: "Topologi yang memiliki koneksi titik-ke-titik penuh adalah…",
code: "",
answers: [
"Ring",
"Mesh",
"Star",
"Bus"
],
correctAnswer: "Mesh"
},{
question: "Topologi mana yang menggunakan satu pusat kendali?",
code: "",
answers: [
"Mesh",
"Star",
"Ring",
"Bus"
],
correctAnswer: "Star"
},{
question: "Topologi bus menggunakan konektor…",
code: "",
answers: [
"RJ45",
"BNC",
"SC/APC",
"ST"
],
correctAnswer: "BNC"
},{
question: "Apa kekurangan topologi tree?",
code: "",
answers: [
"Sangat sulit diperluas",
"Satu kabel putus langsung memutus semua",
"Jika node tingkat atas rusak, segmen di bawahnya terganggu",
"Tidak mendukung banyak node"
],
correctAnswer: "Jika node tingkat atas rusak, segmen di bawahnya terganggu"
},{
question: "Topologi manakah yang paling rentan terhadap collision?",
code: "",
answers: [
"Bus",
"Star",
"Ring",
"Mesh"
],
correctAnswer: "Bus"
}
],
conditionals: [
{
question: "Topologi apa yang paling sering digunakan di sekolah atau kantor?",
code: "",
answers: [
"Bus",
"Star",
"Ring",
"Mesh"
],
correctAnswer: "Star"
},{
question: "Jika sebuah jaringan membutuhkan redundansi sangat tinggi, topologi apa yang dipilih?",
code: "",
answers: [
"Bus",
"Star",
"Mesh",
"Ring"
],
correctAnswer: "Mesh"
},{
question: "Topologi bus memiliki kelemahan…",
code: "",
answers: [
"Kabel paling banyak",
"Koneksi paling lambat saat banyak pengguna",
"Mahal",
"Tidak mendukung perangkat switch"
],
correctAnswer: "Koneksi paling lambat saat banyak pengguna"
},{
question: "Topologi ring mengalirkan data…",
code: "",
answers: [
"Hanya secara acak",
"Secara berurutan melalui setiap node",
"Langsung ke server pusat",
"Hanya ke node yang dipilih"
],
correctAnswer: "Secara berurutan melalui setiap node"
},{
question: "Topologi apa yang paling tepat untuk jaringan kecil rumahan?",
code: "",
answers: [
"Bus",
"Ring",
"Mesh",
"Star"
],
correctAnswer: "Star"
}
],
objects: [
{
question: "Pada topologi star, perangkat yang bertindak sebagai pusat adalah…",
code: "",
answers: [
"Repeater",
"Switch",
"Router",
"Bridge"
],
correctAnswer: "Switch"
},{
question: "Topologi mesh sering digunakan pada…",
code: "",
answers: [
"Jaringan kecil",
"Jaringan dengan keandalan sangat tinggi",
"Jaringan kelas rumah",
"Perangkat IoT"
],
correctAnswer: "Jaringan dengan keandalan sangat tinggi"
},{
question: "Topologi tree adalah kombinasi dari…",
code: "",
answers: [
"Star dan bus",
"Mesh dan ring",
"Ring dan bus",
"Mesh dan tree"
],
correctAnswer: "Star dan bus"
},{
question: "Pada topologi ring, setiap komputer terhubung ke…",
code: "",
answers: [
"Router",
"Dua komputer lainnya",
"Switch pusat",
"Semua komputer sekaligus"
],
correctAnswer: "Dua komputer lainnya"
},{
question: "Topologi manakah yang menyediakan jalur alternatif untuk setiap pasangan node?",
code: "",
answers: [
"Star",
"Ring",
"Mesh",
"Bus"
],
correctAnswer: "Mesh"
}
]
}
};


function makeQuiz(){
	return {
		questions: helpers.getRandomQuestions(STORE),
		midQuiz: false,
		progress: {
			progressBar: [],
			incorrectCategories: []
		},
		completed: false,

		currentQuestion: 0,
		correctAnswers: 0,
		currentAnswer: "",
		percCorrect: 0
	}
}

function $fade(appState){
	if(appState.completed){
		$.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
			.done(function(){

				$showResults(appState);
				$('.results-wrapper').hide().removeClass('hide');
				$('.question-answer-wrapper, .results-wrapper').fadeIn(500);
	    });

	} else if(appState.midQuiz === false){
		appState.midQuiz = true;
		$.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
			.done(function(){
				helpers.updateProgressBar(appState);
				$('.progress-count').html('1 / 10');
				$('.progress-perc').html('');
				$('.failures').remove();
				$updateQuestion(appState);
				$('progress-bar').empty();
				$('progress-fill').html('Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>');
				$('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
				$('.submit-btn, .progress, .progress-bar').removeClass('hide');
				$('.progress, .progress-bar').hide();
				$('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
				if(!$('.code').hasClass('hide')){$('.code').fadeIn(500)};
	    });

	} else if(appState.midQuiz){
		$.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
			.done(function(){
				$updateQuestion(appState);
				$('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
	    });
	}
}

function $showResults(appState){
	if(appState.correctAnswers === 10){
		let endMsg = `Kamu benar ${appState.percCorrect}%`
	} else {
		$('.answer-btn').remove();
		let endMsg = `Kamu benar ${appState.percCorrect}%`
		let endFeedback = ``;
		if(appState.progress.incorrectCategories.length === 0){
			endFeedback = `Kamu hebat! Lanjutkan..`;
		} else {
			endFeedback = `Ayo belajar lebih baik lagi..`;
		}
		
		$('.quiz-end-score').html(endMsg);
		let $failList = $('<ul class="failures"></ul>');
		appState.progress.incorrectCategories.map((cat => {
		}));
		$('.quiz-end-feedback-p').html(endFeedback);
		$('.quiz-end-categories').append($failList);
		$('.results-wrapper').removeClass('hide').css('display', 'flex');
		$('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);		
	}

}

function $updateQuestion(appState){
	$('.answer-btn').remove();

	$('.question').html(appState.questions[appState.currentQuestion].question);

	if(appState.questions[appState.currentQuestion].code == ``){
		$('.code').addClass('hide');
	} else {
		$('.code').removeClass('hide');
		$('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
	}
	
	$('.continue-btn')
		.val("Jawab")
		.removeClass('continue-btn')
		.addClass('submit-btn')
		.prop('disabled', true);


	let $answers = [];


	for(let i=0; i<appState.questions[appState.currentQuestion].answers.length; i++){


		let $answer = $('<button class="answer-btn" type="button"></button>');
		$answer.html(appState.questions[appState.currentQuestion].answers[i]);
		$answers.push($answer);
	}

	helpers.shuffleAnswers($answers)

	$answers.forEach((answer) => {
		$('.answer-wrapper').prepend(answer);
	});
}

function selectAnswer(answer){
	$('.answer-btn').removeClass('selected');
	answer.addClass('selected');
	$('.submit-btn').prop('disabled', false);
}

function submitAnswer(appState){
	let correct;
	$('.answer-btn').each(function () {
		if($(this).html() === appState.questions[appState.currentQuestion].correctAnswer){
			$(this).addClass('pass');
			if($(this).hasClass('selected')){
				correct = "pass";
				appState.correctAnswers++;
				appState.questions[appState.currentQuestion];
			}

		} else if ($(this).hasClass('selected')){
			$(this).addClass('fail dim-answer');
			correct = "fail";
			appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);

		} else {
			$(this).addClass('dim-answer');
		}
	});

	appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);
	
	appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();

	$('.progress-count').html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`);

	$('.progress-perc').html(`
		 // ${(appState.percCorrect)}% Correct
	`)

	$('.submit-btn')
		.val("Lanjutkan")
		.removeClass('submit-btn')
		.addClass('continue-btn')

	$('.answer-btn').prop("disabled", true);

	helpers.updateProgressBar(appState);
	appState.currentQuestion++;
	if(appState.currentQuestion === appState.questions.length){
		appState.completed = true;
	}
	
}

function killQuiz(){
	$('.start-quiz, .quit-quiz').hide();
	let failureMsg = "You didn't grow. You didn't improve. You took a shortcut and gained nothing. You experienced a hollow victory. Nothing was risked and nothing was gained. It's sad you don't know the difference..."
	let msgSplit = failureMsg.split(" ");
	let counter = 0;
	$('.question').empty();
	let startTroll = setInterval(function () {
		$('.question').append(msgSplit[counter] + " ");
		counter++;
		if(counter > msgSplit.length - 1){
  			clearInterval(startTroll);
  			$('.start-quiz').text('You can do it! Start Quiz').fadeIn(500);
		}
	}, 250);
}
let helpers = {
	pickRandomQ: function(obj,section){
		return Math.floor(Math.random() * obj.questions[section].length);		
	},
	getRandomQuestions: function(obj){
		let questions = [];
		let categories = Object.keys(obj.questions);
		categories.forEach((cat) => {
			let randomQ = this.pickRandomQ(obj,cat);
			let question = obj.questions[cat][randomQ];
			question.category = cat;
			questions.push(question);
		});
		return questions;
	},
	shuffleAnswers: function(arr){
	    for (var i = arr.length - 1; i > 0; i--) {
	        var j = Math.floor(Math.random() * (i + 1));
	        var temp = arr[i];
	        arr[i] = arr[j];
	        arr[j] = temp;
	    }
	},
	updateProgressBar: function(appState){
		$('.progress-bar').empty();
		appState.progress.progressBar.forEach((progInd => {
			$('.progress-bar').append(progInd);
		}))
	}
}

$(function(){

	$('.answer-wrapper').on('submit', function(e){
		e.preventDefault();
	});

	let quizData;
	$('.start-quiz, .retry-btn').on('click', function(){
		quizData = makeQuiz();
		$fade(quizData);
	});

	$('.question-answer-wrapper').on('click', '.answer-btn', function(){
		selectAnswer($(this));
	})

	$('.question-answer-wrapper').on('click', '.submit-btn', function(e){
		submitAnswer(quizData);
	});

	$('.question-answer-wrapper').on('click', '.continue-btn', function(){
		$fade(quizData);
	});

	$('.quit-quiz').on('click', function(){
		killQuiz();
	})
})

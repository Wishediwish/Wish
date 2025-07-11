
const scenes = [
  {
    id: 1,
    background: "backgrounds/waterfall.jpg",
    text: "Итами просыпайся! Итамиии... ты впорядке?",
    options: [
      { text: "Ты слышишь чей-то голос — Проснуться", nextScene: 11 }
    ]
  },
  {
    id: 11,
    background: "backgrounds/waterfall.jpg",
    text: "Хух, я волновался что уже не получилось. Добро пожаловать! Нам предстоит пройти небольшое приключение и отыскать кое-что оставленное тебе в этом месте.",
    options: [
      { text: "Осмотреться вокруг", nextScene: 12 }
    ]
  },
  {
    id: 12,
    background: "backgrounds/waterfall.jpg",
    text: "Сейчас мы у Водопада Очищения. Это место служит защитной стеной. Пройти можно только сквозь него. Всё, что недостойно, будет смыто потоком. Когда-то это была просто тропа. Нужно спешить!",
    options: [
      { text: "Проследовать за духом сквозь водопад", nextScene: 2 }
    ]
  },
  {
    id: 2,
    background: "backgrounds/starfield.jpg",
    text: "Место, где мысли и мечты отображаются в виде звёзд. Говорят, если коснуться отражения звезды на воде — можно понять, что она значит. Видишь тот замок? Мы направляемся туда. Хочешь попробовать коснуться звезды или продолжим путь?",
    options: [
      { text: "Ступить на воду и попытаться коснуться звезды", nextScene: 21 },
      { text: "Следовать дальше к замку", nextScene: 22 }
    ]
  },
  {
    id: 21,
    background: "backgrounds/starfield.jpg",
    text: "Ступив на воду, ты понимаешь — она держит тебя. Ты дотрагиваешься до отражения звезды... Это звезда отображает искреннее желание Вишеда прожить всю жизнь с человеком по имени Итами. Звезда загорается и улетает.",
    options: [
      { text: "Следовать дальше к замку", nextScene: 22 }
    ]
  },
  {
    id: 22,
    background: "backgrounds/starfield.jpg",
    text: "Удивительно... Похоже, это была твоя звезда. Но у нас мало времени — пойдём дальше.",
    options: [
      { text: "Следовать в Зал Испытаний", nextScene: 3 }
    ]
  },
  {
    id: 3,
    background: "backgrounds/trialhall.jpg",
    text: "Большой зал с множеством испытаний. Нельзя пройти дальше, не пройдя испытание.",
    options: [
      { text: "Узнать своё испытание", nextScene: 31 }
    ]
  },
  {
    id: 31,
    background: "backgrounds/trialhall.jpg",
    text: "Твоё испытание — знание. Ответь на 4 вопроса, чтобы пройти дальше.",
    options: [
      { text: "Я готова, начинаем!", nextScene: 32 }
    ]
  },
  {
    id: 32,
    background: "backgrounds/trialhall.jpg",
    quiz: {
      question: "В каком игровом мире зародилось начало начал самого дорогого, что есть у Вишеда?",
      options: ["Black desert", "Throne and Liberty", "World of Warcraft", "Rust"],
      correct: "Throne and Liberty",
      nextScene: 33
    }
  },
  {
    id: 33,
    background: "backgrounds/trialhall.jpg",
    quiz: {
      question: "Число, что стало причиной волнений, но дало толчок к невероятному?",
      options: ["69", "8.5", "520", "13"],
      correct: "8.5",
      nextScene: 34
    }
  },
  {
    id: 34,
    background: "backgrounds/trialhall.jpg",
    quiz: {
      question: "Смертельная битва... Современный + не горбатый, не рогатый, он бесстрашный терминатор. Руки словно +, ногти словно +. Хватка +. + + бессмертный бой.",
      options: ["Гладиатор, Биты, Бритвы, Тигра, Гладиатор", "Воин, Камни, Лезвия, Дракон, Воин"],
      correct: "Гладиатор, Биты, Бритвы, Тигра, Гладиатор",
      nextScene: 35
    }
  },
  {
    id: 35,
    background: "backgrounds/trialhall.jpg",
    quiz: {
      question: "Какое мифическое существо почувствует особую энергию к Вишеду?",
      options: ["Дракон", "Русалка", "Единорог", "Грифон"],
      correct: "Единорог",
      nextScene: 36
    }
  },
  {
    id: 36,
    background: "backgrounds/trialhall.jpg",
    text: "Не сомневался в тебе ни на секунду! Путь открыт.",
    options: [
      { text: "Проследовать за духом", nextScene: 4 }
    ]
  },
  {
    id: 4,
    background: "backgrounds/firehall.jpg",
    text: "Место, где положительные эмоции принимают форму огня. Чем сильнее чувства — тем ярче пламя. В центре — огромное пламя. Оно не ранит. Оно греет.",
    options: [
      { text: "Прикоснуться к самому большому пламени", nextScene: 41 },
      { text: "Пройти дальше в поисках пути", nextScene: 42 }
    ]
  },
  {
    id: 41,
    background: "backgrounds/firehall.jpg",
    text: "Ты чувствуешь, что это пламя — любовь Вишеда. Он хочет отдать тебе всю свою жизнь.",
    options: [
      { text: "Пройти дальше", nextScene: 42 }
    ]
  },
  {
    id: 42,
    background: "backgrounds/firehall.jpg",
    text: "Осталось одно место… Не самое любимое, но важное.",
    options: [
      { text: "Войти в Тропу Сомнений", nextScene: 5 }
    ]
  },
  {
    id: 5,
    background: "backgrounds/mistyforest.jpg",
    text: "Это место наполнено туманом и силуэтами. Эмоции — страхи, тревоги, сомнения. Но духи не трогают тебя.",
    options: [
      { text: "Пройти свой путь по тропе", nextScene: 51 }
    ]
  },
  {
    id: 51,
    background: "backgrounds/mistyforest.jpg",
    text: "Духи смотрят молча или исчезают. Впереди Animae. Рядом спящий силуэт.",
    options: [
      { text: "Коснуться спящего силуэта", nextScene: 52 },
      { text: "Пройти в Animae", nextScene: 6 }
    ]
  },
  {
    id: 52,
    background: "backgrounds/mistyforest.jpg",
    text: "Это страх Вишеда потерять Итами. Он спит.",
    options: [
      { text: "Пройти в Animae", nextScene: 6 }
    ]
  },
  {
    id: 6,
    background: "backgrounds/animae.jpg",
    text: "Здесь я должен вернуться на своё место. Спасибо тебе.",
    options: [
      { text: "Исследовать это странное место…", nextScene: 61 }
    ]
  },
  {
    id: 61,
    background: "backgrounds/animae.jpg",
    text: "Спокойное место. Стол. Коробка без замков.",
    options: [
      { text: "Взять коробку", nextScene: 62 }
    ]
  },
  {
    id: 62,
    background: "backgrounds/animae.jpg",
    text: "Под ней записка. В ней — признание и часть души Вишеда.",
    options: [
      { text: "Прочесть записку", nextScene: 63 }
    ]
  },
  {
    id: 63,
    background: "backgrounds/animae.jpg",
    text: "Любимая Итами... Сегодня твой День рождения. Возможно, этот подарок не ценен материально, но это часть моей души, чтобы быть рядом, пока мы не вместе. Я люблю тебя.",
    options: [
      { text: "Вернуться на Тропу Сомнений", nextScene: 7 }
    ]
  },
  {
    id: 7,
    background: "backgrounds/cleartreepath.jpg",
    text: "Ты снова в Тропе Сомнений. Но здесь больше нет тумана. Духов почти нет. Они больше не нужны.",
    options: [
      { text: "Пройти по тропе к выходу", nextScene: 71 }
    ]
  },
  {
    id: 71,
    background: "backgrounds/cleartreepath.jpg",
    text: "Ты просыпаешься в своей кровати. Рядом с тобой — та самая коробка.",
    options: []
  }
];

let currentScene = 1;

function showScene(id) {
  const scene = scenes.find(s => s.id === id);
  if (!scene) return;
  document.body.style.backgroundImage = `url('${scene.background}')`;
  const container = document.createElement('div');
  container.className = 'screen active';
  const wrap = document.createElement('div');
  wrap.className = 'container';
  const text = document.createElement('p');
  text.innerText = scene.text;
  wrap.appendChild(text);

  if (scene.quiz) {
    const quiz = document.createElement('div');
    quiz.className = 'quiz';
    const q = document.createElement('p');
    q.innerText = scene.quiz.question;
    quiz.appendChild(q);
    scene.quiz.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.textContent = opt;
      btn.onclick = () => {
        if (opt === scene.quiz.correct) {
          document.body.innerHTML = '';
          showScene(scene.quiz.nextScene);
        } else {
          alert("Неверно. Попробуй ещё раз.");
        }
      };
      quiz.appendChild(btn);
    });
    wrap.appendChild(quiz);
  } else if (scene.options) {
    scene.options.forEach(opt => {
      const btn = document.createElement('button');
      btn.innerText = opt.text;
      btn.onclick = () => {
        document.body.innerHTML = '';
        showScene(opt.nextScene);
      };
      wrap.appendChild(btn);
    });
  }

  container.appendChild(wrap);
  document.body.appendChild(container);
}

window.onload = () => {
  showScene(currentScene);
};

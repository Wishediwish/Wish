window.scenes = [
  {
    id: 1,
    title: "Водопад Очищения",
    background: "backgrounds/waterfall.jpg",
    messages: [
      "Итами просыпайся! Итамиии... ты в порядке?",
      "Хух, я волновался что уже не получилось. Добро пожаловать. Нам с тобой предстоит пройти небольшое приключение и отыскать кое-что, оставленное тебе в этом месте.",
      "Сейчас мы находимся у водопада очищения. Это место служит защитной стеной, здесь нет обходных путей. Путь только один — сквозь водопад. Он не пропускает всё, что не должно пройти.",
      "Сложно поверить, но раньше его тут не было. Это была просто тропа. Нужно поторопиться, у нас не так много времени."
    ],
    actions: [
      { text: "Ты слышишь чей-то голос, кто-то зовёт тебя — Проснуться.", nextScene: 1 },
      { text: "Осмотреться вокруг.", nextScene: 1 },
      { text: "... Проследовать за духом сквозь водопад.", nextScene: 2 }
    ]
  },
  {
    id: 2,
    title: "Астрономическая Степь",
    background: "backgrounds/starfield.jpg",
    messages: [
      "Место, где мысли и мечты отображаются в виде звёзд. Считается, что если коснуться звезды на воде, можно узнать, что она значит.",
      "Видишь замок, к которому ведёт степь? Это место, куда мы с тобой направляемся. Хочешь попробовать устоять на воде и коснуться отражения звезды?"
    ],
    actions: [
      { text: "Ступить на воду и попытаться коснуться звезды.", nextScene: 21 },
      { text: "Следовать дальше по пути к Замку.", nextScene: 22 }
    ]
  },
  {
    id: 21,
    title: "Отражение Звезды",
    background: "backgrounds/starfield.jpg",
    messages: [
      "Ступив аккуратно на поверхность воды, немного пошатнувшись ты понимаешь, что вода тебя держит. Коснувшись звезды, ты понимаешь, что это искреннее желание Вишеда прожить всю жизнь с человеком по имени Итами.",
      "Звезда начинает светиться сильнее и перемещается дальше по небу.",
      "Дух: Удивительно... Пойдём дальше. В будущем ты сможешь вернуться и всё рассмотреть."
    ],
    actions: [
      { text: "Продолжить путь к замку.", nextScene: 3 }
    ]
  },
  {
    id: 22,
    title: "Следующий шаг",
    background: "backgrounds/starfield.jpg",
    messages: [
      "Дух: Удивительно, но кажется это была твоя звезда. Пойдём дальше, у нас не так много времени."
    ],
    actions: [
      { text: "Продолжить путь к замку.", nextScene: 3 }
    ]
  }

  ,
  {
    id: 3,
    title: "Зал Испытаний",
    background: "backgrounds/trialhall.jpg",
    messages: [
      "Большой зал с множеством испытаний. Нельзя пройти дальше, не пройдя своё.",
      "Похоже, тебе выпало испытание знаний. Нужно ответить на 4 вопроса."
    ],
    quiz: [
      {
        question: "Вопрос 1: В каком игровом мире зародилось начало начал самого дорогого, что есть у Вишеда?",
        options: ["Black Desert", "Throne and Liberty", "World of Warcraft", "Rust"],
        correct: 1
      },
      {
        question: "Вопрос 2: Число, что стало причиной волнений и небольшого страха, но дало толчок к невероятному...",
        options: ["69", "3", "8.5", "520"],
        correct: 2
      },
      {
        question: "Вопрос 3: Заполнить пропуски в тексте (слова по порядку)",
        options: ["Гладиатор, Биты, Бритвы, Тигра, Гладиатор"],
        correct: 0
      },
      {
        question: "Вопрос 4: Какое мифическое существо почувствует особую энергию к Вишеду?",
        options: ["Дракон", "Русалка", "Единорог", "Минотавр"],
        correct: 2
      }
    ],
    actions: [
      { text: "Проследовать за духом.", nextScene: 4 }
    ]
  },
  {
    id: 4,
    title: "Огненные Залы",
    background: "backgrounds/firehall.jpg",
    messages: [
      "Дух: Моё одно из любимых мест. Здесь положительные эмоции принимают форму огня. Чем они сильнее, тем прекраснее пламя.",
      "В центре горит самое большое — тёплое пламя, подпитывающее другие. Оно появилось не так давно... но теперь неотъемлемо."
    ],
    actions: [
      { text: "Прикоснуться к самому большому пламени рукой.", nextScene: 41 },
      { text: "Пройти дальше в поисках пути.", nextScene: 5 }
    ]
  },
  {
    id: 41,
    title: "Огонь Любви",
    background: "backgrounds/firehall.jpg",
    messages: [
      "Коснувшись пламени, ты ощущаешь, что оно — чувство Вишеда. Насколько сильно он тебя любит и хочет отдать всю жизнь тебе.",
      "Дух: Мы почти у цели. Осталось пройти одно место..."
    ],
    actions: [
      { text: "Пройти дальше в поисках пути.", nextScene: 5 }
    ]
  },
  {
    id: 5,
    title: "Тропа Сомнений",
    background: "backgrounds/mistyforest.jpg",
    messages: [
      "Дух: Это место никогда не меняется... туман, силуэты в нём — эмоции: страх, сомнения. Они нападают на тех, в ком чувствуют эти эмоции.",
      "Но они тебя не трогают. Ты можешь их касаться, смотреть, они лишь наблюдают. Впереди — Animae, рядом с силуэтом, что, кажется, спит."
    ],
    actions: [
      { text: "Пройти свой путь по тропе.", nextScene: 51 },
      { text: "Коснуться спящего силуэта.", nextScene: 52 },
      { text: "Пройти в Animae.", nextScene: 6 }
    ]
  },
  {
    id: 52,
    title: "Спящий страх",
    background: "backgrounds/mistyforest.jpg",
    messages: [
      "Коснувшись силуэта, ты чувствуешь, что это страх Вишеда потерять Итами. Он спит."
    ],
    actions: [
      { text: "Пройти в Animae.", nextScene: 6 }
    ]
  },
  {
    id: 6,
    title: "Animae",
    background: "backgrounds/animae.jpg",
    messages: [
      "Дух: Здесь я должен вернуться на своё место. Спасибо тебе. Хоть и прощаемся мы ненадолго.",
      "Спокойное, уютное место, ощущение теплоты, умиротворения. Ты слышишь зов и видишь стол.",
      "На столе коробка без замков. Прикоснувшись, ты чувствуешь тепло. Под ней — записка.",
      "Записка: Любимая Итами. Сегодня твой День рождения. Этот подарок — не материальная вещь, это фрагмент моей души. Он будет с тобой, пока мы в разлуке..."
    ],
    actions: [
      { text: "Исследовать это место...", nextScene: 61 },
      { text: "Взять коробку.", nextScene: 62 },
      { text: "Прочесть записку.", nextScene: 63 },
      { text: "Вернуться на Тропу Сомнений.", nextScene: 7 }
    ]
  },
  {
    id: 7,
    title: "Возвращение",
    background: "backgrounds/cleartreepath.jpg",
    messages: [
      "Ты видишь выход из Тропы. Здесь больше нет тумана, нет духов. Они исчезли — больше не нужны.",
      "Ты просыпаешься дома на кровати... и видишь рядом коробку."
    ],
    actions: []
  }
];

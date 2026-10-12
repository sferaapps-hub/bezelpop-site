// Bezel Pop landing: language switch + the spinning title mass.

// Set the public contact address here (it stays hidden until you do).
const CONTACT_EMAIL = 'belanvlad@gmail.com';

const I18N = {
  en: {},
  uk: {
    navGame: "Гра",
    navFeatures: "Можливості",
    navWatch: "Годинник",
    navShots: "Скріншоти",
    getApp: "Завантажити",
    eyebrow: "Яскрава головоломка для телефона й годинника",
    lead: "Крути коло, збирай кольори, лопай кулі й тримай комбо. Створено для смарт-годинників з обертовим безелем.",
    optimized: "Оптимізовано для Galaxy Watch і Wear OS",
    s1: "Ланцюжки комбо до ×8",
    s2: "Райдужна куля пасує до будь-якого кольору",
    s3: "Куля-вісімка пропалює камінь",
    s4: "Рівні швидшають, нові кольори",
    s5: "Не перетинай червону лінію!",
    howTitle: "Як грати",
    h1: "Крути",
    p1: "Повертай коло безелем на годиннику або свайпом на телефоні.",
    h2: "Збирай 3+",
    p2: "Три й більше куль одного кольору лопаються. Подвійний тап кидає кулю вниз.",
    h3: "Ланцюжки",
    p3: "Кулі без опори падають до центру й складають нові збіги: ×2, ×3, ×5, ×8.",
    specTitle: "Особливі кулі",
    rbT: "Райдужна",
    rbP: "Пасує до будь-якого кольору. Допомагає збирати великі комбо.",
    eiT: "Вісімка",
    eiP: "Спалює всі кулі, яких торкнеться, навіть камінь. Коли вона летить, безель палає.",
    stT: "Камінь",
    stP: "Кулі, що лежать задовго, кам’яніють. Розбити камінь може лише вісімка.",
    wTitle: "Створено для обертового безеля",
    wP: "Bezel Pop зроблено для Galaxy Watch і Wear OS. Повертай фізичний безель — плавно, точно й неймовірно приємно.",
    w1: "Один клік = один сектор: точне й природне керування",
    w2: "Немає безеля? Свайпни — коло акуратно стане на місце",
    w3: "Короткі раунди будь-коли, без реклами на годиннику",
    fairTitle: "Чесно і просто",
    f1T: "Безкоштовно",
    f1P: "Уся гра безкоштовна. Реклама лише між іграми на телефоні.",
    f2T: "Твій вибір",
    f2P: "Переглянь рекламу, щоб продовжити програну гру, — лише якщо хочеш.",
    f3T: "Разовий Premium",
    f3P: "Без реклами на телефоні й без обмежень на годиннику. Одна покупка для обох.",
    f4T: "Без зайвого",
    f4P: "Жодних монет і підписок. Просто гра!",
    q1: "Bezel Pop безкоштовна?",
    a1: "Так. Уся гра безкоштовна. На телефоні між іграми є реклама; разова покупка Premium її прибирає.",
    q2: "Які годинники підтримуються?",
    a2: "Wear OS 3 і новіші — наприклад, Galaxy Watch4 і новіші або Pixel Watch. На моделях Galaxy Watch Classic можна грати фізичним обертовим безелем.",
    q3: "Чи потрібен обертовий безель?",
    a3: "Ні. Коло завжди можна крутити пальцем; безель — просто найприємніший спосіб грати.",
    q4: "Premium працює і на телефоні, і на годиннику?",
    a4: "Так. Купуєш один раз із тим самим акаунтом Google: без реклами на телефоні й без обмежень на годиннику.",
    q5: "Чи працює без інтернету?",
    a5: "Так, сама гра працює офлайн. Просто реклама не завантажується без з’єднання.",
    q6: "Чи є версія для iPhone?",
    a6: "Поки ні — зараз Bezel Pop доступна для Android-телефонів і годинників Wear OS.",
    finalT: "Ще один раунд?",
    privacy: "Політика конфіденційності",
    contact: "Контакти",
    tm: "Google Play і логотип Google Play є товарними знаками Google LLC.",
  },
  ru: {
    navGame: "Игра",
    navFeatures: "Возможности",
    navWatch: "Часы",
    navShots: "Скриншоты",
    getApp: "Скачать",
    eyebrow: "Яркая головоломка для телефона и часов",
    lead: "Крути круг, собирай цвета, лопай шары и держи комбо. Создано для смарт-часов с вращающимся безелем.",
    optimized: "Оптимизировано для Galaxy Watch и Wear OS",
    s1: "Цепочки комбо до ×8",
    s2: "Радужный шар подходит к любому цвету",
    s3: "Шар-восьмёрка прожигает камень",
    s4: "Уровни ускоряются, новые цвета",
    s5: "Не пересекай красную линию!",
    howTitle: "Как играть",
    h1: "Крути",
    p1: "Поворачивай круг безелем на часах или свайпом на телефоне.",
    h2: "Собирай 3+",
    p2: "Три и больше шаров одного цвета лопаются. Двойной тап бросает шар вниз.",
    h3: "Цепочки",
    p3: "Шары без опоры падают к центру и складываются в новые совпадения: ×2, ×3, ×5, ×8.",
    specTitle: "Особые шары",
    rbT: "Радужный",
    rbP: "Подходит к любому цвету. Помогает собирать большие комбо.",
    eiT: "Восьмёрка",
    eiP: "Сжигает все шары, которых коснётся, даже камень. Когда она летит, безель горит.",
    stT: "Камень",
    stP: "Шары, которые лежат слишком долго, каменеют. Разбить камень может только восьмёрка.",
    wTitle: "Создано для вращающегося безеля",
    wP: "Bezel Pop сделан для Galaxy Watch и Wear OS. Поворачивай физический безель — плавно, точно и невероятно приятно.",
    w1: "Один щелчок = один сектор: точное и естественное управление",
    w2: "Нет безеля? Свайпни — круг аккуратно встанет на место",
    w3: "Короткие раунды в любой момент, без рекламы на часах",
    fairTitle: "Честно и просто",
    f1T: "Бесплатно",
    f1P: "Вся игра бесплатна. Реклама только между играми на телефоне.",
    f2T: "Твой выбор",
    f2P: "Посмотри рекламу, чтобы продолжить проигранную игру, — только если хочешь.",
    f3T: "Разовый Premium",
    f3P: "Без рекламы на телефоне и без ограничений на часах. Одна покупка для обоих.",
    f4T: "Без лишнего",
    f4P: "Никаких монет и подписок. Просто игра!",
    q1: "Bezel Pop бесплатная?",
    a1: "Да. Вся игра бесплатна. На телефоне между играми есть реклама; разовая покупка Premium её убирает.",
    q2: "Какие часы поддерживаются?",
    a2: "Wear OS 3 и новее — например, Galaxy Watch4 и новее или Pixel Watch. На моделях Galaxy Watch Classic можно играть физическим вращающимся безелем.",
    q3: "Нужен ли вращающийся безель?",
    a3: "Нет. Круг всегда можно крутить пальцем; безель — просто самый приятный способ играть.",
    q4: "Premium работает и на телефоне, и на часах?",
    a4: "Да. Покупаешь один раз с тем же аккаунтом Google: без рекламы на телефоне и без ограничений на часах.",
    q5: "Работает ли без интернета?",
    a5: "Да, сама игра работает офлайн. Просто реклама не загружается без соединения.",
    q6: "Есть ли версия для iPhone?",
    a6: "Пока нет — сейчас Bezel Pop доступна для Android-телефонов и часов Wear OS.",
    finalT: "Ещё один раунд?",
    privacy: "Политика конфиденциальности",
    contact: "Контакты",
    tm: "Google Play и логотип Google Play являются товарными знаками Google LLC.",
  },
};

// Official Google Play badges (Ukrainian is published as "ua").
const BADGE = (l) =>
  `https://play.google.com/intl/en_us/badges/static/images/badges/${l === 'uk' ? 'ua' : l}_badge_web_generic.png`;
for (const img of document.querySelectorAll('[data-badge]')) {
  img.addEventListener('error', () => {
    if (!img.src.includes('/en_badge')) img.src = BADGE('en');
  });
}

function safeGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
function safeSet(k, v) { try { localStorage.setItem(k, v); } catch { /* private mode */ } }

const nodes = [...document.querySelectorAll('[data-i18n]')];
const english = new Map(nodes.map((n) => [n, n.textContent]));

function setLang(lang) {
  const dict = I18N[lang] || {};
  for (const n of nodes) n.textContent = dict[n.dataset.i18n] ?? english.get(n);
  document.documentElement.lang = lang;
  for (const img of document.querySelectorAll('[data-badge]')) img.src = BADGE(lang);
  for (const a of document.querySelectorAll('[data-play]')) {
    a.href = `https://play.google.com/store/apps/details?id=com.belanvlad.bezel_pop&hl=${lang}`;
  }
  for (const b of document.querySelectorAll('[data-lang]')) {
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang));
  }
  safeSet('lang', lang);
}

// English by default for everyone; UA / RU only when the visitor picks one
// (remembered for their next visit).
function detectLang() {
  const saved = safeGet('lang');
  return saved && I18N[saved] ? saved : 'en';
}

document.querySelectorAll('[data-lang]').forEach((b) =>
  b.addEventListener('click', () => setLang(b.dataset.lang)));
setLang(detectLang());

if (CONTACT_EMAIL) {
  const c = document.querySelector('[data-contact]');
  c.href = `mailto:${CONTACT_EMAIL}`;
  c.hidden = false;
}

const body = document.querySelector('body'),
    books = body.querySelectorAll('.book'),
    nameBookThree = books[4].querySelector('a'),
    chaptersTwoBook = books[0].querySelectorAll('li'),
    adv = body.querySelector('.adv'),
    chaptersSixBook = books[2].querySelector('ul'),
    eightLi = document.createElement('li'),
    eightChaptersSixBook = chaptersSixBook.appendChild(eightLi),
    chaptersFiveBook = books[5].querySelectorAll('li');

books[0].before(books[1]);
books[5].after(books[2]);
books[4].after(books[3]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

nameBookThree.textContent = "Книга 3. this и Прототипы Объектов";

adv.remove();

chaptersTwoBook[3].after(chaptersTwoBook[6]);
chaptersTwoBook[6].after(chaptersTwoBook[8]);
chaptersTwoBook[9].after(chaptersTwoBook[2]);

eightChaptersSixBook.textContent = 'Глава 8: За пределами ES6';

chaptersFiveBook[1].after(chaptersFiveBook[9]);
chaptersFiveBook[4].after(chaptersFiveBook[2]);
chaptersFiveBook[7].after(chaptersFiveBook[5]);


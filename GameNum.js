  // Компьютер 1 загадывает число
  const secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log("Компьютер 1 загадал число:", secretNumber);

  // Компьютер 2 начинает угадывать
  let low = 1;
  let high = 100;
  let guess;
  let attempts = 0;

  while (true) {
    attempts++;
    guess = Math.floor((low + high) / 2); // Бинарный поиск: берем середину диапазона

    console.log("Компьютер 2: Пробую число", guess + ".");

    if (guess === secretNumber) {
      console.log("Компьютер 1: Угадал!");
      console.log("Компьютер 2 угадал число за " + attempts + " попыток.");
      break;
    } else if (guess < secretNumber) {
      console.log("Компьютер 1: Больше.");
      low = guess + 1; // Обновляем нижнюю границу диапазона
    } else {
      console.log("Компьютер 1: Меньше.");
      high = guess - 1; // Обновляем верхнюю границу диапазона
    }

    // Для отладки, можно выводить текущий диапазон
    // console.log("Текущий диапазон:", low, "-", high);

    // Добавляем проверку, чтобы избежать бесконечного цикла, если что-то пошло не так
    if (low > high) {
      console.log("Компьютер 2: Что-то пошло не так. Невозможно угадать число.");
      break;
    }
  }
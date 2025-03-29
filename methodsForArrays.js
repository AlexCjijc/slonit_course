// Кастомная реализация метода slice
function mySlice(arr, start = 0, end = arr.length) {
    // Если start отрицательный, начинаем отсчет с конца массива
    if (start < 0) {
        start = Math.max(arr.length + start, 0);
    }
    // Если end отрицательный, тоже начинаем отсчет с конца массива
    if (end < 0) {
        end = Math.max(arr.length + end, 0);
    }

    // Создаем новый массив для хранения результата
    const result = [];
    for (let i = start; i < end && i < arr.length; i++) {
        result.push(arr[i]);
    }
    return result;
}

// Кастомная реализация метода indexOf
function myIndexOf(arr, item, from = 0) {
    // Если from отрицательный, начинаем отсчет с конца массива
    if (from < 0) {
        from = arr.length + from;
    }
    for (let i = from; i < arr.length; i++) {
        // Если элемент найден, возвращаем его индекс
        if (arr[i] === item) {
            return i;
        }
    }
    // Если элемент не найден, возвращаем -1
    return -1;
}

// Кастомная реализация метода includes
function myIncludes(arr, item, from = 0) {
    // Используем myIndexOf для проверки существования элемента
    return myIndexOf(arr, item, from) !== -1;

}

// Примеры использования
const arr = [1, 2, 3, 4, 5];
console.log(mySlice(arr, 1, 3)); // [2, 3]
console.log(myIndexOf(arr, 3)); // 2
console.log(myIncludes(arr, 3)); // true
console.log(myIncludes(arr, 6)); // false


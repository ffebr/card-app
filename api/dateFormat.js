export const formatDate = (dateString) => {
    const dateObject = new Date(dateString);

    // Получаем день, месяц и год из объекта даты
    const day = dateObject.getDate();
    const month = dateObject.getMonth() + 1; // Месяц начинается с 0, поэтому добавляем 1
    const year = dateObject.getFullYear();

    // Форматируем день и месяц с ведущими нулями, если они меньше 10
    const formattedDay = day < 10 ? '0' + day : day;
    const formattedMonth = month < 10 ? '0' + month : month;

    // Формируем строку в формате "дд.мм.гггг"
    const formattedDateString = `${formattedDay}.${formattedMonth}.${year}`;

    return formattedDateString;
}
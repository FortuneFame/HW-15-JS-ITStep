class MyString extends String {
    remove(index) {
        if (typeof index !== 'number' || index < 0 || index >= this.length) {
            return this.toString();
        }
        return this.slice(0, index) + this.slice(index + 1);
    };
    
    insert(index, sign) {
        if (index < 0) {
            return sign + this.toString();
        }
        return index >= this.length ? this.toString() + sign : this.slice(0, index) + sign + this.slice(index + 1);
    };

    trimSign() {
        return this.split('').reduce((result, char) => {
            if (char !== result.slice(-1)) {
                result += char;
            }
            return result;
        }, '');
    };
    
    toggle() {
        return this.split('').map(c => c >= 'a' && c <= 'z' ? c.toUpperCase() : c.toLowerCase()).join('');
    };

    counter(sign) {
        return this.split('').reduce((count, char) => char === sign ? count + 1 : count, 0);
    };
};

class MyDate extends Date {
    constructor(day, month, year) {
        super(year, month - 1, day);
    };
    showDate() {
        const first = ["", "Первое", "Второе", "Третье", "Четвёртое", "Пятое", "Шестое", "Седьмое", "Восьмое", "Девятое"];
        const second = ["Десятое", "Одиннадцатое", "Двенадцатое", "Тринадцатое", "Четырнадцатое", "Пятнадцатое", "Шестнадцатое", "Семнадцатое", "Восемнадцать", "Девятнадцать"];
        const decimal = ["", "", "Двадцать", "Тридцать"];
        const third = ["", "", "Двадцатое", "Тридцатое"];
        const month = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
        
        let result = '';

        if (this.getDate() < 10) result = first[this.getDate()];
        else if (this.getDate() >= 10 && this.getDate() < 20) result = second[this.getDate() - 10];
        else if ((this.getDate() == 20) || (this.getDate() == 30)) result = third[this.getDate() / 10];
        else {
            let firstNum = this.getDate() % 10;
            let decimalNum = (this.getDate() - this.getDate() % 10) / 10;
            result = decimal[decimalNum] + ' ' + first[firstNum];
        };

        result += ' ' + month[this.getMonth()];
        return result;
    };

    isFuture() {
        const today = new Date();
        if (this < today) return false;
        else return true;
    };

    isLeapYear() {
        const leap = ((this.getFullYear() % 400 == 0) || ((this.getFullYear() % 4 == 0) && (this.getFullYear() % 100 != 0))) ? true : false;
        return leap;
    };

    nextDay() {
        const next = new Date(Date.parse(this) + 24 * 60 * 60 * 1000);
        const nextDay = next.getDate();
        const nextMonth = next.getMonth() + 1;
        const nextYear = next.getFullYear();
        const isLeapYear = this.isLeapYear()
        if (nextMonth === 2 && nextDay === 29 && !isLeapYear) {
            nextDay = 1;
            nextMonth = 3;
        }
        return `${nextDay}/${nextMonth}/${nextYear}`;
    };
};


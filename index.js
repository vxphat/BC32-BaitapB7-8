let numbers = [1, 5, -2, 4, 8, 10];

// Bài 1: Tổng các số dương có trong mảng
function b1() {
    let total = numbers.reduce((total, value, index) => {
        return value > 0 ? total + value : total;
    }, 0);
    console.log("1. Tổng các số dương trong mảng: " + total);
}
b1();

// Bài 2: Đếm các số dương có trong mảng
function b2() {
    let numberOf = numbers.reduce((count, value, index) => {
        return value > 0 ? count + 1 : count;
    }, 0)
    console.log("2. Số lượng các số dương có trong mảng: " + numberOf);
}
b2();

//Bài 3: Tìm số nhỏ nhất trong mảng
function b3() {
    let minNum = numbers.reduce((min, value, index) => {
        return min < value ? min : value;
    }, 0)
    console.log("3. Số nhỏ nhất trong mảng là: " + minNum);
}
b3();

//Bài 4: Tìm số dương nhỏ nhất trong mảng
function b4() {
    let minOf = numbers.reduce((minOf, value, index) => {
        return minOf < value && minOf > 0 ? minOf : value;
    }, 0)
    console.log("4. Số dương nhỏ nhất trong mảng là: " + minOf);
}
b4();

//Bài 5: Tìm số chẵn cuối cùng trong mảng
function soChan(n) {
    let soChan = 0;

    if (n % 2 === 0) {
        soChan = 1;
    }
    return soChan;
}

function b5(array) {
    for (let i = numbers.length - 1; i >= 0; i--) {
        if (soChan(numbers[i]) === 1) return numbers[i];
    }
}

console.log("5. Số chẵn cuối cùng trong mảng là: " + b5());

// Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí


// Bài 7: Sắp xếp mảng theo giá trị tăng dần

function b7() {
    let sort = numbers.sort((a, b) => a - b);
    console.log("7. Thứ tự tăng dần: " + sort);
}
b7();

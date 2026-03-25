/**
 * PROJECT: 40 JavaScript Logic Challenges
 * GOAL: Backend Developer Logic Training
 * AUTHOR: [اسمك هنا]
 */

// ==========================================
// المجموعة الأولى: العمليات الحسابية والـ Modulus (1 - 10)
// ==========================================

// المسألة 1-5: باقي القسمة (Even/Odd)
let num1 = 10;
if (num1 % 2 === 0) {
    console.log("الرقم زوجي");
} else {
    console.log("الرقم فردي");
}

// المسألة 6-10: حساب الخصومات البسيطة
let price = 100;
let discount = 10;
let finalPrice = price - (price * (discount / 100));
console.log("السعر بعد الخصم: " + finalPrice);

// ==========================================
// المجموعة الثانية: الشروط المركبة والمنطق (11 - 25)
// ==========================================

// المسألة 11-15: التحقق من الصلاحيات (Logical Operators)
let userAge = 20;
let hasId = true;
if (userAge >= 18 && hasId) {
    console.log("مسموح بالدخول");
}

// المسألة 16-20: شروط متداخلة (Nested If)
let grade = 85;
if (grade >= 90) { console.log("Excellent"); }
else if (grade >= 80) { console.log("Very Good"); }
else { console.log("Good"); }

// المسألة 21-25: التحقق من النصوص (String Check)
let userName = "Omar";
if (userName === "Omar") {
    console.log("Welcome Engineer Omar");
}

// ==========================================
// المجموعة الثالثة: القوائم والحلقات التكرارية (26 - 40)
// وهي الأهم لمستقبلك في الـ Backend
// ==========================================

// المسألة 26-30: إنشاء المصفوفات والوصول للعناصر
let myTools = ["VS Code", "Node.js", "Python"];
console.log("أهم أداة: " + myTools[0]);

// المسألة 31: الحلقة العكسية (Reverse Loop)
let items = ["A", "B", "C", "D"];
for (let i = items.length - 1; i >= 0; i--) {
    console.log("Reverse: " + items[i]);
}

// المسألة 32: تصفية القوائم (Filtering)
let scores = [40, 60, 30, 90, 100];
let passedScores = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 50) {
        passedScores.push(scores[i]);
    }
}
console.log("الدرجات الناجحة: " + passedScores);

// المسألة 33: التعديل الجماعي (Transformation)
let oldPrices = [100, 200, 300];
let newPrices = [];
for (let i = 0; i < oldPrices.length; i++) {
    newPrices.push(oldPrices[i] * 1.1); // إضافة ضريبة 10%
}

// المسألة 34: البحث السريع (Break Statement)
let fruits = ["Apple", "Banana", "Orange"];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === "Banana") {
        console.log("Found Banana at: " + i);
        break;
    }
}

// المسألة 35 + 37: إدارة الحالة (Flag Variable)
let inventory = ["Laptop", "Mouse", "Keyboard"];
let itemIndex = -1;
for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === "Laptop") {
        itemIndex = i;
        break;
    }
}

// المسألة 36: العداد (Counter)
let orders = ["Pizza", "Burger", "Pizza", "Pasta"];
let pizzaCount = 0;
for (let i = 0; i < orders.length; i++) {
    if (orders[i] === "Pizza") { pizzaCount++; }
}

// المسألة 38: القائمة السوداء (Blacklist Filter)
let bannedWords = ["spam", "bad", "fake"];
let word = "bad";
let isBanned = false;
for (let i = 0; i < bannedWords.length; i++) {
    if (word === bannedWords[i]) {
        isBanned = true;
        break;
    }
}
if (isBanned) console.log("Blocked!");

// المسألة 39: الجمع التراكمي (Summation)
let cart = [10, 20, 30];
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total += cart[i];
}
console.log("إجمالي السلة: " + total);

// المسألة 40: التحقق من كمال البيانات (Validation)
let userData = ["Omar", "omar@email.com", ""]; // الحقل الثالث فارغ
let isComplete = true;
for (let i = 0; i < userData.length; i++) {
    if (userData[i] === "") {
        isComplete = false;
        break;
    }
}
console.log("هل البيانات كاملة؟ " + isComplete);
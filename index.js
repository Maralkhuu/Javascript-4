//  const laptop = {
//     brand: "lenova",
//     ram: 16,
//     Storage: 512
//  }
//  console.log(Object.keys(laptop));

// const weather = {
//     city: "Дархан",
//     temperature: 12,
//     isSunny: true
// }
// console.log(Object.values(weather));

// const phone = {
//     brand: "Samsung",
//     model: "Galaxy",
//     storage: 256,
//     color: "Har"
// }
// console.log(Object.keys(phone).length);

// const settings = {}
// if (Object.keys(settings).length === 0) {
//     console.log("Settings is empty");
// } else {
//     console.log("Settings is not empty");
// }

// const sizes = ["s", "m", "l"]
// console.log(sizes.indexOf("xl"));

// const steps = ["Эхлэл", "Дунд", "Төгсгөл"]
// console.log(steps.reverse());

// const tags = "спорт,хөгжим,аялал"
// console.log(tags.split(","));

// const playlist = {
//   name: "Өглөө",
//   songs: ["Нар", "Салхи", "Бороо"],
// };

// console.log(
//   `${playlist.name} нэртэй жагсаалтад ${playlist.songs.length} дуу байна. Хоёр дахь дуу нь ${playlist.songs[1]}.`,
// );

// const pets = {
//     fisrtName: "Банхар",
//     type: "Нохой",
//     secondName: "Мими",
//     secondType: "Муур"
// }
// console.log("Нэр:" + pets.secondName, "Төрөл:" + pets.secondType);

// const classroom = {
//     name: "10A",
//     teacher: {
//         name: "Оюун",
//         subject: "Математик"
//     }
// }
// console.log(`${classroom.name} ангийн багш ${classroom.teacher.name}. Заадаг хичээл: ${classroom.teacher.subject} `);

// const store ={
//     branches: [ {
//         name: "Төв",
//         hours: ["09:00", "18:00"]
//     },
//      {
//         name: "Баруун",
//         hours: ["10:00", "20:00"]
//     }]
// }
// console.log(`${store.branches[1].name} салбар ${store.branches[1].hours[1]} цагт хаана.`)

// const user = {
//   email: "anu@example.com",
//   password: "pass123",
//   isBlocked: false,
// };
// enteredEmail = "anu@example.com";
// enteredPassword = "pass123";
// if (user.isBlocked === true) {
//   console.log("Хандах эрх хаагдсан");
// } else if (
//   enteredPassword === user.password &&
//   enteredEmail === user.email &&
//   user.isBlocked === false
// ) {
//   console.log("Амжилттай нэвтэрлээ");
// } else {
//   console.log(" Нууц үг буруу байна");
// }

// const user = {
//     role: "editor",
//     isActive: true,
// }
// if (user.isActive === false) {
//     console.log("Эрх идэвхгүй")
// } else if (user.role === "admin" && user.isActive === true) {
//     console.log("Бүх мэдээллийг удирдана")
// } else if (user.role === "editor" && user.isActive === true) {
//     console.log("Мэдээлэл засна")
// } else {
//     console.log("Зөвхөн мэдээлэл үзнэ")
// }

// const visitor = {
//     age: 16,
//     isStudent: true,
// }
// const ticketPrice = 12000;
// const discountPrice = 6000;
// const discountPriceFor25 = 9000;
// if (visitor.age < 12 && visitor.isStudent === true) {
//     console.log(discountPrice);

// } else if (visitor.age >= 12 && visitor.isStudent === true) {
//     console.log(discountPriceFor25);

// } else {
//     console.log(ticketPrice);

// }

// const order ={
//     subtotal: 80000,
//     coupon: "SAVE10",
//     couponUsed: false
// }
// if (order.couponUsed) {
//     console.log("Купон ашиглагдсан");
// } else if (order.coupon === "SAVE10" && order.subtotal >= 50000) {
//     order.couponUsed = true
//     console.log(order.subtotal - order.subtotal * 10 /100, order.couponUsed);

// } else {
//     console.log("Купон хэрэглэх боломжгүй");

// }

// const member = {
//     name: "Номин",
//     borrowedBooks: ["Атлас", "Нууц арал"],
//     hasOverdue: false
// }
// if (member.hasOverdue === true) {
//     console.log("дахин ном зээлүүлэхгүй");

// } else if (member.borrowedBooks.length < 3) {
//     member.borrowedBooks.push("Оддын тухай")
//     console.log(member.borrowedBooks);

// } else {
//     console.log("Зээлэх номын хязгаарт хүрсэн");

// }

// const seats = ["Сул", "Захиалсан", "Сул"]
// const selectedIndex = 2
// if (selectedIndex < 0 || selectedIndex >= seats.length) {
//     console.log("Суудлын дугаар буруу");
// } else if (seats[selectedIndex] === "Сул") {
//     seats[selectedIndex] = "Захиалсан";
//     console.log(seats);
// } else {
//     console.log("Энэ суудал захиалгатай");
// }

// const seats = ["Сул", "Сул", "Захиалсан", "Сул"];
// if (seats[0] === "Сул" && seats[1] === "Сул") {
//   seats[0] = "Захиалсан";
//   seats[1] = "Захиалсан";

//   console.log(seats);
// } else {
//   console.log("Хоёр суудлыг хамт захиалах боломжгүй");
// }

// const wareHouseA = {
//     stock: 12
// }
// const wareHouseB = {
//     stock: 5
// }
// const transferAmount = 4
// if (transferAmount > 0 && wareHouseA.stock > transferAmount) {
//     console.log(wareHouseA.stock - transferAmount, wareHouseB.stock + transferAmount);
// } else {
//     console.log("Шилжүүлэх тоо буруу");

// }

// const sender = {
//     balance: 50000
// }
// const receiver = {
//     balance: 10000
// }
// const amount = 20000
// const shimtgel = 500
// if (sender.balance > amount + shimtgel) {
//     console.log(sender.balance - (amount + shimtgel), receiver.balance + amount);

// } else {
//     console.log("uldegdel hureltsehgui");

// }

// const savings = {
//     balance: 180000,
//     goal: 200000
// }
// const deposit = 30000
// if (savings.balance + deposit > savings.goal) {
//     console.log("Зорилгодоо хүрлээ. 10000 төгрөгөөр давсан.");
// } else {
//     console.log("zorilgodoo hureegui baina");

// }

// const registration = {
//     documents: ["Иргэний үнэмлэх", "Цээж зураг"],
//     isPaid: true
// }
// if (
//     !registration.documents.includes("Иргэний үнэмлэх") ||
//     !registration.documents.includes("Цээж зураг")
// ) {
//     console.log("Баримт бичиг дутуу");
// } else if (!registration.isPaid) {
//     console.log("Төлбөр төлөөгүй");
// } else {
//     console.log("Бүртгэл баталгаажлаа");
// }

// const learner = {
//     completedCourses: ["HTML", "CSS"],
//     isActive: true
// }
// if (learner.completedCourses.length = 2 && learner.isActive === true) {
//     const canEroll = true
//     console.log(canEroll);

// } else {
//     const canEroll = false
//     console.log(canEroll);
// }

// const result = {
//     theory: 85,
//     practice: 55
// }
// if (result.practice > 60 && result.theory > 60){
//     console.log("Тэнцсэн");

// } else if (result.practice < 60 || result.theory <60) {
//     console.log("Дадлагын шалгалтыг дахин өгнө");

// } else {
//     console.log("Хоёр шалгалтыг дахин өгнө");

// }

// const players = [
//     {
//         name: "Ану",
//         score: 100,
//         time: 45
//     },
//     {
//         name: "Бат",
//         score: 100,
//         time : 42
//     }
// ]
// if (players[0].score < players[1].score) {
//     console.log("Ану яллаа");

// } else if (players[0].score > players[1].score) {
//     console.log("Бат яллаа");

// } else if (players[0].time < players[1].time) {
//     console.log("Ану яллаа");
// } else if (players[0].time > players[1].time) {
//     console.log("Бат яллаа");
// } else {
//     console.log("Тэнцээ");

// }

// const products =[
//     {
//         name: "Дэвтэр",
//         price: 3500
//     },
//     {
//         name:"Үзэг",
//         price: 2000
//     },
//     {
//         name: "Баллуур",
//         price: 1500
//     }
// ]
// if (products[0].price < products[1].price && products[0].price <products[2].price ) {
//     console.log(products[0].name);

// } else if (products[1].price < products[0].price && products[1].price <products[2].price ) {
//     console.log(products[1].name);

// } else if (products[2].price < products[0].price && products[2].price <products[1].price ) {
//     console.log(products[2].name);
// } else {
//     console.log(products[0].name);

// }

// const delivery = {
//   zone: "Захын бүс",
//   isExpress: true,
// };
// let fee;

// switch (delivery.zone) {
//   case "Төв":
//     fee = 3000;
//     break;
//   case "Захын бүс":
//     fee = 5000;
//     break;
//   case "Орон нутаг":
//     fee = 10000;
//     break;
//   default:
//     console.log("Хүргэлтийн бүс буруу");
//     break;
// }
// if (
//   delivery.zone === "Төв" ||
//   delivery.zone === "Захын бүс" ||
//   delivery.zone === "Орон нутаг"
// ) {
//   if (delivery.isExpress) {
//     fee += 2000;
//   }

//   console.log(fee);
// }

// const order = {
//     status: "Бэлтгэж байна",
//     isPaid: true,
//     total: 45000
// } 
// if (order.status === "Бэлтгэж байна" || order.status === "Хүлээгдэж байна") {
//     order.status = "Цуцлагдсан"
//     if (order.isPaid === true) {
//         order.refundAmount = order.total
//     }
// } else if (order.isPaid === false){
//     order.refundAmount = 0
    
// } else {

// }
// console.log(order.status, order.refundAmount);

// const purchase = {
//     daysSincePurchase: 5,
//     hasReceipt: true,
//     isDamaged: false
// } 
// if (purchase.daysSincePurchase < 7 && purchase.hasReceipt === true && purchase.isDamaged === false) {
//     console.log("Буцаах боломжтой");  
// } else if (purchase.isDamaged === true){
//     console.log("baraa gemtsen");
    
// } else if (purchase.daysSincePurchase > 7) {
//     console.log("hugatsaa hetersen");
    
// } else if (purchase.hasReceipt === false) {
//     console.log("barimtgui");
    
// }

const cart = [
    {
        name: "Дэвтэр",
        quantity: 2,
        stock: 5
    }
]
const addQuantity = 3
if (cart[0].stock >= (cart[0].quantity + addQuantity) && addQuantity > 0) {
    console.log(cart[0].quantity + addQuantity);
    
} else {
    console.log("Тоо ширхгийг нэмэх боломжгүй");
    
}
let sum = +prompt("Введите сумму:");

let price = +prompt("Введите цену товара:");

let  quantity = Math.floor(sum / price);

let  remainder = (sum - (price * quantity)).toFixed(2);

alert(`Вы можете купить ${quantity} единици данного товара.`);

alert(`Ваша сдача составляет ${remainder} грн.`);
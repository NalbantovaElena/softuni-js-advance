function solve(a, b) {
    let gcd = 1;//даваме стойността, на която могат да се делят всички числа
   
    const smallNumber = Math.min(a, b); //определяме по-малкото число
   
    for (let i = 1; i <= smallNumber; i++) { //изпълняваме цикъл от 1 до по-малкото число

        if (a % i == 0 && b % i == 0) { //проверяваме дали двете числа се делят без остатък

            gcd = i; //ако да запазваме числото
        }

    }



    console.log(gcd);//отпечатваме числото
}

solve(
    15, 5
)
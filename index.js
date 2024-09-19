        //1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

        function calculateDifference(a, b) {
            return a - b;
        }
        let result1 = calculateDifference(371, 161);
        console.log(result1); // Output will be 210

        

        //2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

        function isOdd(number) {
            return number % 2 !== 0;
        }

        console.log(isOdd(3));  // Output: true
        console.log(isOdd(4));  // Output: false



        //3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.
        
        function findMin(arr) {
            if (arr.length === 0) {
                return null; // return null if array is empty
             }
            let min = arr[0];
            for (let i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            return min;
        }
        let number1 = [30, 77, 15, 90, 28];
        console.log(findMin(number1)); // Output: 15

        

        //4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.
        function filterEvenNumbers(arr) {
            return arr.filter(function(num) {
                return num % 2 === 0;
            });
        }
        let number4 = [31, 70, 21, 82, 11, 48];
        let evenNumbers = filterEvenNumbers(number4);
        console.log(evenNumbers); // Output: [70, 82, 48]

        

        //5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.
        function sortArrayDescending(arr) {
            return arr.slice().sort(function(a, b) {
            return b - a;
            });
        }
        let number5 = [32, 75, 23, 89, 18, 45];
        let sortedNumbers = sortArrayDescending(number5);
        console.log(sortedNumbers); // Output: [89, 75, 45, 32, 23, 18]


        //6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.
        function lowercaseFirstLetter(str) {
            if (str.length === 0) {
                return str; // Return empty string if input is empty
            }
            return str.charAt(0).toLowerCase() + str.slice(1);
        }
        let text = "Welcome Home";
        let result6 = lowercaseFirstLetter(text);
        console.log(result6); // Output: "welcome Home"

        //7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the string.
        function countVowels(str) {
            const vowels = "aeiouAEIOU";
            let count = 0;
    
            for (let char of str) {
                if (vowels.includes(char)) {
                    count++;
                }
            }
    
            return count;
            }
            let text7 = "Welcome to Toronto";
            let vowelCount = countVowels(text7);
            console.log(vowelCount); // Output: 7

        //8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.
        function findAverage(arr) {
            if (arr.length === 0) {
                return 0; // Return 0 if the array is empty
            }
    
            const sum = arr.reduce(function(acc, num) {
                return acc + num;
            }, 0);
    
            return sum / arr.length;
        }

        let numbers = [35, 72, 21, 58, 21, 84];
        let average = findAverage(numbers);
        console.log(average); // Output: 48.5

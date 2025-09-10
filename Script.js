                // Array methods
/* 1.Map()-Transforming Data
           => The map() method creates a new array by applying a function to each element in the original array.

            Syntax: array.map(function(element, index, array) {
              return new value
            });


           => Use case: Modify or transform array elements (e.g., changing units, formatting data).


Example: map method using Arrow function
*/ 
            let array=[2,4,6,8];

            const new_array=array.map(num=>num*num);
            console.log(new_array);


 /* 2. filter(): Selecting Data
            =>The filter() method creates a new array with elements that meet a specific condition.
            Syntax:
                        array.filter(function(element, index, array) {
                                return true to keep the element
                                return false to remove it
                            });
 
        =>  Use case: Extract relevant data (e.g., removing inactive users, selecting premium subscribers).
 Example: 
 */

            let arr2=[2,5,4,6,8,10,15];
            let even_array=arr2.filter(num=>num%2==0);
            console.log(even_array);

  /*  reduce(): Summarizing Data
            =>The reduce() method reduces an array to a single value (e.g., sum, average, maximum).

            Syntax:
                        array.reduce(function(accumulator, currentValue, index, array) {
                            return updated accumulator
                        }, initialValue);

            Use case: Aggregate data (e.g., calculating totals, finding averages).
 Example: 
 */
            let numbers = [1, 2, 3, 4, 5];
            let sum = numbers.reduce((acc, num) => acc + num, 0);
            console.log(sum)


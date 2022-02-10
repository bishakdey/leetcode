/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

//  var addStrings = function(num1, num2) {
//     let i = num1.length - 1;
//     let j = num2.length - 1;
//     let carry = 0;
//     let sum = '';
     
//     for (;i >= 0 || j >= 0 || carry > 0;i--, j--) {
//         const digit1 = i < 0 ? 0 : num1.charAt(i) - '0';
//         const digit2 = j < 0 ? 0 : num2.charAt(j) - '0';
//         const digitsSum = digit1 + digit2 + carry;
//         sum = `${digitsSum % 10}${sum}`;
//         carry = Math.floor(digitsSum / 10);
//     }
    
//     return sum;
// };
var addStrings = function(num1, num2) {


    let carry = 0; 
    let result = ''

    let i = num1.length - 1
    let j = num2.length - 1

    while(i >= 0 || j >= 0 || carry > 0)
    {
        let sum = 0; 
        if(i >= 0)
        {
            sum += num1[i--] - '0';
        }

        if(j >= 0)
        {
            sum += num2[j--] - '0'; 
        }

        sum += carry; 

        const toPrepand = Math.floor(sum%10)
        // console.log(toPrepand
        result = `${toPrepand % 10}${result}`;

        carry = Math.floor(sum/10)
    }

    return result
};
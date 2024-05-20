function palindromeChecker(word){
    //split the word into an array of inidividual characters 
    let split_word = word.split('')
    // reverse the array
    let reversed_split_word = split_word.reverse()
    // join the reversed array
    let joined_reversed_split_word = reversed_split_word.join('')
    
// compaire the two words
    if(word === joined_reversed_split_word){
        console.log(`${word} is a palindrome`);
    }
    else{
        console.log(`${word} is not a palindrome`);
    }

}
palindromeChecker("deified")
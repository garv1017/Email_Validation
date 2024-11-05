//todo 1: The local part of the email address (before the "@") can contain: 
// Alphanumeric characters (A-Z, a-z, 0-9) 
// Special characters: period underscore "_", percent "%", plus or hyphen 10 
// Consecutive periods are not allowed 1 
// Special characters cannot appear at the beginning or end of the local part 
// Hyphen // Period". 

//todo 2: The domain part of the email address (after the "@") can contain: 
// Alphanumeric characters (A-Z, a-z, 0-9) 
// Must contain at least one period 
// The top-level domain (TLD) must consist of at least two alphabetic .g., "com", ""org", "net", etc.)


const validateEmail = (email) => { 
    return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test( email ); 
}  
console.log(validateEmail("john.doe@example.com")); // true 
console.log(validateEmail("invalid.. dotadomain.com")); // false
console.log(validateEmail("missing@dotcom")); // false
console.log(validateEmail("no@domain")); // false

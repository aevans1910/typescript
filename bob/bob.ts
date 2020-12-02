const isQuestion = (input: string) => input.trim().endsWith('?');   
const isYelledQuestion = (input: string) => isYelling(input) && isQuestion(input);
const isYelling = (input:string) => input.toUpperCase() == input && input.match(/[a-zA-Z]/i);
const isNothing = (input: string) => input.trim().length == 0; 

class Bob {
    hey(input: string): string {
        if (isYelledQuestion(input)) {
            return "Calm down, I know what I'm doing!"; 
        }

        if (isYelling(input)) {
            return "Whoa, chill out!";    
        }

        if (isQuestion(input)) {
            return "Sure.";
        }
        
        if (isNothing(input)) {
            return "Fine. Be that way!";
        }

        else {
            return "Whatever.";
        }
    }
}

export default Bob
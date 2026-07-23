class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {

        const parenthesisArray = s.split("");

        let unclosedParenthesis = 0;
        let unclosedBrackets = 0;
        let unclosedBraces = 0;

        for(let i = 0; i<parenthesisArray.length; i++){

            if(unclosedParenthesis < 0 || unclosedBrackets < 0 || unclosedBraces < 0) return false;

            switch(parenthesisArray[i]){
                case "(":
                    if(i !== 0 && (parenthesisArray[i+1] === "]" || parenthesisArray[i+1] === "}")) return false;
                    unclosedParenthesis++;
                    break;
                case ")":
                    unclosedParenthesis--;
                    break;
                case "{":
                    if(i !== 0 && (parenthesisArray[i+1] === "]" || parenthesisArray[i+1] === ")")) return false;
                    unclosedBraces++;
                    break
                case "}":
                    unclosedBraces--;
                    break;
                case "[":
                    if(i !== 0 && (parenthesisArray[i+1] === ")" || parenthesisArray[i+1] === "}")) return false;
                    unclosedBrackets++;
                    break;
                case "]":
                    unclosedBrackets--;
                    break;
                default:
                    return false;
            }
        }
        const valid:boolean = unclosedBrackets === 0 && unclosedBraces === 0 && unclosedParenthesis === 0; 

        if(!valid){
            return false;
        }

        return true;
    }
}


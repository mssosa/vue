const INIT_STATE = 0;
const FISRT_FIGURE_STATE = 1;
const SECOD_FIGURE_STATE = 2;
const RESULT_STATE = 3;

export class CalculatorEngine{
    
    display = '';
    calculatorEngine = {
        currentState: INIT_STATE,
        firstFigure: 0,
        secondFigure: 0,
        operator: '',
        result: 0,
    }

    constructor(){
    }

    
    handleNumber(value) {
        switch (this.calculatorEngine.currentState) {
          case INIT_STATE:
            this.calculatorEngine.firstFigure = value;
            this.calculatorEngine.currentState = FISRT_FIGURE_STATE;
            this.display += value;
            break;
          case FISRT_FIGURE_STATE:
            this.calculatorEngine.firstFigure = this.calculatorEngine.firstFigure * 10 + value;
            this.display += value;
            break;
          case SECOD_FIGURE_STATE:
            this.calculatorEngine.secondFigure = this.calculatorEngine.secondFigure * 10 + value;
            this.display += value;
            break;
          case RESULT_STATE:
            this.calculatorEngine.firstFigure = value;
            this.calculatorEngine.secondFigure = 0;
            this.calculatorEngine.currentState = FISRT_FIGURE_STATE;
            this.calculatorEngine.operator = '';
            break;
          default:
            break;
        }
  
        return this.display;
      }

      handleSymbol(value) {
        switch (this.calculatorEngine.currentState) {
          case INIT_STATE:
  
            break;
          case FISRT_FIGURE_STATE:
            if (value === '+' || value === '-' || value === '*' || value === '/') {
              this.calculatorEngine.operator = value;
              this.calculatorEngine.currentState = SECOD_FIGURE_STATE;
              this.display += value;
            }
            break;
          case SECOD_FIGURE_STATE:
            if (value === '=') {
              this.calculatorEngine.result = this.resolve();
              this.calculatorEngine.currentState = RESULT_STATE;
              this.display += value + this.calculatorEngine.result;
            }
            break;
          case RESULT_STATE:
            if (value === '+' || value === '-' || value === '*' || value === '/') {
              this.calculatorEngine.firstFigure = this.calculatorEngine.result;
              this.calculatorEngine.result = 0;
              this.calculatorEngine.secondFigure = 0;
              this.calculatorEngine.currentState = SECOD_FIGURE_STATE;
              this.calculatorEngine.operator = value;
              this.display += this.calculatorEngine.firstFigure + value;
            }
            break;
  
          default:
            break;
        }
        return this.display
      }

      resolve() {
        switch (this.calculatorEngine.operator) {
          case '+':
            return this.calculatorEngine.firstFigure + this.calculatorEngine.secondFigure;
          case '-':
            return this.calculatorEngine.firstFigure - this.calculatorEngine.secondFigure;
          case '*':
            return this.calculatorEngine.firstFigure * this.calculatorEngine.secondFigure;
          case '/':
            return this.calculatorEngine.firstFigure / this.calculatorEngine.secondFigure;
          default:
            break;
        }
      }
}
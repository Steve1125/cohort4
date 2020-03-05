
const functions = {

    
    size: (num) => {
        if (num < 10) {
            return "small";
        }
        if (num < 20) {
            return "medium";
        }
        if (num <= 100) {
            return "large";
        }
          else  return "extra large";
    },

    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    multiply: (num1, num2) => {
        return num1 * num2;
    },

    divide: (num1, num2) => {
        return num1 / num2;
    },

    income1: (num1) => {
        return num1 * 0.15;
    },

    income2: (num1) => {
        return num1 * 0.205;
    },

    income3: (num1) => {
        return num1 * 0.26;
    },

    income4: (num1) => {
        return num1 * 0.29;
    },

    income5: (num1) => {
        return num1 * 0.33;
    }
};

export default functions;

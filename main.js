/**
 * [EN] Capture of elements and declaration of variables
 * [PT] Captura de elementos e declaração de variáveis
 */
var calculatorDisplay = document.getElementById('calculator-display');
var numberButtons = document.getElementsByClassName('numbers');
var operationButtons = document.getElementsByClassName('operations');
var historyContent = document.getElementById('history-content');
var clearHistoryButton = document.getElementById('clear-history');
var expression = '';

/**
 * [EN] Function to calculate and display the result of the expression
 * [PT] Função para calcular e exibir o resultado da expressão
 * @param {String} expression 
 */
function calculate() {
    var result = eval(expression);
    calculatorDisplay.innerHTML = Intl.NumberFormat('pt-BR', {maximumFractionDigits: 4}).format(result);
    addToHistory(expression, result);
    expression = result;
}

/**
 * [EN] Function to update operation history
 * [PT] Função para atualizar o histórico de operações
 * @param {String} expression 
 * @param {Double} result 
 */
function addToHistory(copyExpression, result) {
    var oldExpression = document.createElement('h2');
    var oldResult = document.createElement('h1');
    var br = document.createElement('br')
    
    oldExpression.innerHTML = copyExpression.replace(/\*/g, '&times;').replace(/\//g, '&divide;');
    oldResult.innerHTML = Intl.NumberFormat('pt-BR', {maximumFractionDigits: 4}).format(result);;

    historyContent.appendChild(oldExpression);
    historyContent.appendChild(oldResult);
    historyContent.appendChild(br);
}

/**
 * [EN] Function to change the font size of the calculator display
 * [PT] Função para alterar o tamanho da fonte do visor da calculadora
 */
function changeDisplayTextSize() {
    var displayTextLength = calculatorDisplay.innerHTML.trim().length;

    if (displayTextLength > 52) calculatorDisplay.style.fontSize = '0.5em';
    else if (displayTextLength > 32) calculatorDisplay.style.fontSize = '0.75em';
    else if (displayTextLength > 22) calculatorDisplay.style.fontSize = '1em';
    else if (displayTextLength > 16) calculatorDisplay.style.fontSize = '1.5em';
    else if (displayTextLength > 12) calculatorDisplay.style.fontSize = '2em';
    else calculatorDisplay.style.fontSize = ' 2.5em';
}

/**
 * [EN] Function to update the calculator display and the expression whenever the user clicks a button
 * [PT] Função para atualizar o visor da calculadora e a expressão sempre que o usuário clicar em um botão
 * @param {String} element
 */
function updateDisplay(element) {
    if (element == '/') {
        calculatorDisplay.innerHTML += '&divide;';
        expression += element;
    }
    else if (element == '*') {
        calculatorDisplay.innerHTML += '&times;';
        expression += element;
    }
    else {
        calculatorDisplay.innerHTML += element;
        expression += element;
    }

    changeDisplayTextSize();
}

/**
 * [EN] Erases the last characther from the calculator display
 * [PT] Apaga o último caracter do visor da calculadora
 */
function eraseFromCalculatorDisplay() {
    calculatorDisplay.innerHTML = calculatorDisplay.innerHTML.substring(0, (calculatorDisplay.innerHTML.length - 1));
    expression = expression.substring(0, (expression.length - 1));
    changeDisplayTextSize();
}

/**
 * [EN] Clears the calculator display
 * [PT] Limpa o visor da calculadora
 */
function clearCalculatorDisplay() {
    expression = '';
    calculatorDisplay.innerHTML = '';
}

/**
 * [EN] Clears the calculator history
 * [PT] Limpa o histórico
 */
function clearHistoryContent() {
    historyContent.innerHTML = '';
}

/**
 * [EN] Number buttons
 * [PT] Botões de números
 */
numberButtons[0].onclick = function() { updateDisplay('7'); };
numberButtons[1].onclick = function() { updateDisplay('8'); };
numberButtons[2].onclick = function() { updateDisplay('9'); };
numberButtons[3].onclick = function() { updateDisplay('4'); };
numberButtons[4].onclick = function() { updateDisplay('5'); };
numberButtons[5].onclick = function() { updateDisplay('6'); };
numberButtons[6].onclick = function() { updateDisplay('1'); };
numberButtons[7].onclick = function() { updateDisplay('2'); };
numberButtons[8].onclick = function() { updateDisplay('3'); };
numberButtons[9].onclick = function() { updateDisplay('0'); };

/**
 * [EN] Button to set decimal places
 * [PT] Botão para definir casas decimais
 */
numberButtons[10].onclick = function() { updateDisplay('.'); };

/**
 * [EN] Button to display expression result
 * [PT] Botão para exibir resultado da conta
 */
numberButtons[11].onclick = function() { calculate(); };

/**
 * [EN] Operations buttons
 * [PT] Botões de operações
 */
operationButtons[2].onclick = function() { updateDisplay('/'); };
operationButtons[3].onclick = function() { updateDisplay('*'); };
operationButtons[4].onclick = function() { updateDisplay('-'); };
operationButtons[5].onclick = function() { updateDisplay('+'); };

/**
 * [EN] Buttons for cleaning the display
 * [PT] Botões para limpar o visor
 */
operationButtons[0].onclick = function() { clearCalculatorDisplay(); };
operationButtons[1].onclick = function() { eraseFromCalculatorDisplay(); };

/**
 * [EN] Button for cleaning the history
 * [PT] Botão para limpar o histórico
 */
clearHistoryButton.onclick = function() { clearHistoryContent(); };
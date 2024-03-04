//function verificarPermissao() {
   valoresPermitidos = [2, 3, 4, 5];
  let Valid = false;
  
  const valorInserido = document.getElementById("RM").value;
  if (valoresPermitidos.includes(valorInserido)) {
 //   validar();
  } else if (isNaN(valorInserido)) {
    alert("Digite um valor numérico válido.");
  } else {
    alert("Você não tem permissão.");
  }


function validar() {
  // Get references to all input fields and radio buttons
  const nameInput = document.querySelector('.input-box input[placeholder="Insira seu nome"]');
  const usernameInput = document.querySelector('.input-box input[placeholder="Insira seu nome de usuário"]');
  const emailInput = document.querySelector('.input-box input[placeholder="Insira seu e-mail"]');
  const raInput = document.querySelector('.input-box input[placeholder="Insira seu RA"]');
  const passwordInput = document.querySelector('.input-box input[placeholder="Crie sua senha"]');
  const confirmPasswordInput = document.querySelector('.input-box input[placeholder="Confirme sua senha"]');
  const maleRadio = document.getElementById('dot-1');
  const femaleRadio = document.getElementById('dot-2');
  const otherRadio = document.getElementById('dot-3');

  // Perform validation checks
  let isValid = true;

  // Add your specific validation logic here, for example:
  if (nameInput.value.trim() === '') {
    isValid = false;
    // Show error message for name
  }

  // ... similar checks for other input fields

  if (!maleRadio.checked && !femaleRadio.checked && !otherRadio.checked) {
    isValid = false;
    // Show error message for gender selection
  }

  // If all validation checks pass, set href attribute and submit form
  if (isValid) {
    document.querySelector('form').action = 'login.html';
    document.querySelector('form').submit();
  } else {
    // Prevent form submission and display error messages (if not already shown)
  }
}

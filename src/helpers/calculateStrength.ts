const calculateStrength = (password: string): string => {
  let strength = 0;
  const lengthCriteria = password.length >= 12;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumbers = /[0-9]/.test(password);
  const hasSymbols = /[!@#$%^&*()_+=-]/.test(password);

  if (lengthCriteria) strength += 1;
  if (hasUpperCase) strength += 1;
  if (hasLowerCase) strength += 1;
  if (hasNumbers) strength += 1;
  if (hasSymbols) strength += 1;

  switch (strength) {
    case 5:
      return "Very Strong";
    case 4:
      return "Strong";
    case 3:
      return "Moderate";
    case 2:
      return "Weak";
    default:
      return "Very Weak";
  }
};

export default calculateStrength;

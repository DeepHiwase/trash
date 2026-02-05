// -------------------- RECURSION ----------------------------
function calcPower(base, expo) {
  if (expo === 1) return base;

  return base * calcPower(base, expo - 1);
}

calcPower(5, 2);

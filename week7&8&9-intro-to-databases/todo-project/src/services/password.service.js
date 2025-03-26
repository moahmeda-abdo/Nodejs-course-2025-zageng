import bcrypt from "bcrypt";

const salt = 10;
async function hashPassword(password) {
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

async function ComparePassword(password, hashingPassword) {
  const match = await bcrypt.compare(password, hashingPassword);
  return match;
}

export { ComparePassword, hashPassword };

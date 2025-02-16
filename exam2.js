const text = "ABC";

const permute = (text) => {
  const result = new Set(); // กันไม่ให้ข้อมูลซ้ำ

  const permuteRecursive = (text, prefix) => {
    console.log(`text: ${text}, prefix: ${prefix}`);
    if (text.length === 0) {
      result.add(prefix);
    } else {
      for (let i = 0; i < text.length; i++) {
        const rem = text.substring(0, i) + text.substring(i + 1);
        permuteRecursive(rem, prefix + text.charAt(i));
      }
    }
  };

  permuteRecursive(text, "");
  return Array.from(result);
};

const result = permute(text);

console.log(`ตัวอักษร ${text} สามารถสลับตำแหน่งได้ทั้งหมด ${result.length} ตำแหน่ง คือ ${result}`);
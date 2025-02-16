const randomText = "beautifeeulxz2e";

const countVowelClusters = (text) => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    // ตัวแปรสำหรับเช็คว่าตัวอักษรก่อนหน้าเป็นสระหรือไม่
    let isVowel = false;

    // วนลูปตรวจสอบทีละตัวอักษร
    for (let i = 0; i < text.length; i++) {
        // เช็คว่าเป็นสระหรือไม่
        if (vowels.includes(text[i])) {
            // ถ้า isVowel เป็น true แสดงว่าตัวอักษรก่อนหน้าเป็นสระ ให้ข้ามไปเช็คตัวอักษรถัดไป
            if (!isVowel) {
                count++;
                isVowel = true;
            }
        } else {
            // ถ้าไม่ใช่สระ ให้รีเซ็ตสถานะ
            isVowel = false;
        }
    }

    return count;
};

console.log(countVowelClusters(randomText));
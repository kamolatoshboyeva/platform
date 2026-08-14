// Web3Forms bergan Access Key'ni shu yerga qo'ying:
const ACCESS_KEY = '3715a103-4e6a-4a91-940a-99b1270568d9'; 

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    if (form) {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Formadagi barcha ma'lumotlarni yig'amiz
            const formData = new FormData(form);
            formData.append("access_key", ACCESS_KEY);

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData
                });

                const data = await response.json();

                if (data.success) {
                    alert("Arizangiz muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.");
                    form.reset();
                } else {
                    alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
                }
            } catch (error) {
                alert("Tarmoqda xatolik yuz berdi!");
            }
        });
    }
});
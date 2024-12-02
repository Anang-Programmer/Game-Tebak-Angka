const input = document.getElementById('guessInput');
const btn = document.getElementById('guessButton');
const result = document.getElementById('message');
const sisakesempatan = document.getElementById('kesempatan');
const buttonClear = document.getElementById('clearButton');
const rand = Math.round(Math.random() * 100);
let kesempatan = 7;
console.log(rand)

btn.addEventListener('click', () => {
    const tebakan = parseInt(input.value)
    if (kesempatan > 0) {
        if (tebakan === rand) {
            result.innerHTML = "Selamat, Tebakan Anda Benar"
            // sisakesempatan.innerHTML = `Kesempatan anda tersisa ${kesempatan} kali`
            btn.disabled = true
        } else if (tebakan < rand) {
            kesempatan --
            sisakesempatan.innerHTML = `Kesempatan anda tersisa ${kesempatan} kali`
            result.innerHTML = "Tebakan Anda Terlalu Rendah"
            input.value = ''
        } else if (tebakan > rand) {
            kesempatan --
            sisakesempatan.innerHTML = `Kesempatan anda tersisa ${kesempatan} kali`
            result.innerHTML = "Tebakan Anda Terlalu Tinggi"
            input.value = ''
        } else {
            result.innerHTML = "Angka Tidak Valid"
        }
    } else {
        result.innerHTML = "Kesempatan Anda Sudah Habis, Anda Kalah!"
        btn.disabled = true
    }   
})

buttonClear.addEventListener('click', () => {
    location.reload()
})

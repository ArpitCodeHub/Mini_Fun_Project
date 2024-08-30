let dangerBtn = document.querySelector(".danger-btn");
let safeBtn = document.querySelector(".safe-btn");
dangerBtn.onclick = () => {
    dangerBtn.innerHTML = "<b style='font-size:25px;'>Naughty ho rha kya BHEN KE LODE </b>";
}
safeBtn.onclick = () => {
    safeBtn.innerHTML = "<b style='font-size:30px;'> Nikal Jaa BSDK </b>";
}
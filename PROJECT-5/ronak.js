const rk = document.querySelector("#insert")

window.addEventListener("keydown", (e) =>{
    rk.innerHTML = `
    <div class="color">
    <table>
        <tr>
            <th>key</th>
            <th>keycode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key ===  " "? "space": e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>
    `;
});
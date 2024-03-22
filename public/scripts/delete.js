const container = document.querySelector(".tea_container")
if (container) {
    container.addEventListener("click", async (e) => {
        console.log(e.target);
        if (e.target.classList.contains("btn")) {
            const agree = confirm("Вы хотите удалить?")
            if (agree === true) {
             const {id} = e.target.dataset
console.log(id);
                try {
                    const res = await fetch(`/teaPoint/${id}`, {
                        method: "DELETE"
                    })
                    const data = await res.json()
                    if (data.message == "success") {
                        e.target.closest(".TeaCard_container").remove()
                        console.log('1111111111111');
                    }
                } catch (error) {
                    alert(error.message)
                }
            }
        }
    })
}

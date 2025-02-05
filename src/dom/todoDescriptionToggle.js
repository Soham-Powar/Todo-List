export default function todoDescriptionToggle(moreTodoBtn, descriptionPara) {
  moreTodoBtn.addEventListener("click", () => {
    console.log("dac");
    if (descriptionPara.classList.contains("hidden-description")) {
      descriptionPara.classList.remove("hidden-description");
    } else {
      descriptionPara.classList.add("hidden-description");
    }
  });
}

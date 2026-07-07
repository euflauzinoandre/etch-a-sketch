function createSketch(rows, columns) {
	const container = document.querySelector("#container");
	container.style.setProperty("--grid-rows", rows);
	container.style.setProperty("--grid-columns", columns);

	let item;
	for (let i = 0; i < rows * columns; i++) {
		item = document.createElement("div");
		item.classList.add("grid-item");
		container.appendChild(item);
	}

	let gridItems = document.querySelectorAll(".grid-item");
	gridItems.forEach((i) => {
		i.addEventListener("mouseover", () => {
			i.style.backgroundColor = "red";
		});
	});
}

const setValue = document.querySelector("#setValue");
setValue.addEventListener("click", (e) => {
	e.preventDefault();
	let newGrid = prompt("Insert new size of grid:");
	createSketch(newGrid, newGrid);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
	window.location.reload();
	createSketch(16, 16);
});

createSketch(16, 16);

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
			i.style.backgroundColor =
				"#" + Math.floor(Math.random() * 16777215).toString(16);
		});
	});
}

const setValue = document.querySelector("#setValue");
setValue.addEventListener("click", () => {
	let newGrid;
	do {
		newGrid = prompt("Insert new size of grid:");
		if (newGrid === "") alert("Empty! Insert a new size of grid.");
		if (newGrid % 1 != 0)
			alert("Invalid! Insert a number to create new grid.");
		if (newGrid > 100) alert("Max size of grid is 100.");
	} while (newGrid === "" || newGrid % 1 != 0 || newGrid > 100);
	let gridItems = document.querySelectorAll(".grid-item");
	gridItems.forEach((i) => {
		i.remove();
	});
	createSketch(newGrid, newGrid);
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
	window.location.reload();
	createSketch(16, 16);
});

createSketch(16, 16);

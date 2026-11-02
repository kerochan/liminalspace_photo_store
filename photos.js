const tableBody = document.getElementById("photo-list");

// 画像を3枚ずつ、テーブルの各行に配置します。
photos.forEach((filename, index) => {
	if (index % 3 === 0) tableBody.insertRow();

	const image = document.createElement("img");
	image.src = `photos/${filename}`;
	image.alt = filename;
	image.width = 300;

	tableBody.rows[tableBody.rows.length - 1]
		.insertCell()
		.appendChild(image);
});

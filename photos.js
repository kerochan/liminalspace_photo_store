// 画像を追加するときは、photos/ 内のファイル名をこの配列に追加します。
const photos = [
	"夜道.jpg",
	"朝の集合住宅.jpg",
	"大阪駅前ビルの通路.jpg",
	"階段と通行止めの通路.jpg",
	"海遊館付近の道路.jpg",
];
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

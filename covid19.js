/** @format */

function getdata() {
	let result = document.querySelector(".result");
	let value = document.querySelector(".value").value;
	console.log(value);
	fetch(`https://api.covid19api.com/total/country/${value}`)
		.then((response) => response.json())
		.then((data) => {
			for (let i = 0; i < data.length; i++) {
				let date = data[i].Date;
				let confirmed = data[i].Confirmed;
				let recovered = data[i].Recovered;
				let death = data[i].Deaths;

				result.innerHTML += `<tr>
            <th scope="row" class="text-center"> ${i + 1}</th>
            <td class="text-center"> ${date}</td>
            <td class="text-center"> ${confirmed}</td>
            <td class="text-center"> ${recovered}</td>
            <td class="text-center"> ${death}</td>
           </tr> `;
			}
		})
		.catch((err) => {
			console.log(err);
		});
}

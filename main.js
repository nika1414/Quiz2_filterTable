// "https://corona.lmao.ninja/v2/countries?yesterday&strict"

//..........COVID API...........

fetch("https://corona.lmao.ninja/v2/countries?yesterday&strict")
  .then((response) => {
    return response.json();
  })
  .then((completeData) => {
    console.log(completeData);
    let data1 = "";
    let data2 = "";
    completeData.map((values) => {
      data2 = `
<tr>
      <th>Country</th>
      <th>Continents</th>
      <th>Population</th>
      <th>Cases</th>
      <th>Deaths</th>
</tr>`;
      data1 += `
<tr>
      <td> ${values.country}</td>
      <td> ${values.continent}</td>
      <td> ${values.population}</td>
      <td> ${values.cases}</td>
      <td> ${values.deaths}</td>
</tr>`;
    });
    document.getElementById("table").innerHTML = data2 + data1;
  })
  .catch((err) => {
    console.log(err);
  });

function myFunction(num) {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById(num);
  filter = input.value.toUpperCase();
  table = document.getElementById("table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[num - 1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

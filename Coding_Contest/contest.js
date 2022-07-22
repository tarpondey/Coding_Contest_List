const api_url = "https://kontests.net/api/v1/all";

async function getapi(url) {
    const response = await fetch(url);
    var Item = await response.json();
    console.log(Item);
    show(Item);
}
function show(Item) {
    let Menu = 
        `<tr>
          <th>CONTEST NAME</th>
          <th>URL</th>
          <th>START_TIME</th>
          <th>END_TIME</th>
         </tr>`;
    
    // Loop to access all rows 
    for (var i=0; i<Item.length; i++) {
        Menu += `<tr> 
    <td>${Item[i].name} </td>
    <td><a class="btn" href="${Item[i].url}" rel="noopener noreferrer" target="_blank"><img height="30px" src="hey.png" alt="link"></a></td>
    <td>${Item[i].start_time}</td> 
    <td>${Item[i].end_time}</td>          
</tr>`;
    }
    document.getElementById("contest-menu").innerHTML = Menu;
}
getapi(api_url);
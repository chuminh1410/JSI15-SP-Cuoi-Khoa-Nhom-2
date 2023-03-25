const nav = document.getElementById("nav");

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        nav.classList.add('nav_black')
    } else {
        nav.classList.remove('nav_black')
    }
})

async function timphim() {

    const searchText = document.getElementById('tenphim').value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6d0a49ad1amsha8da871af40ca9fp1e3017jsn1f71a1fca7a4',
            'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
        }
    };

    await fetch(`https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup?term=${searchText}&country=uk`, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}



function displayinformation(results) {

    const comfirmed1 = results.results[0];
    const deaths1 = data.deaths;
    const last_checked1 = data.lastChecked;
    const last_report1 = data.lastReported;
    const location1 = data.location;
    const recovered1 = data.recovered;


    const div0 = document.getElementById("return_0")
    const div1 = document.getElementById("return_1");
    const div2 = document.getElementById("return_2");
    const div3 = document.getElementById("return_3");
    const div4 = document.getElementById("return_4");
    const div5 = document.getElementById("return_5");
    const div6 = document.getElementById("return_6");

    const top = document.createElement("h1");
    top.innerHTML = "Information returned below: ";
    div0.appendChild(top);

    const heading = document.createElement("h1");
    const heading_1 = document.createElement("h1");
    heading.innerHTML = comfirmed1;
    heading_1.innerHTML = "Case comfirmed: ";
    div1.appendChild(heading_1);
    div1.appendChild(heading);

    const heading1 = document.createElement("h1");
    const heading_2 = document.createElement("h1");
    heading1.innerHTML = deaths1;
    heading_2.innerHTML = "Deaths comfirmed: ";
    div2.appendChild(heading_2);
    div2.appendChild(heading1);

    const heading2 = document.createElement("h1");
    const heading_3 = document.createElement("h1");
    heading2.innerHTML = last_checked1;
    heading_3.innerHTML = "Last checked: ";
    div3.appendChild(heading_3);
    div3.appendChild(heading2);

    const heading3 = document.createElement("h1");
    const heading_4 = document.createElement("h1");
    heading3.innerHTML = last_report1;
    heading_4.innerHTML = "Last reported: ";
    div4.appendChild(heading_4);
    div4.appendChild(heading3);

    const heading4 = document.createElement("h1");
    const heading_5 = document.createElement("h1");
    heading4.innerHTML = location1;
    heading_5.innerHTML = "Location: ";
    div5.appendChild(heading_5);
    div5.appendChild(heading4);

    const heading5 = document.createElement("h1");
    const heading_6 = document.createElement("h1");
    heading5.innerHTML = recovered1;
    heading_6.innerHTML = "Case recovered: (If leave blank then no returned information) ";
    div6.appendChild(heading_6);
    div6.appendChild(heading5);

}

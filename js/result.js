const result = document.querySelector(".result-container");

const currentUrl = new URLSearchParams(window.location.search);

const urlParams = Object.fromEntries(currentUrl.entries());

result.innerHTML = `<h1>Congratulations, ${urlParams.fullname}!</h1>
<h2>Your form has been submitted!</h2>
<ul>
<li>Name: ${urlParams.fullname}</li>
<li>Email: ${urlParams.email}</li>
<li>Phone: ${urlParams.phone}</li>
<li>Address: ${urlParams.address}</li>
<li>City: ${urlParams.city}</li>
<li>State: ${urlParams.state}</li>
<li>ZIP: ${urlParams.zip}</li>
<li>Allergies: <i class='allergies-important'>${urlParams.allergies}</i></li>
<li>Frequency: ${urlParams.frequency}</li>
<li>Package: ${urlParams.package}</li>
</ul>
`;

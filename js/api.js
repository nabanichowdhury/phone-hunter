const loadPhones=()=>{
    fetch("https://openapi.programming-hero.com/api/phones")
    .then(res=>res.json())
    .then(data=>console.log(data))

}
loadPhones();

const searchPhone=()=>{
    const searchField=document.getElementById("search-field")
    const searchText=searchField.value.toLowerCase() ;
    searchField.value="";
    // console.log(searchText)  ;
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(queries=>showPhones(queries.data));
}

const showPhones=phones=>{
    const searchResult=document.getElementById("search-result")
    phones.forEach(phone=>{
        console.log(phone);
        const div=document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
        <div class="card h-100" style="width: 18rem;">
            <img src="${phone.image}" style="width: 150px; margin-left:70px"  class="card-img-top" alt="...">
            <div class="card-body" style="margin-left:50px">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">Brand:${phone.brand}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        `;
        searchResult.appendChild(div)
    })
   

}
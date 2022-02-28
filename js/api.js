const loadPhones=()=>{
    fetch("https://openapi.programming-hero.com/api/phones")
    .then(res=>res.json())
    .then(data=>console.log(data))

}
loadPhones();

// phone search load 

const searchPhone=()=>{
    const searchField=document.getElementById("search-field")
    const searchError=document.getElementById("search-error")
    const searchText=searchField.value.toLowerCase() ;
    const div=document.createElement("div");
    if(searchText==""){
        
        div.innerHTML=`
        <h1>Please search a item's name :)</h1>

        `
        searchError.appendChild(div)
        
        
        
    }
    else{
        searchError.textContent=""
        searchField.value="";
    // console.log(searchText)  ;
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    // console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(queries=>showPhones(queries.data));
    }
}
// show results 

const showPhones=phones=>{
    const searchResult=document.getElementById("search-result")
    searchResult.textContent="";
    const twentyPhone=phones.slice(0,20);
    if(phones.length==0){
        const div=document.createElement("div");
        div.innerHTML=`
        <h1>No element found :(</h1>

        `
        searchResult.appendChild(div)
        return;
    }
    twentyPhone.forEach(phone=>{
        console.log(phone);
        const div=document.createElement("div");
        div.classList.add("col");
        div.innerHTML=`
        <div class="card h-100 mx-auto" style="width: 18rem;">
            <img src="${phone.image}" style="width: 150px; margin-left:70px"  class="card-img-top" alt="...">
            <div class="card-body" style="margin-left:50px">
              <h5 class="card-title">${phone.phone_name}</h5>
              <p class="card-text">Brand:${phone.brand}</p>
              <button href="#"  onclick="loadPhoneDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
          </div>
        `;
        searchResult.appendChild(div)
    })
   

}

// load phone id 
const loadPhoneDetail=phoneid=>{
    console.log(phoneid);
    const url= `https://openapi.programming-hero.com/api/phone/${phoneid}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>showPhoneDetails(data.data))

}
const showPhoneDetails=phoneinfo=>{
    console.log(phoneinfo)
    const others=phoneinfo.others;
    const pairs=Object.entries(others);
    const phoneDetails=document.getElementById("phone-details");
    phoneDetails.textContent="";
    const div=document.createElement("div");
    div.classList.add("card");
    div.innerHTML=` 
        <h1 class="text-center">${phoneinfo.name}</h1>
        <img src="${phoneinfo.image}" style="width: 170px;" class="card-img-top mx-auto" alt="...">
        <div class="card-body">
            <h4 class="card-text">Sensors:${phoneinfo.mainFeatures.sensors[0]}, ${phoneinfo.mainFeatures.sensors[1]},${phoneinfo.mainFeatures.sensors[2]},${phoneinfo.mainFeatures.sensors[3]},${phoneinfo.mainFeatures.sensors[4]},${phoneinfo.mainFeatures.sensors[5]}</h4>
            <h5 class="card-text">${pairs} </h5>
           <h5 class="card-text">Release Date:  ${phoneinfo.releaseDate!=''?phoneinfo.releaseDate:"No info found :("} </h5>

        </div>
    `
    phoneDetails.appendChild(div)

}

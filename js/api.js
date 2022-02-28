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
    console.log(searchText)  ;
    const url=`https://openapi.programming-hero.com/api/phones?search=${searchText}`
    console.log(url)
    fetch(url)
    .then(res=>res.json())
    .then(data=>console.log(data.data));

}
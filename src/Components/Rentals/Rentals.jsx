import "./Rentals.css";

export const Rentals = () => {
  var data = JSON.parse(localStorage.getItem("formitems")) 
  console.log("data",data)

  function handlesort(e){
   var selected = e.target.id
   console.log(selected)
    if(selected === "l2h"){
        data.sort(function (a,b){
    return a.rent-b.rent
    })
}
    if(selected === "h2l"){
        data.sort(function (a,b){
    return b.rent-a.rent
    })  
    }
    console.log(data)
    displaydata(data)
}

function displaydata(data){
  return( <>
   {data?.map((house, index) => {
    return (
      <tr key={house?.id} className="houseDetails">
        <td className="houseId">{house?.id}</td>
        <td className="houseName">{house?.name} </td>
        <td className="ownersName">{house?.ownerName}</td>
        <td className="address">{house?.address}</td>
        <td className="areaCode">{house?.areaCode}</td>
        <td className="rent">{house?.rent}</td>
        <td className="preferredTenants">
          {/* Show text Both or Bachelors or Married based on values */}
          {house?.married ? "married" : null}
          {house?.bachelor ? "bachelor" : null}
          {house?.bachelor && house?.married ? "Both": null}
        </td>
        <td className="houseImage">
          <img src={house?.image} alt="house" />
        </td>
      </tr>
    );
  })}
  </>)
}

  return (
    <div className="rentalContainer">
      <div className="sortingButtons">
        <button className="sortById" id="sortid" onClick={(e)=>handlesort(e)}>Sort by ID</button>
        <button className="sortByRentAsc" id="l2h" onClick={(e)=>handlesort(e)}>Rent Low to high</button>
        <button className="sortByRentDesc" id="h2l" onClick={(e)=>handlesort(e)}>Rent High to low</button>
        <button className="sortByAreaAsc" id="al2h" onClick={(e)=>handlesort(e)}>Area Low to high</button>
        <button className="sortByAreaDesc" id="ah2l" onClick={(e)=>handlesort(e)}>Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      />
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Owner Name</th>
            <th>Address</th>
            <th>Area Code</th>
            <th>Rent</th>
            <th>Available For</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>-
          {displaydata(data)}
        </tbody>
      </table>
    </div>
  );
};

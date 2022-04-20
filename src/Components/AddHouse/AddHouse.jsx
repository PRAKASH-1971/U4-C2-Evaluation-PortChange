import { useState } from "react";
import "./AddHouse.css"

export const AddHouse = (props) => {
  const [formdata, setFormdata] = useState();

  const handleChange = (e) =>{
    const inputName = e.target.name;
    // checkbox
    if(e.target.type === 'checkbox'){
        console.log(e.target.checked);
        setFormdata({...formdata,[inputName]: e.target.checked });
    }else{
        setFormdata({ ...formdata,[inputName]: e.target.value });
    }
};
  
var cartArr = []
var cartArr = JSON.parse(localStorage.getItem("formitems")) || []

const handleSubmit = (e) =>{
  e.preventDefault();
  console.log(formdata);
  cartArr.push(formdata);
  localStorage.setItem("formitems",JSON.stringify(cartArr));
  console.log(cartArr)
  props.setHouse(false)
}

  return (
    <div className="addHouseContainer" onSubmit={handleSubmit}>
      <form>
        <label>name</label>
        <input type="text" className="name" value={formdata?.name} name="name" required onChange={handleChange}/>
        <br />
        <label>ownerName</label>
        <input value={formdata?.owmname} name="owmname" type="text" className="ownerName" required  onChange={handleChange}/>
        <br />
        <label>address</label>
        <input value={formdata?.address} name="address" type="text" className="address" required />
        <br onChange={handleChange}/>
        <label>areaCode</label>
        <input value={formdata?.pincode} name="pincode" type="text" className="areaCode" required onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input value={formdata?.rent} name="rent" type="number" className="rent" required onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={formdata?.checked} name="bachelor" type="checkbox" className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input checked={formdata?.checked} name="married" type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input value={formdata?.imgg} name="imgg" type="text" className="image" required onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" />
      </form>
    </div>
  );
};

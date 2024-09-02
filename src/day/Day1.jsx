import React from 'react'


//creating a list of static data to fetch in the UI.
const staticData = [
  'Apple',
  'Mango',
  'Orange',
  'Grapes',
];

const staticDataTwo = [{
  'Name': 'Pranjal Piya',
  'Address': 'Chitwan',
  'Age': '23',
  'Image': 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
{
  'Name': 'Siddhartha Tamang',
  'Address': 'Kathmandu',
  'Age': '24',
  'Image': 'https://images.pexels.com/photos/8173265/pexels-photo-8173265.jpeg'
},
{
  'Name': 'Maniraj Gurung',
  'Address': 'Palpa',
  'Age': '26',
  'Image': 'https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},
{
  'Name': 'Niraj Shrestha',
  'Address': 'Dolpa',
  'Age': '33',
  'Image': 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
},

]

const Day1 = () => {
  return (
    <div>
      <h1>Displaying List of static Data</h1>
      {/* Mapping the list of object.*/}
      <ul>{staticData.map((e) => {
        return <li><p>{e}</p></li>
      })}</ul>

      <h1>Displaying list with different objects and values</h1>
      <ul>{staticDataTwo.map((e) => {
        return <li>
          <p> <img alt='image' src={e['Image']} height={100} width={100}></img>  My name is {e['Name']}. I am {e['Age']} years old. I live in {e['Address']}</p></li>
      })}</ul>
    </div>
  )
}

export default Day1
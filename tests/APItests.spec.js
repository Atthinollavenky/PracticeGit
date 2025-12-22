const { test, expect } = require('@playwright/test');

test.only("Get users", async ({ request }) => {

     const response = await request.get('https://fakestoreapi.com/docs#tag/Products/operation/getAllProducts')
     console.log(await response.json())
     expect(response.status()).toBe(200)

})

test("Create user", async ({ request }) => {

     await request.post('https://fakestoreapi.com/users',{
          data:{

           address: {
      geolocation: [Object],
      city: 'Hyderabad',
      street: 'Ameerpet',
      number: 1432,
      zipcode: '503235'
           },
               id:11,
               email:"avnka@gmail.com",
               password:"avnka@123",
               name:{
                    firstname:"avnika",
                    lastname:"shivam"   
               },
               headers:{
                    "Accept":"application/json"
               }

          }
     });
     console.log(await response.json())
     expect(response.status()).toBe(201)
 }) 


test("Update user", async ({ request }) => {


})

test("Delete user", async ({ request }) => {


})




test("Get single user", async ({ request }) => {

     {





     };



})
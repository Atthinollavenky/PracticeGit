const{test, expect}= require('@playwright/test');

test('test1', async({page})=>{

    console.log('this is my Annotations test case');
})
//only
/*test.only('test2', async({page})=>{

    console.log('this is my second Annotations test case');
});*/
//skip
test.skip('test3', async({page})=>{

    console.log('this is my third Annotations test case');
});

test('test4', async({page, browserName})=>{              
    console.log('this is my fourth Annotations test case');
      if(browserName==='chromium')
      {
        test.skip()
      }
});

//Fixme
test('test5', async({page})=>{
      test.fixme() 
    console.log('this is my fifth Annotations test case');
});

test('test6', async({page, browserName})=>{              
     test.fail()
    console.log('this is my sixth Annotations test case');
    expect(1).toBe(2)  
})

test('test7', async({page, browserName})=>{              
      console.log('this is my seventh Annotations test case');   
      if(browserName==='chromium')
        {
            test.fail()
        }     
})

test('test8', async({page, browserName})=>{                
    console.log('this is my eighth Annotations test case');
    await page.goto('https://demoblaze.com/index.html')
})
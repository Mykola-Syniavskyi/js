 $(document).ready(function()
{
    
    var list_1 = $('<ol id="GOODS">')
    var list_2 = $('<ol id="BASKET">')
    list_1.appendTo('#main');
    list_2.appendTo('#basket');
    var btn_add= $('<button type ="button" class="btn_add">add</button>')
    var products=['irron ', 'screen ', 'cellphone '];
    
    

    function push_elements_to_main()
    {
        $(products).each(function(index, value)
        {
          // console.log( index+ value);
           var li = $('<li>');
           //var li_val= li.html(value);
           var li_val=li.html(value+(btn_add[0].outerHTML));
            //console.log(li_val);
           li.appendTo('#GOODS');
             $('.btn_add').on('click', function(){
                li_val.clone().appendTo('#BASKET');
            })

        })

        
       
    }
    

    push_elements_to_main();
    //create_basket();
})
  

    


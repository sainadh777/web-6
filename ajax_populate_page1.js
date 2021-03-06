/*  We load the global array proj4_data once, then use it as needed
    to retrieve product information.
    
    The Milk Chocolate handler is done the old-fashion way, with an 
    'onclick' call in the xhtml code.  The rest of the buttons have 
    handlers assigned the correct way.
    
    Alan Riggins
    CS545
    Fall 2017
*/    

var proj4_data;

$(document).ready(function() {
	var cart = new shopping_cart("jadrn074");
    proj4_data = new Array();
    $.get('/perl/jadrn074/get_products.cgi', storeData);
	
    
	$('#milk').on('click', function() {
        tmpString = "";
		tmpString += "<h2>Milk Chocolates</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Milk chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                tmpString += proj4_data[i][j] + "<br />";
			    tmpString += "<input type='number' "+"class='qty'  placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
                tmpString += "<span id='add'>Added to Cart</span><br />";                       
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
    $('#dark').on('click', function() {
        tmpString = "";
		tmpString += "<h2>Dark Chocolates</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Dark chocolate") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
				 tmpString += "<input type='number' "+"class='qty' size='8' placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
                 tmpString += "<span id='add'>Added to Cart</span><br />";                
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
        
    $('#nuts').on('click', function() {   
        tmpString = "";
		tmpString += "<h2>Nuts and Chews</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Nuts and chews") {  
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";                     
                for(var j=0; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
				 tmpString += "<input type='number' "+"class='qty' placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
				 tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
             tmpString += "<span id='add'>Added to Cart</span><br />";    			
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        }) 
        
    $('#brittle').on('click', function() {
        tmpString = "";
		tmpString += "<h2>Brittles and toffies</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Brittles and toffies") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
			 tmpString += "<input type='number' "+"class='qty'  placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
            tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
			 tmpString += "<span id='add'>Added to Cart</span><br />";    
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
		
	$('#truffles').on('click', function() {
        tmpString = "";
		tmpString += "<h2>Truffles</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Truffles") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
				 tmpString += "<input type='number' "+"class='qty' size='8' placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
                tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />"; 
            tmpString += "<span id='add'>Added to Cart</span><br />";    			
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
		
    $('#gifts').on('click', function() {
        tmpString = "";
		tmpString += "<h2>Gifts</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Gifts") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                    tmpString += proj4_data[i][j] + "<br />";
				 tmpString += "<input type='number' "+"class='qty'  placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
              tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
			tmpString += "<span id='add'>Added to Cart</span><br />";    		
			
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        })
    
    $('#holiday').on('click', function() {
        tmpString = "";
		tmpString += "<h2>Holiday Assortments</h2>";
        for(var i=0; i < proj4_data.length; i++) {
            if(proj4_data[i][1] == "Holiday assortments") {
            tmpString += "<img src=\"/~jadrn000/PROJ4_IMAGES/"+
                proj4_data[i][0]+".jpg\" alt=\""+proj4_data[i][2]+"\""+
                " width=\"200px\"  /><br />";            
                for(var j=0; j < proj4_data[i].length; j++)
                 tmpString += proj4_data[i][j] + "<br />";
				 tmpString += "<input type='number' "+"class='qty' size='8' placeholder='quantity' id='" + proj4_data[i][0]+"_qty' />";
               tmpString += "<input type='button' value='Add To Cart'"+
                "class='buy' id='" + proj4_data[i][0]+"' />";
            tmpString += "<span id='add'>Added to Cart</span><br />";    					
                }
            }
        var handle = document.getElementById('content');
        handle.innerHTML = tmpString;
        });
    	
$(document).on('click', ".buy", function() {  
        var sku = this.id;
		var qty="#"+sku+"_qty";
		var val= $(qty).val();
		var cost;
var sku1="#"+sku+"_err";

for(var i=0; i<proj4_data.length; i++)
	if(proj4_data[i][0]==sku)
	{
		cost=Math.round((proj4_data[i][6]*val)*100.0)/100.0;
		
	}
	
if(!isNaN(val) && !(val==""))
{
	   
        cart.add(sku,val,cost);
		
        $(this).next().fadeIn(50).fadeOut(2000);
		$('#count').text(cart.size());
        $(sku1).text(" ");

}
else
{
        $(sku1).text("enter valid Quantity");
}
	        });         
        $('#cart').on('click', function() {
        updateDisplay();

        })   


	
$('#content').on('click',$('input[type="button"]'), function(e) {
    if($(e.target).val() != 'Add to Cart') return;
    //alert("The SKU is " + $(e.target).attr("name"));
    });
                            	
		   });  
		
function storeData(response) {
    var tmpArray = explodeArray(response,';');
    for(var i=0; i < tmpArray.length; i++) {
        innerArray = explodeArray(tmpArray[i],'|');
        proj4_data[i] = innerArray;
        }
    }
 
// from http://www.webmasterworld.com/forum91/3262.htm            
function explodeArray(item,delimiter) {
tempArray=new Array(1);
var Count=0;
var tempString=new String(item);

while (tempString.indexOf(delimiter)>0) {
tempArray[Count]=tempString.substr(0,tempString.indexOf(delimiter));
tempString=tempString.substr(tempString.indexOf(delimiter)+1,tempString.length-tempString.indexOf(delimiter)+1);
Count=Count+1
}

tempArray[Count]=tempString;
return tempArray;

}     


	
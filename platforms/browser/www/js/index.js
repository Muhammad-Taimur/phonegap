/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


// ************************* Currency Convertor *************************






 var result = ""; //TO show the result
 var text = ""; //to store the user input amount
 
var http = new XMLHttpRequest();


http.onreadystatechange = (e) => {
    
    
    var response = http.responseText   //saving all the response in of api in var responce 
    var responseJSON = JSON.parse(response); //pasrsing it into JSON
    var data = responseJSON.quotes; //storing the quotes (object )in  var keys
    var keys = Object.keys(data); //accessing each key
    var quotesForView = ""; //this is for viewing


    text=document.getElementById('amount').value;  //Storing the user input 
    
    console.log(text);
        
    // Currency  is MULTIPLYING by the user input to convenrt the USD to EUR
    keys.forEach((element) =>{
        quotesForView = text+ " USD is equivalent to " + data['USDEUR']*text+" EUR"+ "<br>";
        
        });
        
        document.getElementById('result').innerHTML = quotesForView ; //shows the conversion
        
}

//get  the data from Api
http.open("GET", 'http://apilayer.net/api/live?access_key=bffef61329e7158c163c05c247224e03&currencies=USD,EUR&source=USD&format=1');
http.send();


                 // ****************EUR TO USD*******


                var text2 = ""; //to store the user input amount
                
               var http1 = new XMLHttpRequest();

               http1.onreadystatechange = (e) => {

                var response = http.responseText //saving all the response in of api in var responce 
                var responseJSON = JSON.parse(response); //pasrsing it into JSON
                var data = responseJSON.quotes;  //storing the quotes (object )in  var keys
                var keys = Object.keys(data);//accessing each key
                var quotesForView2 = ""; //this is for viewing
            
            
                text2=document.getElementById('amount2').value;
                
                console.log(text2);
                    
            

                // Currency  is divided by the user input to convenrt the EUR to USD
                keys.forEach((element) =>{
                    quotesForView2 = text2+ " EUR is equivalent to " + text2/data['USDEUR']+" USD"+ "<br>";
                    
                    });
                    
                    document.getElementById('result2').innerHTML = quotesForView2;
                    
            }


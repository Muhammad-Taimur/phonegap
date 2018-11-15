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






 var result = "";
 var text = ""; 
 
var http = new XMLHttpRequest();


http.onreadystatechange = (e) => {
    var response = http.responseText
    var responseJSON = JSON.parse(response);
    var data = responseJSON.quotes;
    var keys = Object.keys(data);
    var quotesForView = "";

    text=document.getElementById('amount').value;
    
    console.log(text);
        
    keys.forEach((element) =>{
        quotesForView = text+ " USD is equivalent to " + data['USDEUR']*text+" EUR"+ "<br>";
        
        });
        
        document.getElementById('result').innerHTML = quotesForView ;
}




                // ****************EUR TO USD*******


                var text2 = ""; 
                
               var http1 = new XMLHttpRequest();

               http1.onreadystatechange = (e) => {

            
            
                var response = http.responseText
                var responseJSON = JSON.parse(response);
                var data = responseJSON.quotes;
                var keys = Object.keys(data);
                var quotesForView2 = "";
            
            
                text2=document.getElementById('amount2').value;
                
                console.log(text2);
                    
                
                keys.forEach((element) =>{
                    quotesForView2 = text2+ " EUR is equivalent to " + data['USDUSD']*text2+" USD"+ "<br>";
                    
                    });
                    
                    document.getElementById('result2').innerHTML = quotesForView2;
                    
            }



            http.open("GET", 'http://apilayer.net/api/live?access_key=bffef61329e7158c163c05c247224e03&currencies=USD,EUR&source=USD&format=1');
            http.send();
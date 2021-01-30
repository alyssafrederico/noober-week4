async function pageLoaded() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write code to loop through the rides

       let outputElement = document.querySelector('.rides')
       let levelOfService

       for(let i=0; i<json.length; i++) {
      
         if(json[i].length>1) {levelOfService = 'Noober Pool'}
         else if(json[i][0].purpleRequested == true) {levelOfService = 'Noober Purple'}
         else if(json[i][0].numberOfPassengers>3) {levelOfService = 'Noober XL'}
         else {levelOfService = 'Noober X'}

        outputElement.insertAdjacentHTML('beforeend',`
        <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>${levelOfService}</span>`)

        for(let j=0; j<json[i].length; j++)
        { 

        let passengerName = json[i][j].passengerDetails.first + ' ' + json[i][j].passengerDetails.last
        let passengerPhone = json[i][j].passengerDetails.phoneNumber
        let passengers = json[i][j].numberOfPassengers
        let pickupaddresslineone = json[i][j].pickupLocation.address
        let pickupaddresslinetwo = json[i][j].pickupLocation.city + ',' + json[i][j].pickupLocation.state + ' ' + json[i][j].pickupLocation.zip
        let dropoffaddresslineone = json[i][j].dropoffLocation.address
        let dropoffaddresslinetwo = json[i][j].dropoffLocation.city + ',' + json[i][j].dropoffLocation.state + ' ' + json[i][j].dropoffLocation.zip

  if(levelOfService == 'Noober Pool') {

        outputElement.insertAdjacentHTML('beforeend',`
      </h1>
      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerName}</h2>
            <p class="font-bold text-gray-600">${passengerPhone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${passengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${pickupaddresslineone}</p>
            <p>${pickupaddresslinetwo}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${dropoffaddresslineone}</p>
            <p>${dropoffaddresslinetwo}</p>
          </div>
        </div>
      </div>
  
        `)} 
    
    else if  (levelOfService == 'Noober Purple') {
        outputElement.insertAdjacentHTML('beforeend',`
    </h1>
    <div class="border-4 border-purple-500 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-purple-600 text-white p-2">
           ${passengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupaddresslineone}</p>
          <p>${pickupaddresslinetwo}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffaddresslineone}</p>
          <p>${dropoffaddresslinetwo}</p>
        </div>
      </div>
    </div>
    `)}

       else if (levelOfService == 'Noober XL') {
        outputElement.insertAdjacentHTML('beforeend',`
      </h1>
     <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${passengerName}</h2>
            <p class="font-bold text-gray-600">${passengerPhone}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${passengers} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${pickupaddresslineone}</p>
            <p>${pickupaddresslinetwo}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${dropoffaddresslineone}</p>
            <p>${dropoffaddresslinetwo}</p>
          </div>
        </div>
      </div>
  `)}




     else {
        outputElement.insertAdjacentHTML('beforeend',`
    </h1>
   <div class="border-4 border-gray-900 p-4 my-4 text-left">
      <div class="flex">
        <div class="w-1/2">
          <h2 class="text-2xl py-1">${passengerName}</h2>
          <p class="font-bold text-gray-600">${passengerPhone}</p>
        </div>
        <div class="w-1/2 text-right">
          <span class="rounded-xl bg-gray-600 text-white p-2">
            ${passengers} passengers
          </span>
        </div>
      </div>
      <div class="mt-4 flex">
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">PICKUP</div>
          <p>${pickupaddresslineone}</p>
          <p>${pickupaddresslinetwo}</p>
        </div>
        <div class="w-1/2">
          <div class="text-sm font-bold text-gray-600">DROPOFF</div>
          <p>${dropoffaddresslineone}</p>
          <p>${dropoffaddresslinetwo}</p>
        </div>
      </div>
     </div>


       `)}
    
  
}}}
 window.addEventListener('DOMContentLoaded', pageLoaded)
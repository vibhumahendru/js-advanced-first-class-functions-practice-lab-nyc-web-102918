// Code your solution in this file!

const logDriverNames = function (drivers) {
 drivers.forEach(function(driver){
  console.log(driver.name);
})
}

const logDriversByHometown = function (drivers, homeTown) {
 drivers.forEach(function(driver){
   if (driver.hometown === homeTown){
  console.log(driver.name);
}
})
}


const driversByRevenue = function (drivers) {
  return drivers.slice().sort(function (driver1, driver2){
    return driver1.revenue - driver2.revenue
  })
}

const driversByName = function (drivers) {
   return drivers.slice().sort(function (driverOne, driverTwo){
     return driverOne.name.localeCompare(driverTwo.name);
   });
};


const totalRevenue = function (drivers) {

   return drivers.reduce(function (total, driver) {
     return driver.revenue + total;
   }, 0)

}

const averageRevenue = function (drivers) {
  return totalRevenue(drivers)/drivers.length

}

//
// const totalRevenue = function (drivers) {
//   return drivers.reduce(function (total, currentDriver) {
//     return currentDriver.revenue + total;
//   }, 0);
// };
//
// const averageRevenue = function (drivers) {
//   return totalRevenue(drivers) / drivers.length;
// };

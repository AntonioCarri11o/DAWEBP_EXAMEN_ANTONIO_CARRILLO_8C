const vehicles = [
    {"marca": "Toyota", "modelo": "Camry", "year": 2020, "numero_serie": "ABCD123-00EF"},
    {"marca": "Honda", "modelo": "Civic", "year": 2019, "numero_serie": "WXYZ456-00GH"},
    {"marca": "Ford", "modelo": "Mustang", "year": 2021, "numero_serie": "IJKL789-00MN"},
    {"marca": "Chevrolet", "modelo": "Malibu", "year": 2018, "numero_serie": "QRST234-00OP"},
    {"marca": "Nissan", "modelo": "Altima", "year": 2022, "numero_serie": "UVWX567-00AB"},
    {"marca": "BMW", "modelo": "X5", "year": 2020, "numero_serie": "YZAB890-00CD"},
    {"marca": "Mercedes-Benz", "modelo": "E-Class", "year": 2019, "numero_serie": "EFGH123-00IJ"},
    {"marca": "Audi", "modelo": "A4", "year": 2021, "numero_serie": "KLMN456-00OP"},
    {"marca": "Hyundai", "modelo": "Sonata", "year": 2017, "numero_serie": "QRST789-00UV"},
    {"marca": "Kia", "modelo": "Optima", "year": 2022, "numero_serie": "WXYZ012-00EF"},
    {"marca": "Volkswagen", "modelo": "Passat", "year": 2018, "numero_serie": "IJKL345-00GH"},
    {"marca": "Subaru", "modelo": "Outback", "year": 2020, "numero_serie": "MNOP678-00QR"},
    {"marca": "Tesla", "modelo": "Model 3", "year": 2021, "numero_serie": "STUV901-00WX"},
    {"marca": "Mazda", "modelo": "Mazda3", "year": 2019, "numero_serie": "YZAB234-00CD"},
    {"marca": "Jeep", "modelo": "Grand Cherokee", "year": 2022, "numero_serie": "EFGH567-00IJ"},
    {"marca": "Chrysler", "modelo": "300", "year": 2018, "numero_serie": "KLMN890-00OP"},
    {"marca": "Lexus", "modelo": "RX", "year": 2017, "numero_serie": "QRST012-00UV"},
    {"marca": "Infiniti", "modelo": "Q50", "year": 2020, "numero_serie": "WXYZ345-00EF"},
    {"marca": "Acura", "modelo": "TLX", "year": 2021, "numero_serie": "IJKL678-00GH"},
    {"marca": "Land Rover", "modelo": "Range Rover", "year": 2019, "numero_serie": "MNOP901-00QR"},
    {"marca": "Volvo", "modelo": "S60", "year": 2018, "numero_serie": "STUV234-00WX"},
    {"marca": "Buick", "modelo": "Regal", "year": 2022, "numero_serie": "YZAB567-00CD"},
    {"marca": "Jaguar", "modelo": "XE", "year": 2017, "numero_serie": "EFGH890-00IJ"},
    {"marca": "Ram", "modelo": "1500", "year": 2020, "numero_serie": "KLMN012-00OP"},
    {"marca": "GMC", "modelo": "Acadia", "year": 2021, "numero_serie": "QRST345-00UV"},
    {"marca": "Cadillac", "modelo": "CTS", "year": 2019, "numero_serie": "WXYZ678-00EF"},
    {"marca": "Porsche", "modelo": "911", "year": 2018, "numero_serie": "IJKL901-00GH"},
    {"marca": "Mitsubishi", "modelo": "Outlander", "year": 2022, "numero_serie": "MNOP234-00QR"},
    {"marca": "Lincoln", "modelo": "Navigator", "year": 2020, "numero_serie": "STUV567-00WX"},
    {"marca": "Mini", "modelo": "Cooper", "year": 2017, "numero_serie": "YZAB890-00CD"},
    {"marca": "Fiat", "modelo": "500", "year": 2019, "numero_serie": "EFGH012-00IJ"},
    {"marca": "Smart", "modelo": "Fortwo", "year": 2021, "numero_serie": "KLMN345-00OP"},
    {"marca": "Alfa Romeo", "modelo": "Giulia", "year": 2018, "numero_serie": "QRST678-00UV"},
    {"marca": "Dodge", "modelo": "Charger", "year": 2022, "numero_serie": "WXYZ901-00EF"},
    {"marca": "Bentley", "modelo": "Continental GT", "year": 2020, "numero_serie": "IJKL234-00GH"},
    {"marca": "Maserati", "modelo": "Ghibli", "year": 2017, "numero_serie": "MNOP567-00QR"},
    {"marca": "Ferrari", "modelo": "488", "year": 2019, "numero_serie": "STUV890-00WX"},
    {"marca": "Lamborghini", "modelo": "Huracán", "year": 2021, "numero_serie": "YZAB012-00CD"},
    {"marca": "Bugatti", "modelo": "Chiron", "year": 2018, "numero_serie": "EFGH345-00IJ"},
    {"marca": "Aston Martin", "modelo": "DB11", "year": 2022, "numero_serie": "KLMN678-00OP"},
    {"marca": "Rolls-Royce", "modelo": "Phantom", "year": 2020, "numero_serie": "QRST901-00UV"},
    {"marca": "McLaren", "modelo": "720S", "year": 2017, "numero_serie": "WXYZ234-00EF"},
    {"marca": "Lotus", "modelo": "Evora", "year": 2019, "numero_serie": "IJKL567-00GH"},
    {"marca": "Jaguar", "modelo": "F-Type", "year": 2021, "numero_serie": "MNOP890-00QR"},
    {"marca": "Land Rover", "modelo": "Defender", "year": 2018, "numero_serie": "STUV012-00WX"},
    {"marca": "Tesla", "modelo": "Model S", "year": 2022, "numero_serie": "YZAB345-00CD"},
    {"marca": "Lexus", "modelo": "LC", "year": 2020, "numero_serie": "EFGH678-00IJ"},
    {"marca": "Audi", "modelo": "Q7", "year": 2017, "numero_serie": "KLMN901-00OP"},
    {"marca": "Mazda", "modelo": "CX-5", "year": 2019, "numero_serie": "QRST234-00UV"},
    {"marca": "Volvo", "modelo": "XC90", "year": 2021, "numero_serie": "WXYZ567-00EF"},
    {"marca": "Subaru", "modelo": "Forester", "year": 2018, "numero_serie": "IJKL890-00GH"},
    {"marca": "Buick", "modelo": "Encore", "year": 2022, "numero_serie": "MNOP012-00QR"},
    {"marca": "GMC", "modelo": "Terrain", "year": 2020, "numero_serie": "STUV345-00WX"},
    {"marca": "Chevrolet", "modelo": "Equinox", "year": 2017, "numero_serie": "YZAB678-00CD"},
    {"marca": "Ford", "modelo": "Escape", "year": 2019, "numero_serie": "EFGH901-00IJ"},
    {"marca": "Jeep", "modelo": "Wrangler", "year": 2021, "numero_serie": "KLMN234-00OP"},
    {"marca": "Chrysler", "modelo": "Pacifica", "year": 2018, "numero_serie": "QRST567-00UV"},
    {"marca": "Nissan", "modelo": "Rogue", "year": 2022, "numero_serie": "WXYZ890-00EF"},
    {"marca": "Hyundai", "modelo": "Kona", "year": 2020, "numero_serie": "IJKL012-00GH"},
    {"marca": "Kia", "modelo": "Sportage", "year": 2017, "numero_serie": "MNOP345-00QR"},
    {"marca": "Volkswagen", "modelo": "Tiguan", "year": 2019, "numero_serie": "STUV678-00WX"}
  ]
const setVehicles = function() {
    const haveVehicles = localStorage.getItem('vehicles') != '' && localStorage.getItem('vehicles') != undefined && localStorage.getItem('vehicles') != null;
    if (!haveVehicles) {
        localStorage.setItem('vehicles', JSON.stringify(vehicles));
    }
}
const addVehicle = function(vehicle) {
    const data = JSON.parse(localStorage.getItem('vehicles'))
    data.push(vehicle);
    localStorage.setItem('vehicles', JSON.stringify(data));
}
const getVehicles = function() {
    const data = JSON.parse(localStorage.getItem('vehicles'))
    return data;
};

export default {
    getVehicles,
    addVehicle,
    setVehicles,
}


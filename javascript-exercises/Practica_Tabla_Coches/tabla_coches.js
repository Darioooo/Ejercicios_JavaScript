const coches =[
    {marca:"Pontiac",modelo:"GTO",año:1970,TipoTarjetaCredito:"instapayment"},
    {marca:"Lamborghini",modelo:"Gallardo",año:2005,TipoTarjetaCredito:"visa"},
    {marca:"Mercedes-Benz",modelo:"E-Class",año:2006,TipoTarjetaCredito:"instapayment"},
    {marca:"Chrysler",modelo:"PT Cruiser",año:2006,TipoTarjetaCredito:"visa-electron"},
    {marca:"Chrysler",modelo:"Town & Country",año:2005,TipoTarjetaCredito:"bankcard"},
    {marca:"Kia",modelo:"Spectra",año:2005,TipoTarjetaCredito:"visa-electron"},
    {marca:"GMC",modelo:"Savana 3500",año:2007,TipoTarjetaCredito:"bankcard"},
    {marca:"Eagle",modelo:"Summit",año:1995,TipoTarjetaCredito:"bankcard"},
    {marca:"Dodge",modelo:"Grand Caravan",año:2008,TipoTarjetaCredito:"visa"},
    {marca:"Hyundai",modelo:"Veracruz",año:2009,TipoTarjetaCredito:"bankcard"},
    {marca:"Dodge",modelo:"Caravan",año:1993,TipoTarjetaCredito:"mastercard"},
    {marca:"Chevrolet",modelo:"Cavalier",año:2002,TipoTarjetaCredito:"bankcard"},
    {marca:"Chevrolet",modelo:"Blazer",año:1994,TipoTarjetaCredito:"visa"},
    {marca:"Mitsubishi",modelo:"Lancer",año:2002,TipoTarjetaCredito:"bankcard"},
    {marca:"Suzuki",modelo:"Aerio",año:2007,TipoTarjetaCredito:"visa-electron"},
    {marca:"BMW",modelo:"5 Series",año:2008,TipoTarjetaCredito:"instapayment"},
    {marca:"GMC",modelo:"Acadia",año:2009,TipoTarjetaCredito:"visa-electron"},
    {marca:"Acura",modelo:"RL",año:2001,TipoTarjetaCredito:"bankcard"},
    {marca:"Mazda",modelo:"MX-5",año:2007,TipoTarjetaCredito:"visa-electron"},
    {marca:"Jeep",modelo:"Cherokee",año:2001,TipoTarjetaCredito:"instapayment"},
    {marca:"Honda",modelo:"Civic",año:1989,TipoTarjetaCredito:"bankcard"},
    {marca:"Mitsubishi",modelo:"Pajero",año:2004,TipoTarjetaCredito:"bankcard"},
    {marca:"Suzuki",modelo:"Daewoo Magnus",año:2005,TipoTarjetaCredito:"bankcard"},
    {marca:"Nissan",modelo:"Pathfinder",año:2003,TipoTarjetaCredito:"visa"},
    {marca:"Chevrolet",modelo:"Astro",año:2004,TipoTarjetaCredito:"visa"},
    {marca:"Toyota",modelo:"MR2",año:2001,TipoTarjetaCredito:"mastercard"},
    {marca:"Ford",modelo:"Laser",año:1989,TipoTarjetaCredito:"visa-electron"},
    {marca:"Chevrolet",modelo:"2500",año:1997,TipoTarjetaCredito:"visa"},
    {marca:"Nissan",modelo:"Sentra",año:2001,TipoTarjetaCredito:"visa-electron"},
    {marca:"Hyundai",modelo:"XG350",año:2003,TipoTarjetaCredito:"mastercard"},
    {marca:"Volkswagen",modelo:"GTI",año:2012,TipoTarjetaCredito:"instapayment"},
    {marca:"Mercedes-Benz",modelo:"300SL",año:1993,TipoTarjetaCredito:"visa"},
    {marca:"Toyota",modelo:"Sequoia",año:2004,TipoTarjetaCredito:"visa-electron"},
    {marca:"Suzuki",modelo:"Forenza",año:2004,TipoTarjetaCredito:"instapayment"},
    {marca:"Ford",modelo:"Explorer",año:1997,TipoTarjetaCredito:"mastercard"},
    {marca:"Nissan",modelo:"Sentra",año:2009,TipoTarjetaCredito:"visa-electron"},
    {marca:"Mazda",modelo:"CX-7",año:2012,TipoTarjetaCredito:"mastercard"},
    {marca:"Dodge",modelo:"Ram 3500",año:2006,TipoTarjetaCredito:"visa-electron"},
    {marca:"Mercedes-Benz",modelo:"G-Class",año:2007,TipoTarjetaCredito:"visa-electron"},
    {marca:"Nissan",modelo:"Rogue",año:2011,TipoTarjetaCredito:"bankcard"},
    {marca:"Dodge",modelo:"Ram 2500",año:1995,TipoTarjetaCredito:"bankcard"},
    {marca:"Lexus",modelo:"IS F",año:2011,TipoTarjetaCredito:"bankcard"},
    {marca:"Toyota",modelo:"TundraMax",año:2010,TipoTarjetaCredito:"instapayment"},
    {marca:"GMC",modelo:"Savana",año:2009,TipoTarjetaCredito:"visa-electron"},
    {marca:"Mitsubishi",modelo:"Chariot",año:1989,TipoTarjetaCredito:"visa"},
    {marca:"Hyundai",modelo:"Veracruz",año:2011,TipoTarjetaCredito:"visa"},
    {marca:"Mercedes-Benz",modelo:"C-Class",año:1993,TipoTarjetaCredito:"visa"},
    {marca:"Buick",modelo:"Regal",año:1989,TipoTarjetaCredito:"visa"},
    {marca:"Mazda",modelo:"626",año:1999,TipoTarjetaCredito:"mastercard"},
    {marca:"BMW",modelo:"M6",año:2006,TipoTarjetaCredito:"instapayment"}
];

document.addEventListener('DOMContentLoaded', function() {
    let body = document.getElementsByTagName('body')[0];

    let myTable = document.createElement('table');
    body.appendChild(myTable);

    let rowHead = document.createElement('tr');
    myTable.appendChild(rowHead);

    let colH_A = document.createElement('th');
    let colH_B = document.createElement('th');
    let colH_C = document.createElement('th');
    let colH_D = document.createElement('th');
    
    colH_A.textContent = 'MARCA';
    colH_B.textContent = 'MODELO';
    colH_C.textContent = 'AÑO';
    colH_D.textContent = 'FORMA DE PAGO';
    
    rowHead.appendChild(colH_A);
    rowHead.appendChild(colH_B);
    rowHead.appendChild(colH_C);
    rowHead.appendChild(colH_D);
       
    coches.forEach(coche => {
        row = document.createElement('tr');
        myTable.appendChild(row);
        
        let colA = document.createElement('td');
        let colB = document.createElement('td');
        let colC = document.createElement('td');
        let colD = document.createElement('td');
        
        row.appendChild(colA);
        row.appendChild(colB);
        row.appendChild(colC);
        row.appendChild(colD);
        
        colA.textContent = coche.marca;
        colB.textContent = coche.modelo;
        colC.textContent = coche.año;
        colD.textContent = coche.TipoTarjetaCredito;
       
    });
});
    console.log(coches.length);

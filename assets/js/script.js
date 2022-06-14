//Cuadro correspontiende a Consulta Radiología
let consultaR = [{
    hora: '11:00',
    especialista: 'IGNACIO SCHULZ',
    paciente: 'FRANCISCA ROJAS',
    rut: '9878782-1',
    prevision: 'FONASA',
},
{
    hora: '11:30',
    especialista: 'FEDERICO SUBERCASEAUX',
    paciente: 'PAMELA ESTRADA',
    rut: '15345241-3',
    prevision: 'ISAPRE',
},
{
    hora: '15:00',
    especialista: 'FERNANDO WURTHZ',
    paciente: 'ARMANDO LUNA',
    rut: '16445345-9',
    prevision: 'ISAPRE',
},
{
    hora: '15:30',
    especialista: 'ANA MARIA GODOY',
    paciente: 'MANUEL GODOY',
    rut: '17666419-0',
    prevision: 'FONASA',
},
{
    hora: '16:00',
    especialista: 'PATRICIA SUAZO',
    paciente: 'RAMON ULLOA',
    rut: '14989389-K',
    prevision: 'FONASA',
},
];

var texto = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
for (var i = 0; i < consultaR.length; i++) {
    texto += `<tr>
                    <td>${consultaR[i].hora}</td>
                    <td>${consultaR[i].especialista}</td>
                    <td>${consultaR[i].paciente}</td>
                    <td>${consultaR[i].rut}</td>
                    <td>${consultaR[i].prevision}</td>
                </tr>`;
}
document.getElementById("cuerpo-tabla").innerHTML = texto;
document.write("<br>");
document.getElementById("radiologia").innerHTML = (`<strong>Primera atencion: </strong>${consultaR[0].paciente} - ${consultaR[0].prevision} | 
                        <strong>Última atencion: </strong>${consultaR[4].paciente} - ${consultaR[4].prevision}`);

//Cuadro correspontiende a Consulta Traumatología
let consultaT = [{
    hora: '8:00',
    especialista: 'MARIA PAZ ALTUZARRA',
    paciente: 'PAULA SANCHEZ',
    rut: '15554774-5',
    prevision: 'FONASA',
},
{
    hora: '10:00',
    especialista: 'RAUL ARAYA',
    paciente: 'ANGÉLICA NAVAS',
    rut: '15444147-9',
    prevision: 'ISAPRE',
},
{
    hora: '10:30',
    especialista: 'MARIA ARRIAGADA',
    paciente: 'ANA KLAPP',
    rut: '17879423-9',
    prevision: 'ISAPRE',
},
{
    hora: '11:00',
    especialista: 'ALEJANDRO BADILLA',
    paciente: 'FELIPE MARDONES',
    rut: '1547423-6',
    prevision: 'ISAPRE',
},
{
    hora: '11:30',
    especialista: 'CECILIA BUDNIK',
    paciente: 'DIEGO MARRE',
    rut: '16554741-K',
    prevision: 'FONASA',
},
{
    hora: '12:00',
    especialista: 'ARTURO CAVAGNARO',
    paciente: 'CECILIA MENDEZ',
    rut: '9747535-8',
    prevision: 'ISAPRE',
},
{
    hora: '12:30',
    especialista: 'ANDRES KANACRI',
    paciente: 'MARCIAL SUAZO',
    rut: '11254785-5',
    prevision: 'ISAPRE',
},
];

var texto = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
for (var i = 0; i < consultaT.length; i++) {
    texto += `<tr>
                    <td>${consultaT[i].hora}</td>
                    <td>${consultaT[i].especialista}</td>
                    <td>${consultaT[i].paciente}</td>
                    <td>${consultaT[i].rut}</td>
                    <td>${consultaT[i].prevision}</td>
                </tr>`;
}
document.getElementById("cuerpo-tabla2").innerHTML = texto;
document.write("<br>");
document.getElementById("traumatologia").innerHTML = (`<strong>Primera atencion: </strong>${consultaT[0].paciente} - ${consultaT[0].prevision} | 
                        <strong>Última atencion: </strong>${consultaT[6].paciente} - ${consultaT[6].prevision}`);

//Cuadro correspontiende a Consulta Dental
let consultaD = [{
    hora: '8:30',
    especialista: 'ANDREA ZUÑIGA',
    paciente: 'MARCELA RETAMAL',
    rut: '11123425-6',
    prevision: 'ISAPRE',
},
{
    hora: '11:00',
    especialista: 'MARIA PIA ZAÑARTU',
    paciente: 'ANGEL MUÑOZ',
    rut: '9878789-2',
    prevision: 'ISAPRE',
},
{
    hora: '11:30',
    especialista: 'SCARLETT WITTING',
    paciente: 'MARIO KAST',
    rut: '7998789-5',
    prevision: 'FONASA',
},
{
    hora: '13:00',
    especialista: 'FRANCISCO VON TEUBER',
    paciente: 'KARIN FERNANDEZ',
    rut: '18887662-K',
    prevision: 'FONASA',
},
{
    hora: '13:30',
    especialista: 'EDUARDO VIÑUELA',
    paciente: 'HUGO SANCHEZ',
    rut: '17665461-4',
    prevision: 'FONASA',
},
{
    hora: '14:00',
    especialista: 'RAQUEL VILLASECA',
    paciente: 'ANA SEPULVEDA',
    rut: '14441281-0',
    prevision: 'ISAPRE',
},
];

var texto = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
for (var i = 0; i < consultaD.length; i++) {
    texto += `<tr>
                    <td>${consultaD[i].hora}</td>
                    <td>${consultaD[i].especialista}</td>
                    <td>${consultaD[i].paciente}</td>
                    <td>${consultaD[i].rut}</td>
                    <td>${consultaD[i].prevision}</td>
                </tr>`;
}
document.getElementById("cuerpo-tabla3").innerHTML = texto;
document.write("<br>");
document.getElementById("dental").innerHTML = (`<strong>Primera atencion: </strong>${consultaD[0].paciente} - ${consultaD[0].prevision} | 
                        <strong>Última atencion: </strong>${consultaD[5].paciente} - ${consultaD[5].prevision}`);
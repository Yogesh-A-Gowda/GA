
var data={};
var dat=[];

if (window.localStorage.getItem("data1") == null) {
    window.localStorage.setItem("data1", encodeURI(JSON.stringify(data)));
}

function save(){
    data = JSON.parse(decodeURI(window.localStorage.getItem("data1")));
    prsn=document.getElementById('name').value;
    phno=document.getElementById('phno').value;
    email=document.getElementById('email').value;
    usn=document.getElementById('usn').value;
    addr=document.getElementById('addr').value;
    wc=document.getElementById('wc').value;
    dat.push(prsn);
    dat.push(phno);
    dat.push(email);
    dat.push(addr);
    dat.push(wc);
    data[usn]=dat;
    dat=[];
    document.getElementById('name').value='';
    document.getElementById('phno').value='';
    document.getElementById('email').value='';
    document.getElementById('usn').value='';
    document.getElementById('addr').value='';
    document.getElementById('wc').value='';
    window.localStorage.setItem("data1", encodeURI(JSON.stringify(data)));
    document.getElementById('success').innerHTML='Submitted Successfully';
}

function findx(){
    document.getElementById('results').innerHTML="";
    ser=document.getElementById('ser').value;
    let d = JSON.parse(decodeURI(window.localStorage.getItem("data1")));
    document.getElementById('ser').value='';
    for(i in d){
            if(i==ser){
            let z= d[i];
            document.getElementById('results').innerHTML=("<p class='res'>"+"<br>"+"USN: "+i+"<br>"+"Name: "+z[0]+"<br>"+"Phone: "+z[1]+"<br>"+"Email: "+z[2]+"<br>"+"Address: "+z[3]+"<br>"+"Company: "+z[4]+"</p>");
            
        }
    }
}

function sa(){
    let d = JSON.parse(decodeURI(window.localStorage.getItem("data1")));
    document.getElementById('bod0').style.visibility='hidden';
    document.getElementById('bod1').style.visibility='visible';
    for(i in d){
        let z= d[i];
        s="<p class='showal'>"+"<br>"+"USN: "+i+"<br>"+"Name: "+z[0]+"<br>"+"Phone: "+z[1]+"<br>"+"Email: "+z[2]+"<br>"+"Address: "+z[3]+"<br>"+"Company: "+z[4]+"</p>"
        $('#show-panel').append(s);  
    }
}

function hm(){
    document.getElementById('show-panel').innerHTML="";
    document.getElementById('bod0').style.visibility='visible';
    document.getElementById('bod1').style.visibility='hidden';
}

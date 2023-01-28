function enterInTable(){
    const countArrayLength= document.getElementsByClassName('srno').length;
    const count=countArrayLength+1;
    const first = document.getElementById('first').value;
    const last = document.getElementById('last').value;
    const contact = document.getElementById('contact').value;

    const tableElem=document.getElementById('table');
    const trElem=document.createElement('tr');
    const snoEle= document.createElement('td');
    const nameEle = document.createElement('td');
    const contactEle = document.createElement('td');
    const delEle = document.createElement('td');
    const name=first+" "+ last;

    snoEle.classList.add('srno');
    delEle.classList.add('del');
    trElem.classList.add("tableRow");
    delEle.onclick=function(){delFunc()};

    snoEle.innerHTML = count;
    nameEle.innerHTML = name;
    contactEle.innerHTML = contact;
    delEle.innerHTML='x';

    trElem.appendChild(snoEle);
    trElem.appendChild(nameEle);
    trElem.appendChild(contactEle);
    trElem.appendChild(delEle);

    tableElem.appendChild(trElem);
}


let arrayLength= document.getElementsByClassName('srno').length;

function delFunc(){
    for(let i=0;i<arrayLength;i++){
        document.getElementsByClassName("del")[i].addEventListener('click',function(){
            alert("Do you want to delete this row?");
            document.getElementsByClassName('tableRow')[i].remove();
        });
    }
}



function search() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }







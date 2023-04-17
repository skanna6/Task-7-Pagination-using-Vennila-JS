async function pagination() {
  try {
    const details = await fetch(
      "https://gist.githubusercontent.com/techieeycamp/85884f4327effa2cb7677d3d15964104/raw/465fda01beaeff7170aae3327c4c61e1a09bc16d/pagination.json"
    );
    const res = await details.json();
    const tbody = document.querySelector("tbody");
    const npimg = document.querySelectorAll('img');
    const buttons = document.querySelectorAll('button');


    function oneten(){
      if (tbody.innerHTML.length > 0) {
        tbody.innerHTML = "";

        res.filter((datas) => {
          if (datas.id <= 10) {
            const tr = document.createElement("tr");
            const td = document.createElement("td");
            const td1 = document.createElement("td");
            const td2 = document.createElement("td");

            td.innerText = datas.id;
            td1.innerText = datas.email;
            td2.innerText = datas.name;
            tr.append(td, td1, td2);
            tbody.append(tr);
          }
        });
      }

    };

    oneten();
    
    npimg[0].addEventListener('click', oneten)

    buttons[0].addEventListener('click', oneten)


    function tentwenty(){
        if (tbody.innerHTML.length > 0) {
          tbody.innerHTML = "";
  
          res.filter((datas) => {
            if (datas.id > 10 && datas.id <=20) {
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              const td1 = document.createElement("td");
              const td2 = document.createElement("td");
  
              td.innerText = datas.id;
              td1.innerText = datas.email;
              td2.innerText = datas.name;
              tr.append(td, td1, td2);
              tbody.append(tr);
            }
          });
        }
  
      };

      buttons[1].addEventListener('click', tentwenty)

      function twentythirty(){
        if (tbody.innerHTML.length > 0) {
          tbody.innerHTML = "";
  
          res.filter((datas) => {
            if (datas.id > 20 && datas.id <=30) {
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              const td1 = document.createElement("td");
              const td2 = document.createElement("td");
  
              td.innerText = datas.id;
              td1.innerText = datas.email;
              td2.innerText = datas.name;
              tr.append(td, td1, td2);
              tbody.append(tr);
            }
          });
        }
  
      };

      buttons[2].addEventListener('click', twentythirty)

      function thirtyfourty(){
        if (tbody.innerHTML.length > 0) {
          tbody.innerHTML = "";
  
          res.filter((datas) => {
            if (datas.id > 30 && datas.id <=40) {
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              const td1 = document.createElement("td");
              const td2 = document.createElement("td");
  
              td.innerText = datas.id;
              td1.innerText = datas.email;
              td2.innerText = datas.name;
              tr.append(td, td1, td2);
              tbody.append(tr);
            }
          });
        }
  
      };

      buttons[3].addEventListener('click', thirtyfourty)

      function fourtyfifty(){
        if (tbody.innerHTML.length > 0) {
          tbody.innerHTML = "";
  
          res.filter((datas) => {
            if (datas.id > 40 && datas.id <=50) {
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              const td1 = document.createElement("td");
              const td2 = document.createElement("td");
  
              td.innerText = datas.id;
              td1.innerText = datas.email;
              td2.innerText = datas.name;
              tr.append(td, td1, td2);
              tbody.append(tr);
            }
          });
        }
  
      };

      buttons[4].addEventListener('click', fourtyfifty)

      function fiftysixty(){
        if (tbody.innerHTML.length > 0) {
          tbody.innerHTML = "";
  
          res.filter((datas) => {
            if (datas.id > 50 && datas.id <=60) {
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              const td1 = document.createElement("td");
              const td2 = document.createElement("td");
  
              td.innerText = datas.id;
              td1.innerText = datas.email;
              td2.innerText = datas.name;
              tr.append(td, td1, td2);
              tbody.append(tr);
            }
          });
        }
  
      };

      buttons[5].addEventListener('click', fiftysixty)


      function sixtyseventy(){
        if (tbody.innerHTML.length > 0) {
          tbody.innerHTML = "";
  
          res.filter((datas) => {
            if (datas.id > 60 && datas.id <=70) {
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              const td1 = document.createElement("td");
              const td2 = document.createElement("td");
  
              td.innerText = datas.id;
              td1.innerText = datas.email;
              td2.innerText = datas.name;
              tr.append(td, td1, td2);
              tbody.append(tr);
            }
          });
        }
  
      };

      buttons[6].addEventListener('click', sixtyseventy)

      function seventyeighty(){
        if (tbody.innerHTML.length > 0) {
          tbody.innerHTML = "";
  
          res.filter((datas) => {
            if (datas.id > 70 && datas.id <=80) {
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              const td1 = document.createElement("td");
              const td2 = document.createElement("td");
  
              td.innerText = datas.id;
              td1.innerText = datas.email;
              td2.innerText = datas.name;
              tr.append(td, td1, td2);
              tbody.append(tr);
            }
          });
        }
  
      };

      buttons[7].addEventListener('click', seventyeighty)

      function eightyninety(){
        if (tbody.innerHTML.length > 0) {
          tbody.innerHTML = "";
  
          res.filter((datas) => {
            if (datas.id > 80 && datas.id <=90) {
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              const td1 = document.createElement("td");
              const td2 = document.createElement("td");
  
              td.innerText = datas.id;
              td1.innerText = datas.email;
              td2.innerText = datas.name;
              tr.append(td, td1, td2);
              tbody.append(tr);
            }
          });
        }
  
      };

      buttons[8].addEventListener('click', eightyninety)

      function ninetyhund(){
        if (tbody.innerHTML.length > 0) {
          tbody.innerHTML = "";
  
          res.filter((datas) => {
            if (datas.id > 90 && datas.id <=100) {
              const tr = document.createElement("tr");
              const td = document.createElement("td");
              const td1 = document.createElement("td");
              const td2 = document.createElement("td");
  
              td.innerText = datas.id;
              td1.innerText = datas.email;
              td2.innerText = datas.name;
              tr.append(td, td1, td2);
              tbody.append(tr);
            }
          });
        }
  
      };

      buttons[9].addEventListener('click', ninetyhund)
      npimg[1].addEventListener('click', ninetyhund)


      function nextbut(){
        
      }

  }
  
  
  catch (err) {
    console.log(err);
  }
}
pagination();

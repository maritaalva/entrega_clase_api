window.onload = () => {
    let numPage = 1;
    let idUser = 1;
    let btnp1 = document.querySelector("#pag1");
    let btnp2 = document.querySelector("#pag2");
    let lista = document.querySelector("#usuarios");
    //let url = `https://reqres.in/api/users/${idUser}`;
    cargarDatos(`https://reqres.in/api/users/${idUser}`);

    btnp1.addEventListener("click",()=>{
      numPage = 1;
      cargarDatos(`https://reqres.in/api/users?page=${numPage}`);
    })
    btnp2.addEventListener("click",()=>{
      numPage = 2;
      cargarDatos(`https://reqres.in/api/users?page=${numPage}`);
    })

    function cargarDatos(url){
      lista.innerHTML = "";
      
      fetch(url)
      .then(res => res.json())
      .then(res => {

        let data = res.data;

        //console.log(data)

        //let lista = document.querySelector("#usuarios");
        //data.sort((a, b) => a.first_name.localeCompare(b.first_name));
        if (Array.isArray(data)){
          data.forEach((user) => {
            let avatar = `https://source.boringavatars.com/bauhaus/50/${user.first_name}%20${user.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
            let item=`<li class="user">
                      <img src="${avatar}" alt="${user.first_name} "/>
                      <span class="name">${user.first_name}</span>
                      <span class="surname"> ${user.last_name} </span>
                      </li>`;
          lista.innerHTML += item;
        });
        }else{

          console.log(data.first_name)
          let avatar = `https://source.boringavatars.com/bauhaus/50/${data.first_name}%20${data.last_name}?colors=264653,2a9d8f,e9c46a,f4a261,e76f51`;
          let item=`<li class="user">
                    <img src="${avatar}" alt="${data.first_name} "/>
                    <span class="name">${data.first_name}</span>
                    <span class="surname"> ${data.last_name} </span>
                    </li>`;
          lista.innerHTML += item;



          // buscadorBtn.addEventListener("click",()=>{
          //   idUser = 1;
          //   cargarDatos(`https://reqres.in/api/users?page=${numPage}`);
          // })
          let textoUsuario = document.querySelector("#buscadorUsuario");

          document.querySelector('#buscadorBtn').onclick = function(){
            console.log(textoUsuario.value)
            let valorTexto = textoUsuario.value;
            if(textoUsuario.value == ''){
                alert("no has escrito nada(⊙ˍ⊙)")
            }
            else{
              if(Number(valorTexto)){
                if(valorTexto>0 && valorTexto<13){
                  document.querySelector("input").value = "";
                  cargarDatos(`https://reqres.in/api/users/${valorTexto}`);
                }else{
                  alert("ese usuario no existe, inténtalo otra vez ~(>_<。)＼")
                }
              
              }else{
                alert("solo se pueden introducir números para la búsqueda (#｀-_ゝ-)")
              }}
            }}
        
      })
      
      // .then(() => {
      //     let monkeyList = new List('test-list', {
      //         valueNames: ['name', 'surname']
      //       });
      // });
    }
    

}


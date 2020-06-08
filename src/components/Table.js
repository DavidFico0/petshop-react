import React from 'react';

function Table(){
    const listaNomes = [
        {id:1, nome:'Mark', genero:'Masculino', idade:48}, 
        {id:2, nome:'Jane', genero:'Feminino', idade:32}, 
        {id:3, nome:'Mara', genero:'Feminino', idade:12},
        {id:4, nome:'João', genero:'Masculino', idade:34},
        {id:5, nome:'Maria', genero:'Feminino', idade:32}
    ];
    
    return (
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Genero</th>
      <th scope="col">Idade</th>
    </tr>
  </thead>
  <tbody>
     {listaNomes.map((array) => 
    <tr>
      <th scope="row">{array.id}</th>
      <td>{array.nome}</td>
      <td>{array.genero}</td>
      <td>{array.idade}</td>
    </tr>

     )}

   
  </tbody>
</table>
    )
}

export default Table;
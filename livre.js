let alire = document.getElementById('alire');
let lu = document.getElementById('lu');
let titre1 = document.getElementById('titre1');
let titre2 = document.getElementById('titre2');
let titre3 = document.getElementById('titre3');


document.getElementById('ajouter').addEventListener('click', ()=>{

    if(lu == '' || alire == ''){
        titre1.style.visibility = 'visible';
        titre2.style.visibility = 'hidden';
    }else{
        titre1.style.visibility = 'hidden';
        titre2.style.visibility = 'visible';
    
    }

    let titre = document.getElementById('titre').value;
    let lien = document.getElementById('lien').value;



    if(titre =='' || lien ==''){

        alert('Entrez toutes deux')
    }else{
        alire.insertAdjacentHTML('afterbegin', `<li>${titre}<i id=${titre} class="fas fa-check" onClick=livreLu(this.id)></i><i id=${titre} onClick=supprimer(this.id) class="fas fa-trash-alt"></i><a href=${lien}><i class="fas fa-shopping-cart"></i></a></li>`);
        document.getElementById('titre').value='';
        document.getElementById('lien').value = '';
    }

    
})

function supprimer(id){
    document.getElementById(id).parentElement.outerHTML='';

}

function livreLu(id){

        titre3.style.visibility = "visible"; 
 

     supprimer(id);
     lu.insertAdjacentHTML('afterbegin', `<li>${id}<i id=${id} onClick=supprimer(this.id) class="fas fa-trash-alt"></i></li>`);

    }
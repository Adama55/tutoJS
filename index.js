function Utilisateur(a, b, c){
    this.nom =a;
    this.age =b;
    this.mail =c;

    this.bonjour = function(){
        alert('bonjour, je suis ' + this.nom + ', ' + this.age +' ans ' )
    }
}
const btnInscription = document.querySelector('.btn-inscp');
const btnconnection = document.querySelector('.btn-cont');
const deco = document.querySelector('.btn-deco');

const emailinscription = document.querySelector('.email-inscription');
const mdpInscription = document.querySelector('.mdp-inscription');
const formInscription = document.querySelector('.form-inscription');
const formconnection = document.querySelector('.form-connection');

btnInscription.addEventListener('click', () => {
    if(formInscription.classList.contains('apparition')){

        formInscription.classList.remove('apparition');
    }
    formInscription.classList.toggle('apparition');

})
btnconnection.addEventListener('click', () => {
    if(formInscription.classList.contains('apparition')){
        
        formInscription.classList.remove('apparition');
    }
    formconnection.classList.toggle('apparition');

})

formInscription.addEventListener('submit', (e) => {
    e.preventDefault();
    const mailvaleur = emailinscription.value;
    const mdpInscriptionValeur = mdpInscription.value;

    auth.createUserWithEmailAndPassword(mailvaleur, mdpInscriptionValeur).
    then(cred => {
        console.log(cred);
        formInscription.reset();
        formInscription.classList.toggle('apparition')


    })

})

deco.addEventListener('click', (e) => {
    e.preventDefault();
    auth.signOut().then(() => {
        console.log("déconnecté")
    })
})

formconnection.addEventListener('submit', (e) => {
    e.preventDefault();
    const mailvaleur = emailConnection.value;
    const mdpConnectionValeur = mdpConnection.value;

    auth.signInWithEmailAndPassword(mailvaleur, mdpConnectionValeur).
    then(cred => {
        console.log("connexion!", cred.user);
        formconnection.reset();
        formconnection.classList.toggle('apparition');


    })

})

const h1 = document.querySelector('h1');
const info = document.querySelector('.info');
auth.onAuthStateChanged(utilisateur => {
    if (utilisateur) {
        info.innerText ="voici le continue privé"
        h1.innerText = "le retour !"
    } else{
        console.log("utilisateur déconnecté");
        info.innerText = "contenu public";
        h1.innerText = "bienvenue, inscrivez vous ou connecter !";
    }
})
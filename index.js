class jugadora{

    constructor(id,nom,cognom,club,hp,atck,df,pais){

        this.id = id;
        this.nom = nom;
        this.cognom = cognom;
        this.club = club;
        this.hp = hp;
        this.atck = atck;
        this.df = df;
        this.pais = pais;

    }

    attack(hp,atck,df){

        var kick = atck - df;
        hp = hp - kick;

        return hp;

    }

    super_attack(hp,atck,df){

        var kick = (atck * 2) - df;
        hp = hp - kick;

        return hp;

    }

}

class pais{

    constructor(id,nom,ciutats){

        this.id = id;
        this.nom = nom;
        this.ciutats = ciutats;

    }

}

class escenari{

    constructor(id,nom,ciutat){

        this.id = id;
        this.nom = nom;
        this.ciutat = ciutat;

    }

}

class enemic{

    constructor(id,tipus,nom,cognom,hp,atck,df,pais){

        this.id = id;
        this.tipus = tipus;
        this.nom = nom;
        this.cognom = cognom;
        this.hp = hp;
        this.atck = atck;
        this.df = df;
        this.pais = pais;

    }

    attack(hp,atck,df){

        var kick = atck - df;
        hp = hp - kick;

        return hp;

    }

    super_attack(hp,atck,df){

        var kick = (atck * 2) - df;
        hp = hp - kick;

        return hp;

    }

}



const j1 = new jugadora('j1','Ariadna','Bonanit','Barcla',100,60,40,'Spain');
const j2 = new jugadora('j2','Kar','Semm','Chersy',100,60,40,'England');
const j3 = new jugadora('j3','Dolphin','Carascino','Olympique Lions',100,60,40,'France');
const p1 = new pais('j1','Spain',['Barcelona','Madrid','Valencia','Sevilla']);
const p2 = new pais('p2','England',['London','Liverpool','Manchester','Birmingham']);
const p3 = new pais('p3','France',['Lyon','Paris','Toulouse','Marsella']);
const e1 = new escenari('e1','Estadi Joran Truth', p1.ciutats[0]);
const e2 = new escenari('e2','Queensmiddle stadium',p2.ciutats[0]);
const e3 = new escenari('e3','Lions center training',p3.ciutats[0]);
var screen_1 = document.getElementById("initial");
var screen_2 = document.getElementById("character");
var screen_3 = document.getElementById("starting");
var screen_4 = document.getElementById("match1");
var screen_4c = document.getElementById("match1_comment");
var screen_4s = document.getElementById("match1_shot");
var screen_4r = document.getElementById("return_match1");
var screen_4e = document.getElementById("end_match1");
var startGame = document.getElementById("start_button");
var startMatch1 = document.getElementById("start_match1");
var screen_5 = document.getElementById("right_street");
var screen_5c = document.getElementById("fight1_comment");
var screen_5b = document.getElementById("start_fight1b");
var screen_5r = document.getElementById("return_battle1");
var decider = document.getElementById("battle1-decider");
var textdecider = document.getElementById("text-decider");
var screen_5rt = document.getElementById("retry_fight1");

var chances = 0;
var plpoint = 0;
var rpoint = 0;


var pl = new jugadora();
var cn = new pais();
var st = new escenari();
var enemy1 = new enemic();
var enemy2 = new enemic();
var street = new escenari();


function triaJugadora(){

    screen_1.style.display = "none";
    screen_2.style.display = "block";

}

function c_j1(){

    pl = j1;
    startGame.style.display = "block";

}

function c_j2(){

    pl = j2;
    startGame.style.display = "block";

}

function c_j3(){

    pl = j3;
    startGame.style.display = "block";

}

function start_game(){

    screen_2.style.display = "none";

    if (pl.pais == 'Spain'){

        cn = p1;
        st = e1;

    }else if (pl.pais == 'England'){

        cn = p2;
        st = e2;

    }else if (pl.pais == 'France'){

        cn = p3;
        st = e3;

    }

    screen_3.style.display = "inline";

    screen_3.innerHTML = "<p>Presenter: Welcome, we are today in the "+ st.nom +"! "+ pl.club +" is going to play soon.</br>Presenter: The players are ready to start the match!</br>Presenter: Everyone is ready and the referee indicates the start of the match!</br></br>Welcome player, this style of levels are about a football match.<br>Your player will have 3 goal chances, she will randomly score or not, if the character score at least 2 goals the team will win the match.<br>Now tap the start match button:</p>";

    startMatch1.style.display = "block";

}

function match1(){

        screen_4.style.display = "block";

        screen_3.style.display = "none";
        startMatch1.style.display = "none";

    if (chances == 0){  

        screen_4c.innerHTML = "<p>Presenter: "+ pl.club + " is moving the ball <br> Presenter: "+ pl.nom + " "+ pl.cognom + " have recieved the ball, She is now inside the area! <br> Presenter: One one against the GoalKeeper! </p>";
        screen_4s.style.display = "block";

    }else if (chances == 1){

        screen_4r.style.display = "none";
        screen_4c.innerHTML = "<p>Presenter: " + pl.club + " have recovered the ball <br> Presenter: They have past de mid field and are approaching to the goal line! <br> Presenter: Back Pass to " + pl.nom + " " + pl.cognom + " Shooots! </p>";
        screen_4s.style.display = "block";

    }else if (chances == 2) {

        screen_4r.style.display = "none";
        screen_4c.innerHTML = "<p>Presenter: Long ball by " + pl.club + " " + pl.cognom + " has received the ball and she is alone!<br> Presenter: " + pl.nom + " is approching to the goal area. She is inside! <br> Presenter: " + pl.nom + " " + pl.cognom + " shoooooots! </p>";
        screen_4s.style.display = "block";

    }else{

        screen_4r.style.display = "none";
        
        if (plpoint > rpoint){

            screen_4c.innerHTML = "<p>Presenter: And the referee indicates the end of this beautiful match. " + pl.club + " have won it!";

        }else if (plpoint < rpoint){

            screen_4c.innerHTML = "<p>Presenter: And the referee indicates the end of this beautiful match. " + pl.club + " have lost!";

        }else{

            screen_4c.innerHTML = "<p>Presenter: And the referee indicates the end of this beautiful match. it's a draw";

        }

        screen_4e.style.display = "block";

    }   

}

function shot(){

    var sr = (Math.random()*5);
    var kr = (Math.random()*5);
    var shoot;
    

    if (sr > kr){

        shoot = 'g';

    }else if (kr > sr){

        shoot = 's';

    }else{

        shoot = 'p';

    }
    
    if (shoot == "g"){

        screen_4c.innerHTML = "<p>GOOOOOOOAL from "+ pl.nom +"</p>";
        plpoint = plpoint +1;

    }else if (shoot == "s"){

        screen_4c.innerHTML = "<p>Saved by the keeper</p>";
        rpoint = rpoint +1;

    }else{

        screen_4c.innerHTML = "<p> To the post!</p>";

    }

    chances = chances +1;
    screen_4s.style.display = "none";
    screen_4r.style.display = "block";

}

function fight1(){

    const en1 = new enemic('en1','denialist','Paco','Gimenez',100,45,40,'Spain');
    const en2 = new enemic('en2','denialist','George','Rice',100,45,40,'England');
    const en3 = new enemic('en3','denialist','Étienne','Bernard',100,45,40,'France');
    const en4 = new enemic('en4','denialist','Rogelio','Martín',100,45,40,'Spain');
    const en5 = new enemic('en5','denialist','Charles','Brown',100,45,40,'England');
    const en6 = new enemic('en6','denialist','Renaud','Lambert',100,45,40,'France');
    const e4 = new escenari('e4','Right street',p1.ciutats[2]);
    const e5 = new escenari('e5','Left street',p2.ciutats[2]);
    const e6 = new escenari('e6','Front street',p3.ciutats[2]);
    

    screen_4.style.display = "none";
    screen_5.style.display = "block";

    if (pl.pais == 'Spain'){

        enemy1 = en1;
        enemy2 = en4;
        street = e4;

    }else if (pl.pais == 'England'){

        enemy1 = en2;
        enemy2 = en5;
        street = e5;

    }else if (pl.pais == 'France'){

        enemy1 = en3;
        enemy2 = en6;
        street = e6;

    }

    screen_5c.innerHTML = "<p>Some weeks later...<br> The " + pl.club + " players played a match in " + street.ciutat + ", but, in the "+ street.nom +" the bus was late and then...<br> Some strange men appeared in the street and started insulting the players. <br> " + enemy1.nom + ": You don't play football! <br> " + enemy2.nom + ": You must go to the kitchen!</p> <br><br> <p>This is a fight level, some enemies will attack you and you will fight against them to survive. <br> Will be a turn battle with all the enemies one by one. <br> Now, tap the start battle button:</p>";

}

function start_fight1(){

    
    decider.style.display = "block";
    screen_5b.style.display = "none";
    screen_5r.style.display = "none";
    screen_5rt.style.display = "none";


    var spat;

    if (pl.hp > 0 && enemy1.hp > 0){

        spat = (Math.random()*3);
        spat = parseInt(spat);

        if (spat == 2){

            screen_5c.innerHTML = "<p>"+ enemy1.tipus + " "+ enemy1.nom +" is approaching, what do you want to do?<br>1- Ball attack<br> 2- Bycicle kick attack <br></p>";

        }else{

            screen_5c.innerHTML = "<p>"+ enemy1.nom +" is approaching, what do you want to do?<br>1- Ball attack<br></p>";

        }
   

    }else{

        decider.style.display = "none";

        if (enemy1.hp<=0){

            pl.hp = 110;

            screen_5c.innerHTML = "<p>" + enemy1.nom + " is KO the other men are approaching to the " + pl.club + " players, but the police have arrived and the  men are arrested. Finally the bus arrives and the team can return to " + cn.ciutats[0] +"<br><br>Congratulations your player upgraded her health to: "+ pl.hp +"</p>";

        }else{

            screen_5c.innerHTML = "<p> GAME OVER. " + enemy1.nom + " have knocked " + pl.nom + "</p>";

            screen_5rt.style.display = "block";

        }

    }

}

function battle1_attack(){

    screen_5r.style.display = "block";

    if (textdecider.value == 1){

        enemy1.hp = pl.attack(enemy1.hp,pl.atck,enemy1.df);

        screen_5r.style.display = "block";

        pl.hp = enemy1.attack(pl.hp, enemy1.atck, pl.df);

        decider.style.display = 'none';

        screen_5c.innerHTML = "<p>"+ pl.nom + " have kicked a ball direct to " + enemy1.tipus + " " + enemy1.nom + " but he gave a buff to the player. <br>" + pl.nom + "`s health: " + pl.hp + "<br> "+ enemy1.nom +"`s health: " + enemy1.hp + "</p>";


        
    }else if (textdecider.value == 2){

        enemy1.hp = pl.super_attack(enemy1.hp,pl.atck,enemy1.df);

        screen_5r.style.display = "block";

        pl.hp = enemy1.attack(pl.hp, enemy1.atck, pl.df);

        decider.style.display = 'none';

        screen_5c.innerHTML = "<p>"+ pl.nom + " watched a ball flying and she hit it with a bycicle kick direct to " + enemy1.tipus + " " + enemy1.nom + " but he gave a buff to the player. <br>" + pl.nom + "`s health: " + pl.hp + "<br> "+ enemy1.nom +"`s health: " + enemy1.hp + "</p>";


        

    }else{

        screen_5c.innerHTML = "<p> You entered the number wrong </p>";

        screen_5r.style.display = "none";

    }

    textdecider.value = "";


}

pl.hp = 110;


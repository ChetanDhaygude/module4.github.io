var names=new Array();
names[0]="Yaakov";
names[1]="sohn";
names[2]="gen";
names[3]="dason";
names[4]="saul";
names[5]="arank";
names[6]="barry";
names[7]="maula";
names[8]="kaura";
names[9]="lim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}
function shtoLajmin(){
	var setImg=document.createElement('img');
	setImg.setAttribute('src','img/UBT-LOGO.png');
	setImg.setAttribute('class','foto-lajmi');

	var createTitle=document.createElement('h3');
	var titulliInput=document.getElementById('titulli-new').value;
	var titulliMePermbajtje=document.createTextNode(titulliInput);
	createTitle.appendChild(titulliMePermbajtje);
	
	var createParagrafi = document.createElement('p');
	var paragrafiTextarea = document.getElementById('permbajtja-new').value;
	var ParagrafiMePermbajtje = document.createTextNode(paragrafiTextarea);
	createParagrafi.appendChild(ParagrafiMePermbajtje);

	var createData=document.createElement('h6');
	var dita=new Date().getDate();
	var muaji=new Date().getMonth();
	var viti=new Date().getFullYear();
	var data=dita+'/'+muaji+'/'+viti;
	var dataText=document.createTextNode(data);
	createData.appendChild(dataText);

	var divider= document.createElement('div');
	divider.appendChild(setImg);
	divider.appendChild(createTitle);
	divider.appendChild(createParagrafi);
	divider.appendChild(createData);
	divider.setAttribute('class','form-group');
	
	var x = document.getElementsByClassName('right-side')[0];
    x.insertBefore(divider,x.firstChild);
    document.getElementsByClassName('right-side')[0].removeChild(document.getElementsByClassName('form-group')[4]);

}


function currentSchedule(){
	//loading data ...	
	fetch('https://raw.githubusercontent.com/rssw2019/colloquium_data/main/colschedule_sp21.json')
	.then(res=>res.json())
	.then(function(data){
		let output='<h2> Spring 2021 UNG Math Colloquium </h1>';
		output+='<p> The Spring 2021 UNG Math Colloquium talks will be virtual in Zoom. All talks are open to UNG faculty, staff, and students. These talks will be over a broad range of topics in pure math, applied math, math education, and innovative use of technology in math teaching. We welcome talks from inside and outside of UNG. If you would like to give a talk, please contact one of the organizing committee members. </p>';
		output+='<h3 style="margin-bottom: 10px;"> Current Schedule </h2>';
		output+='<table id="schedule_table">';
		//Table Header
		output+='<th> Talk # </th>';
		for (let headerValue in data[0]){
			output+=`<th>${headerValue}</th>`;
		}
		let m=data.length;
		let n=Object.values(data[0]).length
		for(let i=0;i<m;i++){
			output+=`<tr><td>${i+1}</td>`;
			for(let j=0;j<n;j++){
				output+=`<td>${Object.values(data[i])[j]}</td>`;
			}
			output+='</tr>';
		}
		output+='</table>';
		document.getElementById('main1').innerHTML=output;				
	
		//Current Abstracts
		//loading data ...
		fetch('https://raw.githubusercontent.com/rssw2019/colloquium_data/main/abstracts_sp21.json')
		.then(res=>res.json())
		.then(function(abstractArray){
			let output1='<h3> Abstracts </h3>';
			let m=abstractArray.length;
			for(let i=0;i<m;i++){
				output1+=`${Object.values(abstractArray[i])[0]} <br> ${Object.values(abstractArray[i])[1]} <br>${Object.values(abstractArray[i])[2]} <h4 style="margin-top: 3px;;margin-bottom: -10px;"> Title: ${Object.values(abstractArray[i])[3]} </h4><p>${Object.values(abstractArray[i])[4]}</p> `;
			}
			output1+='<hr>';
			document.getElementById('main1').innerHTML+=output1;
		});
	});

}

//Past Abstracts
function oldAbstracts(){
	//loading data ...
	fetch('https://raw.githubusercontent.com/rssw2019/colloquium_data/main/abstract_old.json')
	.then(res=>res.json())
	.then(function(abstractArray){
		let output='<h2> Past UNG Math Colloquiums </h2>';
		output+='<p> Below is an archive of some of the previous colloquium talks. </p>'
		let m=abstractArray.length;
		for(let i=0;i<m;i++){
			output+=`${Object.values(abstractArray[i])[0]} <br> ${Object.values(abstractArray[i])[1]} <br>${Object.values(abstractArray[i])[2]} <h4 style="margin-top: 3px;;margin-bottom: -10px;"> Title: ${Object.values(abstractArray[i])[3]} </h4><p>${Object.values(abstractArray[i])[4]}</p><hr> `;
		}
		document.getElementById('main1').innerHTML=output;
	});
}

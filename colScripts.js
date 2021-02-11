			//Current Schedule
      function currentSchedule(){
				//loading data ...	
				fetch('https://raw.githubusercontent.com/rssw2019/colloquium_data/main/colschedule_sp21.json')
				.then(res=>res.json())
				.then(function(data){
					//Intro
					let output='<h2> Spring 2021 UNG Math Colloquium </h1>';
					output+='<p> The Spring 2021 UNG Math Colloquium talks will be virtual in Zoom. All talks are open to UNG faculty, staff, and students. These talks will be over a broad range of topics in pure math, applied math, math education, and innovative use of technology in math teaching. We welcome talks from inside and outside of UNG. If you would like to give a talk, please contact one of the organizing committee members. </p>';
					//upcoming talk
					output+=`<h3 style="margin-bottom: 10px;"> Upcoming Talk</h3>`;
					//output+=`${data[0].Date}: <a href="#0" style="text-decoration:none;"> "${data[0].Title}" </a> by ${data[0].Speaker}.  </p>`;
					// let x=new Date(data[0].Date);
					// let y=new Date();
					// console.log(x.getDate());
					// console.log(y.getDate());
					let m=data.length;
					let n=Object.values(data[0]).length;
					const userDate=new Date();
					const currentMonth=userDate.getMonth();
					const currentDate=userDate.getDate();
					const currentTime=30*(currentMonth+1)+currentDate;
					console.log(`Current time=${currentTime}`);

					for (let i=0;i<m;i++){
						let colDate=new Date(data[i].Date);
						let talkMonth=colDate.getMonth();
						let talkDate=colDate.getDate();
						let talkTime=30*(talkMonth+1)+talkDate;
						
						console.log(`Talk ${i} time=${talkTime}`);
						let diff=talkTime-currentTime;
						console.log(`Difference=${diff}`);						

						if(diff<7){
							output+=`${data[i].Date}: <a href="#${i}" style="text-decoration:none;"> "${data[i].Title}" </a> by ${data[i].Speaker}.  </p>`;

						}
					}
					output+='<h3 style="margin-bottom: 10px;"> Current Schedule </h2>';
					output+='<table id="schedule_table">';
					//Table Header
					output+='<th> Talk # </th>';
					for (let headerValue in data[0]){
						output+=`<th>${headerValue}</th>`;
					}
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
							output1+=`<div id="${i}">`;
							output1+=`${Object.values(abstractArray[i])[0]} <br> ${Object.values(abstractArray[i])[1]} <br>${Object.values(abstractArray[i])[2]} <h4 style="margin-top: 3px;;margin-bottom: -10px;"> Title: ${Object.values(abstractArray[i])[3]} </h4><p><b>Abstract: </b>${Object.values(abstractArray[i])[4]}</p> `;
							output1+=`<hr>`;
							output1+=`</div>`;
						}
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

			//Last Updated
			let lastedUpdate=new Date(document.lastModified);
			document.getElementById("lastUpdated").innerHTML = `${lastedUpdate.getMonth()+1}/${lastedUpdate.getDate()}/${lastedUpdate.getFullYear()} at ${lastedUpdate.getHours()+1}:${lastedUpdate.getMinutes()}:${lastedUpdate.getSeconds()}.`;
			
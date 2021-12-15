const textArea = document.querySelector('.report');
const fullname = document.querySelector('#name');
const ourdate  = document.querySelector('#date')
const ourtime = document.querySelector('#time');
const locate = document.querySelector('#location');
const ourClient = document.querySelector('#client');
const display = document.querySelector('#displayNote');

function submitNote(){
	if(fullname.value ==='' || ourdate.value ==='' || ourtime.value==='' || locate.value==='' || ourClient.value==='' || textArea.value===''){
		alert('please fill out the form');
		return;
		//return tells the code to stop
	}
	display.innerHTML = 
`	Staff Name:${fullname.value}<br>
	Date:${ourdate.value}<br>
	Time:${ourtime.value}<br>
	Location:${locate.value}<br>
	Client Name:${ourClient.value}<br>
	Report:${textArea.value}<br>`
}

function saveNote(){
	const doc = new docx.Document({
          sections: [{
            properties: {},
            children: [
              new docx.Paragraph({
                children: [
                  new docx.TextRun({
			text:"Report App",
			size:25,
			bold:true,
			allCaps: true,
			})
                ],
              }),
		new docx.Paragraph({
                  children: [
              	    new docx.TextRun(fullname.value)
                ],
              }),
		new docx.Paragraph({
                  children: [
              	    new docx.TextRun(ourdate.value)
                ],
              }),
		new docx.Paragraph({
                  children: [
              	    new docx.TextRun(ourtime.value)
                ],
              }),
	        new docx.Paragraph({
                  children: [
                    new docx.TextRun(locate.value)
                ],
              }),
		new docx.Paragraph({
                  children: [
              	    new docx.TextRun(ourClient.value)
                ],
              }),
					new docx.Paragraph({
                  children: [
              	    new docx.TextRun(textArea.value)
                ],
              }),
            ],
          }]
        });

        docx.Packer.toBlob(doc).then(blob => {
          console.log(blob);
          saveAs(blob, "Report.docx");
          console.log("Document created successfully");
        });
	 LinkToEMail()
      }

function LinkToEMail(href) {
   let header= "Incident Report";
   let body = "Incident Report has been drafted";
   body += window.location.href;
   body += ">";
   let mail_uri = "mailto:?subject=";
   mail_uri += encodeURIComponent(header);
   mail_uri += "&body=";
   mail_uri += encodeURIComponent(body);
   window.open(mail_uri);
 }

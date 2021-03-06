import React from 'react';

const UploadPage = props => {
	const [selected_file, setSelectedFile] = React.useState();
	const [is_selected, setIsSelected] = React.useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]); // this an object that contains the details of files selected to be uploaded in a form
		setIsSelected(true);
	};

	// TODO: Send to AWS ( S3 || Amazon Textract)
	const handleSubmission = () => {
	// 	const formData = new FormData();

	// 	formData.append('File', selected_file);

	// 	fetch(
	// 		'https://freeimage.host/api/1/upload?key=<YOUR_API_KEY>',
	// 		{
	// 			method: 'POST',
	// 			body: formData,
	// 		}
	// 	)
	// 		.then((response) => response.json())
	// 		.then((result) => {
	// 			console.log('Success:', result);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error:', error);
	// 		});
	};


	return (
		<div>
			<div>Upload Page</div>
			<input type="file" name="file" onChange={changeHandler} />
			{is_selected ? (
				<div>
					<p>Filename: {selected_file.name}</p>
					<p>Filetype: {selected_file.type}</p>
					<p>Size in bytes: {selected_file.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selected_file.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>
		</div>
	)
}

export {
  UploadPage
}


/*
  Upload pdf, txt, etc

  Send to AWS Lambda

  Lambda > Amazon Textract > S3

*/
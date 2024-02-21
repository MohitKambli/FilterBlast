# FilterBlast

FilterBlast is a web application that allows users to upload images, apply various filters to them, and download the filtered images. With an intuitive user interface and seamless integration with AWS S3 for image storage and processing, FilterBlast provides a convenient platform for users to enhance their images with stunning filters.

## Features

<ul>
<li><strong>Image Upload:</strong> Users can easily upload their images to the platform with a simple file input interface.</li>
<li><strong>Filter Selection:</strong> FilterBlast offers a wide range of filters, including hudson, inkwell, kelvin, lark, lofi, moon, perpetua, and toaster, allowing users to choose the perfect filter for their images.</li>
<li><strong>Live Preview:</strong> Users can preview the filtered images in real-time and compare them with the original image.</li>
<li><strong>Download:</strong> Once satisfied with the filtered image, users can download it with a single click, making it easy to save and share their creations.</li>
</ul>

## Technologies Used

<ul>
<li><strong>Frontend:</strong> Built with React.js, FilterBlast provides a responsive and interactive user interface for seamless image uploading and filtering.</li>
<li><strong>Backend:</strong> Powered by Flask, the backend handles image processing, filter application, and image storage on AWS S3</li>
<li><strong>AWS S3:</strong> Amazon Simple Storage Service (S3) is used for storing and serving images, ensuring scalability and reliability.</li>
<li><strong>pilgram:</strong> The pilgram library is utilized for applying filters to images, offering a wide range of filter options for users.</li>
<li><strong>Boto3:</strong> The Boto3 library is used to interact with AWS S3, enabling seamless image storage and retrieval.</li>
</ul>

## Installation and Usage

To run FilterBlast locally, follow these steps:

<ul>
<li>Clone the repository to your local machine.</li>
<li>Install the necessary dependencies for both the frontend and backend.</li>
<li>Configure AWS S3 credentials in the backend Flask app.</li>
<li>Start the backend Flask server.</li>
<li>Start the React development server.</li>
<li>Access the application in your web browser.</li>
</ul>

## Web App Link

https://transcendent-horse-3c6545.netlify.app/


## Screenshots


<div style= "float: left;width: 20%;padding: 100px;">
  <img src="https://github.com/MohitKambli/FilterBlast/blob/main/screenshots/SS1.png" width=600 height=300>
  <img src="https://github.com/MohitKambli/FilterBlast/blob/main/screenshots/SS2.png" width=600 height=300>
  <img src="https://github.com/MohitKambli/FilterBlast/blob/main/screenshots/SS3.png" width=600 height=300>
  <img src="https://github.com/MohitKambli/FilterBlast/blob/main/screenshots/SS4.png" width=600 height=300>
  <img src="https://github.com/MohitKambli/FilterBlast/blob/main/screenshots/SS5.png" width=600 height=300>
  <img src="https://github.com/MohitKambli/FilterBlast/blob/main/screenshots/SS6.png" width=600 height=300>
</div>
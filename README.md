# FilterBlast

FilterBlast is a web application that allows users to upload images, apply various filters to them, and download the filtered images. With an intuitive user interface and seamless integration with AWS S3 for image storage and processing, FilterBlast provides a convenient platform for users to enhance their images with stunning filters.

## Features

Image Upload: Users can easily upload their images to the platform with a simple file input interface.
Filter Selection: FilterBlast offers a wide range of filters, including hudson, inkwell, kelvin, lark, lofi, moon, perpetua, and toaster, allowing users to choose the perfect filter for their images.
Live Preview: Users can preview the filtered images in real-time and compare them with the original image.
Download: Once satisfied with the filtered image, users can download it with a single click, making it easy to save and share their creations.

## Technologies Used

Frontend: Built with React.js, FilterBlast provides a responsive and interactive user interface for seamless image uploading and filtering.
Backend: Powered by Flask, the backend handles image processing, filter application, and image storage on AWS S3
AWS S3: Amazon Simple Storage Service (S3) is used for storing and serving images, ensuring scalability and reliability.
pilgram: The pilgram library is utilized for applying filters to images, offering a wide range of filter options for users.
Boto3: The Boto3 library is used to interact with AWS S3, enabling seamless image storage and retrieval.

## Installation and Usage

To run FilterBlast locally, follow these steps:

Clone the repository to your local machine.
Install the necessary dependencies for both the frontend and backend.
Configure AWS S3 credentials in the backend Flask app.
Start the backend Flask server.
Start the React development server.
Access the application in your web browser.

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
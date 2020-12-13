# CS470_Team16
## Overview
### Foot detection for communication
This project is made for the communication using feet. 
We motivated by contacting hands to buttons in the elevator. Because of COVID 19, we are sensitive to contact to something. Therefore, we think about AI that selects a floor with feet position.

## Usage
### Front
#### How to run the frontend
1. Download the 'frontend' folder.
2. Execute Foot.html (Google Chrome recommended) and create foot position.
3. Without local server - if you click the button below, the screenshot will appear below the button. Using right-click, download the image.
4. With local server - if you have local server running, the image will be downloaded to your local folder.

You can access our web site by executing Foot.html. So you can see 15 feet positions mean 15 floors.
![웹 페이지1](https://user-images.githubusercontent.com/69745143/101984126-bef54880-3cc2-11eb-8f8a-0041143b1ab9.png)

There are 5 sole types and you can make your own feet position. By several manipulating, you can rotate, cut soles.
![웹 페이지2](https://user-images.githubusercontent.com/69745143/101984181-201d1c00-3cc3-11eb-9942-52bb463cf14c.png)

### Back
There are two directory: one is composed of python files and the trained model that predicts the floor number and the other is composed of .ipynb files that trains model, tests model and so on.

<img src="https://user-images.githubusercontent.com/69745143/101986487-68dbd180-3cd1-11eb-8100-ad24808f1d85.PNG"  width="200" height="220"><img src="https://user-images.githubusercontent.com/69745143/101986489-6aa59500-3cd1-11eb-9e01-577bc21d7858.PNG"  width="200" height="220"><img src="https://user-images.githubusercontent.com/69745143/101986490-6c6f5880-3cd1-11eb-9806-e54f5e17ec72.PNG"  width="200" height="220"><img src="https://user-images.githubusercontent.com/69745143/101986493-6ed1b280-3cd1-11eb-822b-8a3e6ed0bb34.PNG"  width="200" height="220">

#### EfficientNet
We use one of the most powerful CNNs for classification, EfficientNet made in 2019. Its new idea is to control three parameter: width, depth and resolution. It has lots of levels such as B0, B1 and so on. However, size and resolution of our data are small so, we use EfficientNet B0. Furthermore, we generated 6000 images by hand and these are less than general. Therefore, we use pre-trained model and fine-tuning. [EfficientNet: Rethinking Model Scaling for Convolutional Neural Networks](https://arxiv.org/pdf/1905.11946.pdf)

<div id="top"></div>
<!-- Template of README.mb inspired by https://github.com/othneildrew/Best-README-Template -->
<br />
<div align="center">
  <a href="https://github.com/Jajo1010/BananaPi-GPIO-SimpleWebSwitch">
    <img src="https://i.imgur.com/r5ZMXPT.png" alt="Logo" width="200" height="200">
  </a>

  <h3 align="center">BananaPi Simple Web Switch</h3>

  <p align="center">
    Easy way to remotely turnOn device using GPIO pins
    <br />
    <br />
    <br />
  </p>
</div>


## Table of contents
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>



<!-- ABOUT THE PROJECT -->
## About The Project

Concept behind this project is an idea of remotely controled BananaPi M1+'s GPIO pins trough web browser on a local server which BananaPi hosts itself using modern web technologies such as node, express vue and much more.
This particular application focuses on a momentary switch behavior of button which can be applied to GPIO pin logic.<br />

I personally used this as a remote PC power switch on an old motherboard that runs as a homemade NAS server

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

Frontend :
* [Vue.js](https://vuejs.org/)
* [Bootstrap](https://getbootstrap.com)
* [axios](https://axios-http.com/)

Backend:
* [Express.js](https://expressjs.com/)
* [Node.js](https://nodejs.org/)

BananaPi OS:
* [Armbian](https://www.armbian.com/)

BananaPi GPIO library:
* [BPI-WiringPi](https://github.com/BPI-SINOVOIP/BPI-WiringPi)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### <b>Install Armbian on BananaPi</b>
<ol>
  <li>
    Download Armbian image from <a href="https://www.armbian.com/bananapi/">Armbian's website</a>
  </li>
  <li>
    Flash Armbian on SD Card using <a href="https://www.balena.io/etcher/">Etcher</a> or <a href="https://rufus.ie/">Rufus</a>
  </li>
  <li>
    For better experience, connect BananaPi to some kind of screen via HDMI, or if not possible use the SSH connection option
  </li>
  <li>
    Insert SD Card to BananaPi's SD Card slot
  </li>
  <li>
    Armbian OS will now guide you trough the setup to set your enviroment after first boot
  </li>
</ol>

### Prerequisites
* Update OS
  ```sh
  apt update
  apt upgrade
  ```
* Install node
   ```sh
  sudo apt install nodejs
  node –version
  ```
* Install npm
  ```sh
  sudo apt install npm
  npm -v 
  ```
 * Download BPI-M1
   ```sh
    git clone https://github.com/BPI-SINOVOIP/BPI-WiringPi.git -b BPI_M1_M1Plus
   ```
 * Install BPI-M1
   ```sh
   cd BPI-WiringPi
   chmod +x ./build
   sudo ./build
   ```
### Installation

Now let's install the app itself

1. Clone the repo
   ```sh
   git clone git@github.com:Jajo1010/BananaPi-GPIO-SimpleWebSwitch.git
   cd BananaPi-GPIO-SimpleWebSwitch
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Let's create a service which will automatically startup our app on boot
   ```sh
    cd /etc/systemd/system
    sudo nano express-server.service
   ```
4. Inside nano write these commands
  ```sh
  [Unit]
  Description=start express js server which turns on gpio pins remotely

  [Service]
  Type=simple
  ExecStart=/usr/bin/node /root/BananaPi-GPIO-SipleWebSwitch/server.js start
  Restart=on-failure

  [Install]
  WantedBy=multi-user.target
  
  ```
  Save and exit from nano
  ```sh
  CTRL+O
  CTRL+X
  ```
5. Enable the service 
  ```sh
  sudo systemctl daemon-reload
  sudo systemctl enable express-server
  sudo systemctl start $SERVICE
  ```
 Test if the service is running
 ```sh
 sudo systemctl status express-server
 ```
 6. Reboot
  ```sh
  reboot
  ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

<b>Example of remotely turning on and off LED diode via phone:</b>
    <div align="center">
      <img src="https://media.giphy.com/media/qdo2ajwEFnd7Rw3jda/giphy.gif">
    </div>
    
<b>App handles two kind of states </b> :
<ol>
  <li>
    Everything went allright :
    <div align="center">
      <img src="https://media.giphy.com/media/v96dbIGqk3K63fhpFy/giphy.gif">
    </div>
  </li>
    <li>
    Specific error occured :
    <div align="center">
      <img src="https://media.giphy.com/media/VkixHJYItGMTZGfzUA/giphy.gif">
    </div>
  </li>
</ol>

<b>If you'd like to change the behavior of the GPIO pin, just easily change the turnOn.sh file inside the BananaPi-GPIO-SimpleWebSwitch
 directory to your needs </b> 
 For more information about how to use GPIO Pins on BananaPi M1+, please refer to : </b>
 * [BPI-WiringPi](https://github.com/BPI-SINOVOIP/BPI-WiringPi)


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Ladislav Štefún - ladislav.stefunjr@gmail.com

<p align="right">(<a href="#top">back to top</a>)</p>


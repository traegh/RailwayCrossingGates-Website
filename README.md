# Railway Crossing Status Website

This project is a web application that continuously updates and displays the status of the railway crossing in the town of Gogolin, indicating three modes: Open/Probably Closed/Closed. It is a direct continuation of the Python project that gathers data and presents it on the website. The website is designed to be responsive, supporting all resolutions and devices.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies](#technologies)
- [Setup](#setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

Railway crossings in the town of Gogolin have dynamic opening and closing schedules based on various factors such as train schedules and maintenance. This web application provides real-time updates on the status of the railway crossing, ensuring that pedestrians and motorists can be aware of its availability.

The application is a continuation of the Python project responsible for fetching and processing the data. The frontend is designed to present the status information in a user-friendly and visually appealing manner, with support for different devices and screen sizes.

## Features

- Real-time updates of railway crossing status.
- Clear indication of three modes: Open/Probably Closed/Closed.
- Responsive design, ensuring optimal display on various devices.
- Accessible to all users, including those with disabilities.

## Technologies

The web application is built using the following technologies:

- HTML5, CSS3, and JavaScript for frontend development.
- Python for data processing and backend connectivity.
- Flask web framework for server-side application.
- RESTful API for data communication.
- Bootstrap for responsive design and styling.
- GitHub for version control and collaboration.

## Setup

To run the web application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/your-username/railway-crossing.git`
2. Navigate to the project directory: `cd railway-crossing`
3. Install the required dependencies: `pip install -r requirements.txt`
4. Run the Python server to update data: `python3 -m http.server 8000`
5. Run the Flask development server: `python app.py`
6. Open your web browser and go to: `http://localhost:5000`

The Python server (step 4) is used to update data periodically and provide real-time status updates for the railway crossing. Ensure that it is running in the background while accessing the web application (step 6).

## Usage

Upon accessing the website, the user will immediately see the current status of the railway crossing in Gogolin. The status will be updated automatically in real-time based on the Python script's periodic data updates. The status will be color-coded to represent Open, Probably Closed, or Closed modes, ensuring clarity for the users.

Users can access the website from any device, and the responsive design will adjust the layout to fit the screen size, providing an optimal user experience.

## Contributing

Contributions to this project are welcome. If you find any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request. Please adhere to the project's code of conduct and follow the contribution guidelines.

## License

This project is licensed under the [MIT License](LICENSE). You are free to modify and distribute the code as per the terms of the license.

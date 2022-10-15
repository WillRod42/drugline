# DrugLine
#### By William Rodriguez

[Try it here!](https://willrod42.github.io/drugline/)

## Technologies Used
* React
* JS
* Bootstrap
* HTML
* CSS

## Description

A web-app where users can lookup drug interaction information using National Drug Codes (NDC's).

## Setup/Installation Requirements (Subject to change)

* Clone this repository to your desktop or any directory of your choice
  * Run the command below in a bash terminal with [git](https://github.com/git-guides/install-git) installed
```
git clone https://github.com/WillRod42/drugline.git
```
* Or download as a zip file
  * Click the green code button on the repository page
  * At the bottom of the popup window select `Download ZIP`
  * Extract the downloaded .zip folder
* Open the top level folder of the downloaded repsoitory
* Open bash terminal in this directory with [node](https://nodejs.org/en/download/) installed
* run `npm install` and afterwards `npm start` to host a local, live version of this web-app

## Component Diagram
![React component diagram](./Component%20Diagram%20-%20First%20Draft.png)

## Known Bugs

* None

## Research and Planning Log
### 7/8/22
* 8:15: Outline objectives for the day
* 8:30: Find drug information api's
* 9:00: Research Medline's drug information service
* 10:10: Research and test Medline's web api
* 11:30: Research American Society of Health-System Pharmacists (ASHP)
* 1:00: Find additional resources through National Library of Medicine (NLM)
* 1:20: Research DailyMed's drug information service
* 1:40: Research National Drug Codes (NDC's)
* 2:00: Test DailyMed's web api
* 3:00: Draft architecture of project
* 4:00: Write project proposal
* 4:30: Fill out readme

### 7/15/22
* 8:15: Outline objectives for the day
* 8:30: Explore alternate medical information databases (PubMed, Open-i, ClinicalTrials.gov)
* 10:00: Figure out way to parse DailyMed results
* 10:15: Try converting DailyMed xml results to JSON
* 10:45: Look for alternate endpoint on DailyMed api
* 11:00: Look into xml stylesheet
* 1:00: Load xls remote cors error
* 2:30: xml with css
* 4:00: DailyMed alternatives (openFDA, RxNorm)
* 4:50: Drug interaction api

### 7/22/22
* 8:15: Outline objectives for the day
* 8:40: Research RxNorm and Drug Interaction api's
* 9:50: Look up what RxCUI's are the difference from NDC's
* 10:15: Find way to get RxCUI from NDC
* 11:30: Test RxNorm and openFDA endpoints
* 1:50: Find usage limits and terms of use of both api's
* 2:20: Decipher output of api's
* 4:50: Design front-end

### 7/26/22
* 8:15: Outline objectives for the day
* 8:30: Finish designing front-end

### 7/27/22
* 8:15: Outline objectives for the day
* 8:30: Re-evaluate scope of project

## Stretch Goals
* Back end with MySQL caching DailyMed API data
* .NET API connecting front and back ends
* User accounts/authentication
* Allow users to pin/save certain drug information
* Use sessions for authentication
* Include searching for UPC and/or brand name and/or active ingredient

### Initial Architecture Diagram
![Architecture Diagram](./Initial%20Architecture%20-%20First%20Draft.png)


## License

MIT

Copyright (c) 2022 William Rodriguez

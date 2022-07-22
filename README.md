# DrugLine
#### By William Rodriguez

## Technologies Used
* React
* .NET API
* C#
* MySQL
* JS
* Bootstrap
* HTML
* CSS

## Description

A fullstack web-app where users can lookup drug information using a National Drug Code (NDC).

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
_Coming soon_

## Architecture Diagram
_Coming soon_

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

## License

MIT

Copyright (c) 2022 William Rodriguez
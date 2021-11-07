import { Injectable } from '@angular/core';

export interface Content{
  id: Number,
  content: String
}

export interface Url{
  name: String,
  url: String
}

@Injectable({
  providedIn: 'root'
})
export class HomeDataService {
  
  urls: Url[] = [
    {
      name: "IST site",
      url: "https://ist.psu.edu/"
    },
    {
      name: "CIL site",
      url: "https://cil.ist.psu.edu/"
    },
    {
      name: "Jack Carroll site",
      url: "https://ist.psu.edu/directory/jmc56"
    }
  ]

  aboutMe: Content[] = [
    {
      id : 1,
      content: "As a front-end developer, I am mainly using Angular framework and Typescript to generate components, creating dynamic web content with data binding, routing, HTTP requests, and many more techniques. I turned UI interface design into vivid web pages via CSS, SASS, Bootstrap, and Angular Material. I am also familiar with some backend techniques like Node.js and database management such as MySQL and MongoDB."
    },
    {
      id : 2,
      content: "As a UX researcher, I identify user pain points using qualitative methods such as interviews, heuristic evaluations, and usability testing. Survey and statistical analysis are also my favorite methods in finding out the relationship between vital variables that impact user experience."
    },
    {
      id : 3,
      content: "“Stay hunger, stay foolish” is one of my favorite maxims, motivating me to cherish every learning opportunity. I am a curious girl, a good self-learner, and a motivated team player. It is a feast to see every bit of my progress. I love working with people, I also enjoy observing people. Interacting with people not only inspires me but also makes me feel powerful."
    }
  ]



  constructor() { }
}

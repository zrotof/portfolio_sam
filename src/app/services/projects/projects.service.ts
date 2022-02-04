import { Injectable } from '@angular/core';
import { Project } from '../../models/project';
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectsListBriefData: Project[];
  projectsListAllData: any[] = [];

  constructor() { }


  initProjectsListBriefData(): Project[]{

    return this.projectsListBriefData = [
      {
        "projectTitle":"Sscovid19",
        "projectImage": "../../../assets/img/sscovid19.png",
        "projectSummary":"Réalisation d'une application web qui permet de suivre l'évolution de l'épidémie de la covid-19 dans le monde",
        "projectImageAltAttribute": "miniature du site web sscovid19",
        "projectCode": "sscovid19"

      },

      {
        "projectTitle":"Casabreizh",
        "projectImage": "../../../assets/img/casabreizh.png",
        "projectSummary":"Réalisation du site web du restaurant Casabreizh, lanterne de la gastronomie africaine et bretonne",
        "projectImageAltAttribute": "miniature du site web casabreizh",
        "projectCode": "casabreizh"
      },

      {
        "projectTitle":"Elites Voyages",
        "projectImage": "../../../assets/img/ev.png",
        "projectSummary":"Réalisation du site web d'Elites Voyages, agence de voyage, de tourisme, de transport et de logistique",
        "projectImageAltAttribute": "miniature du site web elites voyages",
        "projectCode": "elitesvoyages"
      }
    ]
  }

  initProjectData(){

    return this.projectsListAllData = [

      {
        sscovid19:
          {
            image: "../../../assets/img/sscovid/sscovid-header.png",
            link:"https://sscovid19.com",
            who:[
              {
                message:"<strong>SSCOVID19</strong> est une application web bilingue (français, anglais) qui permet de rester au fait de l'évolution de la covid-19 dans le monde."
              }
            ],
            why:[
              {
                message: "C'est un projet personnel que j'ai réalisé dans le but de renseigner la terre entière au sujet de la pandémie qu'est la covid."
              },
              {
                message: "Il prend en compte les données de plus de 215 pays et les affiche via des graphes retraçants les chiffres et l'historique de cette pandémie."
              }
            ],
            requirement_intro:"yes",
            requirements:[
              {
                message: "de consulter les chiffres totaux mondiaux de l'épidémie"
              },
              {
                message: "de consulter les chiffres par continents et par pays"
              },
              {
                message: "de visualiser les graphes d'évolution de la maladie et les graphes d'évolution des vaccinations ( depuis janvier 2020 ) dans le monde et par pays"
              },
              {
                message: "de visualiser la carte du monde avec des indicateurs de couleur suivant la gravité des cas dans différents pays" 
              },
              {
                message: "de rester à jour sur les faits d'actualité de cette pandémie"
              }
            ],

            estate: "terminé",

            technologies:[
              {
                name: "Angular 11",
                image: ""
              },
              {
                name: "Node js",
                image: ""
              },
              {
                name: "Express js",
                image: ""
              },
              {
                name: "PostgreSQL",
                image: ""
              },
              {
                name: "AmCharts",
                image: ""
              },
              {
                name: "Gogle Analytics",
                image: ""
              },
              {
                name: "Heroku",
                image: ""
              },
              {
                name: "Hostiger",
                image: ""
              },
              {
                name: "Github",
                image: ""
              }
            ],
          }
      },
      {
        elitesvoyages:
          {
            who:{
              message: "SSCOVID19 est une application web bilingue (français, anglais) qui permet de rester au fait de l'évolution de la covid-19 dans le monde."
            },
            why:[
              {
                message: "C'est un projet personnel que j'ai réalisé dans le but de renseigner la terre entière au sujet de la pandémie qu'est la covid."
              },
              {
                message: "Il prend en compte les données de plus de 215 pays et les affiche via des graphes retraçants les chiffres et l'historique de cette pandémie."
              }
            ],
            requirements:[
              {
                message: "de consulter les chiffres totaux mondiaux de l'épidémie"
              },
              {
                message: "de consulter les chiffres par continents et par pays"
              },
              {
                message: "de visualiser les graphes d'évolution de la maladie et les graphes d'évolution des vaccinations ( depuis janvier 2020 ) dans le monde et par pays"
              },
              {
                message: "de visualiser la carte du monde avec des indicateurs de couleur suivant la gravité des cas dans différents pays" 
              },
              {
                message: "de rester à jour sur les faits d'actualité de cette pandémie"
              }
            ],

            technologies:[
              {
                name: "Angular 11",
                image: ""
              },
              {
                name: "Node js",
                image: ""
              },
              {
                name: "Express js",
                image: ""
              },
              {
                name: "PostgreSQL",
                image: ""
              },
              {
                name: "AmCharts",
                image: ""
              },
              {
                name: "Gogle Analytics",
                image: ""
              },
              {
                name: "Heroku",
                image: ""
              },
              {
                name: "Hostiger",
                image: ""
              },
              {
                name: "Github",
                image: ""
              }
            ]
          }
      }

    ]
  }

  getProjectData(param: string){

    let projectData: any[];

    this.projectsListAllData.forEach(project =>{
      if(typeof project[param] !== "undefined" ){
        projectData = project[param];
      }
    })

    return projectData
  }
  
  
}

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
            image: "../../../assets/img/sscovid-header.png",
            link:"https://sscovid19.com",
            who:[
              {
                message:"<b>SSCOVID19</b> est une application web qui présente l'état de l'évolution de la covid-19 dans le monde."
              }
            ],
            why:[
              {
                message: "C'est un projet personnel que j'ai réalisé dans le but de participer activement dans la lutte contre la covid en permettant à quiconque de consulter les chiffres clés de la pandémie."
              },
              {
                message: "Il prend en compte les données de plus de 215 pays et les affiche via des graphes et des tableaux représentants les chiffres enregistrés par pays, par continent."
              }
            ],
            requirement_intro:"Quelles sont les spécifités de ce projet ?",
            requirements:[
              {
                message: "présentation des chiffres mondiaux globaux de la pandémie"
              },
              {
                message: "présentation des chiffres par continents et par pays"
              },
              {
                message: "visualisation de l'évolution de la maladie et d'évolution des vaccinations ( depuis janvier 2020 ) via des graphes"
              },
              {
                message: "présentation de la carte du monde avec des indicateurs de couleur suivant la gravité des cas dans différents pays" 
              },
              {
                message: "Mise à jour des bases de données toutes les 45 minutes"
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
        casabreizh:
          {
            image: "../../../assets/img/casabreizh-header.png",
            link:"https://casabreizh.herokuapp.com",
            who:[
              {
                message:"<b>Le CASABREIZH</b> est un restaurant situé dans la ville de Rennes. Il propose des spécialités africaines et des plats bretons."
              }
            ],
            why:[
              {
                message: "Après avoir repéré l'ancien site web du restaurant sur internet, j'ai contacté le propriétaire en lui proposant de travailler ensemble pour refaire un nouveau site web qui répond aux réalités et spécificités actuelles en terme de design et expérience utilisateur."
              },
              {
                message: " Ce dernier a bien accueilli ma proposition et m'a confié d'autres problèmes qu'il rencontrait avec son ancien site web vieux de plus de 10 ans."
              },
              {
                message: " Après validation des interfaces utilisateurs, j'ai débuté le projet en le sollicitant tout au long de la phase de développement."
              }
            ],
            requirement_intro:"Les exigences de ce site web sont les suivantes: ",
            requirements:[
              {
                message: "permettre aux utilisateurs de consulter les menus, plats, desserts, boissons proposés par le restaurant"
              },
              {
                message: "donner la possibilités aux utilisateurs de laisser des notes et commentaires via le site web"
              },
              {
                message: "donner la possibilités aux utilisateurs de contacter le restaurant via un formulaire de contact"
              },
              {
                message: "créer une interface administrateur sécurisée, accessible via login et mot de passe qui permet de gérer les plats ( mettre à jour et indiquer l'indisponibité/disponibilité)"
              },
              {
                message: "rediriger les clients vers les comptes Uber Eat et Deliveroo du restaurant pour des livraisons à domicile"
              },
              {
                message: "optimiser le référencement SEO"
              },
              {
                message: "terminer le développement du site web et le mettre en ligne"
              }
            ],

            estate: "en cours",

            technologies:[
              {
                name: "Angular 12",
                image: "../../../assets/img/logos/angular_logo.png",
                alt:"angular logo"
              },
              {
                name: "Prime ng",
                image: "../../../assets/img/logos/primeng_logo.png",
                alt:"prime ng logo"
              },
              {
                name: "Sass",
                image: "../../../assets/img/logos/scss.png",
                alt:"sass logo"
              },
              {
                name: "Node js",
                image: "../../../assets/img/logos/node_logo.png",
                alt:"node js logo"
              },
              {
                name: "Express js",
                image: "../../../assets/img/logos/express_logo.png",
                alt:"express logo"
              },
              {
                name: "MongoDB",
                image: "../../../assets/img/logos/mongodb_logo.png",
                alt:"mongoDB logo"
              },
              {
                name: "OVH",
                image: "../../../assets/img/logos/ovh_logo.png",
                alt:"ovh logo"
              },
              {
                name: "JWT",
                image: "../../../assets/img/logos/json_web_token_logo.png",
                alt:"jwt logo"
              },
              {
                name: "Heroku",
                image: "",
                alt:"angular logo"
              },
              {
                name: "Adobe XXD",
                image: "../../../assets/img/logos/adobe_xd.png",
                alt:"adobe logo"
              },
              {
                name: "Github",
                image: "../../../assets/img/logos/",
                alt:"github logo"
              }
            ],
          }
      },
      {
        elitesvoyages:
          {
            image: "../../../assets/img/logos/ev_logo.png",
            link:"https://elites-voyages.herokuapp.com",
            who:[
              {
                message:"<b>ELITES VOYAGES</b>  est une agence de voyage et de tourisme située au Cameroun."
              }
            ],
            why:[
              {
                message: "Voulant se rapprocher d'avantage de sa clientèle grandissante et surtout voulant s'alligner dans la dynamique de digitalisation mondiale actuelle, elle a décidé de se doter d'un site web aujourd'hui indispensable dans ces secteurs d'activités."
              },
              {
                message: " Après un ensemble de réunions au bouts desquelles je leur ai présenté le design du site web et les interfaces utilisateurs de la solution que je proposais, nous sommes tombés d'accord. Étant donné qu'elle ne possedait pas d'ancienne solution , j'ai dû tout créer de rien y compris le logo."
              }
            ],
            requirement_intro:"Les exigences de ce site web sont les suivantes: ",
            requirements:[
              {
                message: "achat du nom de domaine"
              },
              {
                message: "création d'adresses mails de contacts professionnelles"
              },
              {
                message: "création d'une partie administrateur sécurisée de gestion du site web"
              },
              {
                message: "création des formulaires de contact utilisateurs"
              },
              {
                message: "création des comptes par des utilisateurs"
              },
              {
                message: "présentation des services proposés par des partenanire"
              },
              {
                message: "présentation des services de l'entreprise via des design de qualité"
              },
              {
                message: "optimisation le référencement SEO"
              },
              {
                message: "intégration googe analytics"
              },
              {
                message: "site web bilingue (anglais, français)"
              }
              
            ],

            estate: "en cours",

            technologies:[
              {
                name: "Angular 12",
                image: "../../../assets/img/logos/angular_logo.png",
                alt:"angular logo"
              },
              {
                name: "Prime ng",
                image: "../../../assets/img/logos/primeng_logo.png",
                alt:"prime ng logo"
              },
              {
                name: "Sass",
                image: "../../../assets/img/logos/scss.png",
                alt:"sass logo"
              },
              {
                name: "Node js",
                image: "../../../assets/img/logos/node_logo.png",
                alt:"node js logo"
              },
              {
                name: "Express js",
                image: "../../../assets/img/logos/express_logo.png",
                alt:"express logo"
              },
              {
                name: "MongoDB",
                image: "../../../assets/img/logos/mongodb_logo.png",
                alt:"mongoDB logo"
              },
              {
                name: "ionos",
                image: "../../../assets/img/logos/ionos_logo.pn",
                alt:"ionos logo"
              },
              {
                name: "JWT",
                image: "../../../assets/img/logos/json_web_token_logo.png",
                alt:"jwt logo"
              },
              {
                name: "Heroku",
                image: "",
                alt:"angular logo"
              },
              {
                name: "Adobe XD",
                image: "../../../assets/img/logos/adobe_xd.png",
                alt:"adobe logo"
              },
              {
                name: "Github",
                image: "../../../assets/img/logos/",
                alt:"github logo"
              },
              {
                name: "Google Anlystics",
                image: "../../../assets/img/logos/google_analytics_logo.png",
                alt:"google anlystics logo"
              }
            ],
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

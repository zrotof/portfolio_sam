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
        "projectImage": "../../../assets/img/projects/sscovid19.png",
        "projectSummary":"Réalisation d'une application web qui permet de suivre l'évolution de l'épidémie de la covid-19 dans le monde",
        "projectImageAltAttribute": "miniature du site web sscovid19",
        "projectCode": "sscovid19"

      },

      {
        "projectTitle":"Restaurant",
        "projectImage": "../../../assets/img/projects/casabreizh.png",
        "projectSummary":"Réalisation de template responsive de site web d'un restaurant mono-page ",
        "projectImageAltAttribute": "miniature du site web casabreizh",
        "projectCode": "casabreizh"
      },

      {
        "projectTitle":"Elites Voyages",
        "projectImage": "../../../assets/img/projects/ev.png",
        "projectSummary":"Réalisation du site web d'Elites Voyages, agence de voyage, de tourisme, de transport et de logistique",
        "projectImageAltAttribute": "miniature du site web elites voyages",
        "projectCode": "elitesvoyages"
      },

      {
        "projectTitle":"FOR YOU",
        "projectImage": "../../../assets/img/projects/foryou.png",
        "projectSummary":"Réalisation du site web de la chaine de télévision et chaine de radio internationale For You Media",
        "projectImageAltAttribute": "logo de la chaine de télé foryou media",
        "projectCode": "foryoumedias"
      }
    ]
  }

  initProjectData(){

    return this.projectsListAllData = [

      {
            code: "sscovid19",
            image: "../../../assets/img/projects/sscovid19-responsive.png",
            link:"https://sscovid19.com",
            who:[
              {
                message:"<b>SSCOVID19</b> est une application web qui présente l'état d'évolution de la covid-19 dans le monde."
              }
            ],
            why:[
              {
                message: "C'est un projet personnel que j'ai réalisé dans le but de participer activement dans la lutte contre la covid en permettant à quiconque de consulter les chiffres clés de la pandémie. "
              },
              {
                message: "Il prend en compte les données de plus de 215 pays et les affiche via des graphes et des tableaux représentants les chiffres enregistrés par pays et par continent."
              }
            ],
            requirement_intro:"Quelles sont les spécifités de ce projet ?",
            requirements:[
              {
                message: "présentation des chiffres mondiaux de la pandémie "
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
          
      },
      {
        code: "casabreizh",
            image: "../../../assets/img/projects/casabreizh-responsive.png",
            link:"https://casabreizh.herokuapp.com",
            who:[
              {
                message:"Je me suis proposé de réaliser un template de site web d'un restaurant."
              }
            ],
            why:[
              {
                message: "C'est un site web mono-page qui permettrait à un restaurant de présenter ses plats et services proposés à ses clients"
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
                message: "créer une partie administrateur sécurisée qui permet de gérer les plats ( mettre à jour et indiquer l'indisponibité/disponibilité)"
              },
              {
                message: "rediriger les clients vers les comptes Uber Eat, Deliveroo , ... du restaurant pour des livraisons à domicile"
              },
              {
                message: "optimiser le référencement SEO"
              }
            ],

            estate: "terminé",

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
          
      },
      {
        code: "elitesvoyages",
            image: "../../../assets/img/projects/ev-responsive.png",
            link:"https://elites-voyages.com",
            who:[
              {
                message:"<b>ELITES VOYAGES</b>  est une agence de voyage et de tourisme située au Cameroun."
              }
            ],
            why:[
              {
                message: "Voulant se rapprocher d'avantage de sa clientèle grandissante et surtout voulant s'alligner dans la dynamique de digitalisation mondiale actuelle, elle a décidé de se doter d'un site web aujourd'hui indispensable dans ses secteurs d'activités."
              },
              {
                message: "Après un ensemble de réunions au bouts desquelles je leur ai présenté le design du site web et les interfaces utilisateurs de la solution que je proposais, nous sommes tombés d'accord. Étant donné qu'elle ne possedait pas d'ancienne solution , j'ai dû tout créer de rien y compris le logo."
              }
            ],
            requirement_intro:"Les exigences de ce site web étaient les suivantes: ",
            requirements:[
              {
                message: "achat du nom de domaine"
              },
              {
                message: "création d'adresses mails professionnelles"
              },
              {
                message: "présentation des services de l'entreprise via des design de qualité"
              },
              
              {
                message: "création de différents formulaires d'accès aux services (Réservation de billet d'avions, hôtel, appartements meublé, location voiture, expédition DHL, ...) "
              },
              {
                message: "présentation des services proposés par des entreprises partenanires"
              },
              {
                message: "création d'une partie administrateur sécurisée destinée à la gestion du site web"
              },
              
              {
                message: "optimisation du SEO"
              },
              {
                message: "intégration google analytics"
              },
              {
                message: "Intégration d'une adaptation de prix suivant les dévises"
              },
              {
                message: "Formation des équipes pour l'utilisation de la partie admin"
              },
              {
                message: "Mise en ligne du site web"
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

    ]
  }

  getProjectData(param: string){

    let projectData: any;

    let projectsListAllData = this.initProjectData();

    projectsListAllData.forEach(project =>{
      
      if( project.code == param ){
        projectData = project;
      }
    })

    return projectData;
  }
  
  
}

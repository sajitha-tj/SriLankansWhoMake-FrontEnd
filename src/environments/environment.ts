// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  userRouteLink:'http://localhost:3000/api/v1/userRoute/',
  allUsers:[],
  skillSet:[
    "Artist", "Art Director", "3D Designer", "Book Designer", "Brand Designer", "Copywriter", "Content Writer",
    "Creative Director", "Data Scientist", "Film Maker", "Founder", "Graphic Designer", "Head", "Illustrator",
    "Indie Maker", "Industrial Designer", "Interior Designer", "Lead", "Letterer", "Mentor", "Photographer", "Podcaster",
    "Product Designer", "Speaker", "Software Engineer", "UI/UX Designer", "Writer"
  ]
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

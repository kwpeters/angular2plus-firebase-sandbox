import { Component } from "@angular/core";
import * as firebase from "firebase";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})
export class AppComponent {
    public title: string = "angular2pluts-firebase-sandbox";
    public featuresText: string;


    public constructor() {
        this._initializeFirebase();


    }


    private _initializeFirebase(): void {
        const config = {
            apiKey: "AIzaSyCMSrX3CU3qC0TzkIyi7goyP8S1qI6EliE",
            authDomain: "fir-sandbox-af382.firebaseapp.com",
            databaseURL: "https://fir-sandbox-af382.firebaseio.com",
            projectId: "fir-sandbox-af382",
            storageBucket: "",
            messagingSenderId: "72335817217"
        };

        const app: firebase.app.App = firebase.initializeApp(config);

        try {
            let app = firebase.app();
            let features = ["auth", "database", "messaging", "storage"].filter(feature => typeof app[feature] === "function");
            this.featuresText = `Firebase SDK loaded with ${features.join(", ")}`;
            // document.getElementById("load").innerHTML = `Firebase SDK loaded with ${features.join("", "")}`;
        } catch (e) {
            console.error(e);
            this.featuresText = "Error loading the Firebase SDK, check the console.";
            // document.getElementById("load").innerHTML = "Error loading the Firebase SDK, check the console.";
        }
    }


}

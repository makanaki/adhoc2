/// <reference path="../../app.ts" />
/// <reference path="../classes/service/IJet.ts" />


class HomeController extends TF.Controller {

    index() {
        this.view('index', { layout: 'layout' });
    }

}

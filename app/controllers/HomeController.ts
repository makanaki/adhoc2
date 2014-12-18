/// <reference path="../../app.ts" />
/// <reference path="../classes/service.ts" />


class HomeController extends TF.Controller {

    index() {
        this.view('index', { layout: 'layout' });
    }

}

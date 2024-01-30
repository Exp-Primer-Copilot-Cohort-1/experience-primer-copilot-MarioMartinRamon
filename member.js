function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'app/components/skills/member.html',
        controller : 'skillsMemberController',
        controllerAs : 'skillsMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    }
}
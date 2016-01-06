System.register(['angular2/core', 'angular2/common', './hero-form.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, common_1, hero_form_component_1;
    var TodoItem, AppComponent2;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (hero_form_component_1_1) {
                hero_form_component_1 = hero_form_component_1_1;
            }],
        execute: function() {
            TodoItem = (function () {
                function TodoItem(text, completed) {
                    this.text = text;
                    this.completed = completed;
                }
                return TodoItem;
            })();
            exports_1("TodoItem", TodoItem);
            AppComponent2 = (function () {
                function AppComponent2() {
                    this.todos = new Array();
                    this.todos.push(new TodoItem("Angular 2.0", false));
                    this.todos.push(new TodoItem("ReactiveJS", false));
                    this.todos.push(new TodoItem("Android", false));
                    this.todos.push(new TodoItem("NodeJS", false));
                    this.todos.push(new TodoItem("Grunt", false));
                }
                AppComponent2.prototype.setCompleted = function (item, checked) {
                    item.completed = checked;
                };
                AppComponent2.prototype.removeTodo = function (item, checked) {
                    this.todos.splice(this.todos.indexOf(item), 1);
                };
                AppComponent2.prototype.doneTyping = function ($event) {
                    if ($event.which === 13) {
                        this.addTodo($event.target);
                    }
                };
                AppComponent2.prototype.addTodo = function (input) {
                    this.todos.push(new TodoItem(input.value, false));
                    input.value = '';
                };
                AppComponent2.prototype.completeAll = function () {
                    for (var _i = 0, _a = this.todos; _i < _a.length; _i++) {
                        var todo = _a[_i];
                        todo.completed = true;
                    }
                };
                AppComponent2 = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/app.html', directives: [common_1.NgFor, common_1.NgIf, hero_form_component_1.HeroFormComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent2);
                return AppComponent2;
            })();
            exports_1("AppComponent2", AppComponent2);
        }
    }
});
//# sourceMappingURL=app.component.js.map
"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, ListaNegociacoes;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("ListaNegociacoes", ListaNegociacoes = function () {
                function ListaNegociacoes() {
                    _classCallCheck(this, ListaNegociacoes);

                    this._negociacoes = [];
                }

                _createClass(ListaNegociacoes, [{
                    key: "inverteOrdem",
                    value: function inverteOrdem() {
                        this._negociacoes.reverse();
                    }
                }, {
                    key: "adiciona",
                    value: function adiciona(negociacao) {
                        this._negociacoes.push(negociacao); // adiciona negociação a minha lista 
                        // this._negociacoes = [].concat(this._negociacoes, negociacao);    
                        // Reflect.apply(this._armadilha, this._contexto, [this]);
                    }
                }, {
                    key: "esvazia",
                    value: function esvazia() {
                        this._negociacoes = []; // recebe um array vazio
                        // this._armadilha(this); // se chamar tanto o metodo esvazia ou adiciona ele chama o  this._negociacoesView.update(this._listaNegociacoes);
                    }
                }, {
                    key: "ordena",
                    value: function ordena(criterio) {
                        this._negociacoes.sort(criterio);
                    }
                }, {
                    key: "negociacoes",
                    get: function get() {
                        // programação defensiva 
                        return [].concat(this._negociacoes); // this._negociacoes tras a lista de negociacoes 
                    }
                }, {
                    key: "volumeTotal",
                    get: function get() {
                        return this._negociacoes.reduce(function (total, n) {
                            return total + n.volume;
                        }, 0.0);
                    }
                }]);

                return ListaNegociacoes;
            }());

            _export("ListaNegociacoes", ListaNegociacoes);
        }
    };
});
//# sourceMappingURL=ListaNegociacoes.js.map